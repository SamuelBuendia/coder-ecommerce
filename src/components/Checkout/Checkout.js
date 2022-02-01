import { getByTitle } from '@testing-library/dom'
import React, {useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import ItenCount from '../ItemCount/ItemCount'
import { Link, NavLink } from 'react-router-dom'
import { getFirestore } from '../../firebase'
import firebase from 'firebase/app';
import { Redirect } from 'react-router';
import 'firebase/firestore';

const Checkout = () => {

    const [ compra_ok, setCompra_ok ] = useState('')

    const { cartProducts, setCartProducts } = useContext(CartContext)
    const { cartQuantity, setCartQuantity } = useContext(CartContext)
    const { totalPrice, setTotalPrice } = useContext(CartContext)

    const [client, setClient] = useState({
        name: '',
        lastname: '',
        document: '',
        email: '',
        phone: '',
    });

    const changeDataClient = evt => {
        setClient({
            ...client,
            [evt.target.name]: evt.target.value
        });
    };

    //console.log(cartProducts)
    
    const createOrder = async (event) => {
        //console.log(event)
        event.preventDefault();
        const newOrder = {
            buyer: {
                name: client.name,
                lastname: client.lastname,
                document: client.document,
                email: client.email,
                phone: client.phone,
            },
            items: cartProducts.map(item => ({
                sku: item.product.SKU,
                title: item.product.title,
                price: item.product.price,
                quantity: item.quantity
            })),
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: totalPrice
        };
        //console.log(newOrder)
        const db = getFirestore();
        const orders = db.collection("orders");

        const itemsToUpdate = db.collection("items")
            .where(firebase.firestore.FieldPath.documentId(), 'in', cartProducts.map(item => item.product.id));
        //console.log(itemsToUpdate)
        const query = await itemsToUpdate.get();
        const batch = db.batch();
        query.docs.forEach((docSnap, idx) => {
            batch.update(docSnap.ref, { stock: docSnap.data().stock - cartProducts[idx].quantity });
        })
        await batch.commit();

        try {
            const doc = await orders.add(newOrder);
            //console.log(doc.id);
            setCartProducts([]);
            setCartQuantity(0);
            setCompra_ok(doc.id);
        } catch (err) {
            setCompra_ok('Error en la compra! ' + err);
            //console.log(err);
        }
    }

    return (
        <div style={{minHeight:'90vh'}} className="container d-flex align-items-center">
            <div className="row my-4">
                <div className="col-11 col-md-7 mx-auto">
                    <h5 className="text-left mb-4">Información General</h5>
                    <form className="text-left row" onSubmit={createOrder}> 
                        <div className="form-group col-6">
                            <label>Nombre</label>
                            <input type="text" className="form-control" name="name" value={client.name} placeholder="Name" onChange={changeDataClient} required />
                        </div>
                        <div className="form-group col-6">
                            <label>Apellido</label>
                            <input type="text" className="form-control" name="lastname" value={client.lastname} placeholder="Lastname" onChange={changeDataClient} required />
                        </div>
                        <div className="form-group col-6">
                            <label>Documento ID</label>
                            <input type="number" className="form-control" name="document" value={client.document} placeholder="Document" onChange={changeDataClient} required />
                        </div>
                        <div className="form-group col-6">
                            <label>Celular</label>
                            <input type="number" className="form-control" name="phone" value={client.phone} placeholder="Mobile" onChange={changeDataClient} required />
                        </div>
                        <div className="form-group col-12">
                            <label>Correo</label>
                            <input type="email" className="form-control" name="email" value={client.email} placeholder="Email" onChange={changeDataClient} required />
                        </div>
                        <div className="col-12 d-flex justify-content-between">
                            <Link to={`/cart`} className="btn btn-success regularLink">Volver al carrito</Link>
                            { cartProducts.length > 0 
                            ? <input type="submit" className="btn btn-danger" value={"Terminar compra"} /> 
                            : "" }                           
                        </div>
                    </form>
                </div>

                <div className="col-11 col-md-7 mx-auto mt-5 text-left">
                    {compra_ok != '' ? 
                    <div className='mt-5'>  
                        <h2>Compra realizada con Exito!</h2> 
                        <h3>Código: <span className='text-danger'>{compra_ok}</span> </h3>
                        <h6> Guarda el código y preguntanos por tu pedido. </h6>
                    </div>
                    : ''}
                </div>
            </div>
        </div>
    )
}

export default Checkout