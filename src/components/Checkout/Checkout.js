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

    console.log(cartProducts)
    
    const createOrder = async () => {
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
        console.log(newOrder)
        const db = getFirestore();
        const orders = db.collection("orders");

        const itemsToUpdate = db.collection("items")
            .where(firebase.firestore.FieldPath.documentId(), "in", cartProducts.map(item => item.product.id));
        console.log(itemsToUpdate)
        const query = await itemsToUpdate.get();
        const batch = db.batch();
        query.docs.forEach((docSnap, idx) => {
            batch.update(docSnap.ref, { stock: docSnap.data().stock - cartProducts[idx].quantity });
        })
        await batch.commit();

        try {
            const doc = await orders.add(newOrder);
            console.log(doc.id);
            setCartProducts([]);
            setCartQuantity(0);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div style={{minHeight:'90vh'}} className="container">
            <div className="row my-4">
                <div className="col-md-6">
                    <h5 className="text-left mb-3">1. Información general</h5>
                    <form className="text-left row"> 
                        <div className="form-group col-6">
                            <label>Nombre</label>
                            <input type="text" className="form-control" name="name" value={client.name} placeholder="Name" onChange={changeDataClient} />
                        </div>
                        <div className="form-group col-6">
                            <label>Apellido</label>
                            <input type="text" className="form-control" name="lastname" value={client.lastname} placeholder="Lastname" onChange={changeDataClient} />
                        </div>
                        <div className="form-group col-6">
                            <label>Documento ID</label>
                            <input type="text" className="form-control" name="document" value={client.document} placeholder="Document" onChange={changeDataClient} />
                        </div>
                        <div className="form-group col-6">
                            <label>Celular</label>
                            <input type="number" className="form-control" name="phone" value={client.phone} placeholder="Mobile" onChange={changeDataClient} />
                        </div>
                        <div className="form-group col-12">
                            <label>Correo</label>
                            <input type="email" className="form-control" name="email" value={client.email} placeholder="Email" onChange={changeDataClient} />
                        </div>
                    </form>
                </div>
                <div className="col-6">
                    holas
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Link to={`/cart`} className="btn btn-success regularLink">Volver al carrito</Link>
                    <button className="btn btn-danger" onClick={() => createOrder()}>Terminar compra</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout