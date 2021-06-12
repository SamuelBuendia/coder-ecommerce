import { getByTitle } from '@testing-library/dom'
import React, {useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import ItenCount from '../ItemCount/ItemCount'
import { Link, NavLink } from 'react-router-dom'
import { isDOMComponentElement } from 'react-dom/test-utils';


const Cart = () => {

    const { cartProducts, setCartProducts } = useContext(CartContext)
    const { cartQuantity, setCartQuantity } = useContext(CartContext)
    const { totalPrice, setTotalPrice } = useContext(CartContext)

    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    if (cartProducts.length > 0) {
        var productsCart = cartProducts.map((element) =>
        <div className="container">  
            <div className="row justify-content-center align-items-center py-3 border-bottom border-dark">
                <div className="col-2 p-1 gris-adidas">
                    <img className="img-fluid" src={element.product.pictureURL} />    
                </div>
                <div className="col-8 col-md-3 px-md-5 text-md-left ">
                    <h6>{element.product.title}</h6>
                    <ItenCount product={element.product} quantity={element.quantity}/>
                </div>
                <div className="col-7 col-md-2 d-flex justify-content-center">
                    {element.quantity > 1 
                    ? <div className="text-right"> <h4>{formatterPeso.format(element.product.price * element.quantity)}</h4>  <h6>{formatterPeso.format(element.product.price) + ' C/U'}</h6> </div> 
                    : <h4>{formatterPeso.format(element.product.price)}</h4>}
                </div>
                <div className="col-3 col-md-1">
                    <button className="btn btn-danger" onClick={() => removeProduct(element)}>X</button> 
                </div>
            </div>
        </div>
        );
    }

    useEffect(()=>{
        setTotalPrice(cartProducts.reduce((acc, item)=>{
            return acc + item.quantity * item.product.price;
        },0));
    },[cartQuantity])

    const removeProduct = (produ) => {
        setCartProducts(cartProducts.filter(x => x.product.SKU != produ.product.SKU));
        setCartQuantity(cartQuantity - produ.quantity);
    }

    const emptyCar = () => {
        setCartProducts([]);
        setCartQuantity(0)
    }

    return (
        <div style={{minHeight:'90vh'}} className="d-flex align-items-center justify-content-center">
            {
            cartProducts.length > 0 
            ? 
            <div> 
                <div className="container">  
                    <div className="row mt-4 mb-3 mb-md-0">
                        <div className="col-12 text-md-right">
                            <button className="btn btn-danger" onClick={ () => emptyCar()} >Vaciar el Carrito</button> <br />
                        </div>
                    </div>
                    <div className="d-none d-md-block d-lg-block">
                        <div className="row justify-content-center align-items-center py-3 border-bottom border-dark">
                            <div className="col-2">
                                Producto
                            </div>
                            <div className="col-3">
                                Cantidad
                            </div>
                            <div className="col-2">
                                Precio
                            </div>
                            <div className="col-1">
                            </div>
                        </div>
                    </div>
                </div>
                {productsCart} 
                <div className="container">
                    <div className="row justify-content-center justify-content-md-end">
                        <div className="col-8 col-md-3">
                            <h3 className="my-3 text-md-right">Total: {formatterPeso.format(totalPrice)}</h3>
                            <Link to={`/checkout`} className="btn btn-success text-light regularLink w-100">Checkout</Link><br />
                            <Link to={`/items/all`} className="btn btn-light regularLink w-100 my-2">Volver a la Tienda</Link>
                        </div>
                    </div>
                </div>
            </div>  
            :  
            <div>
                <p>
                    No hay nada 
                </p>
                <Link to={`/items/all`} className="btn btn-danger regularLink">Explorar Productos</Link>
            </div>
            }
        </div>
    )
}

export default Cart