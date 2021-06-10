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

    if (cartProducts.length > 0) {
        var productsCart = cartProducts.map((element) =>  
            <div>
                {element.product.title}
                <ItenCount product={element.product} quantity={element.quantity}/>
                {element.quantity}<br/>
                {element.quantity > 1 
                ? <div> {element.product.price + ' C/U'} <br /> { element.product.price * element.quantity} </div> 
                : element.product.price}
                <br/>
                <button className="btn btn-danger" onClick={() => removeProduct(element)}>X</button> 
            </div>
        );
    }

    console.log(cartProducts);

    useEffect(()=>{
        console.log('Hola');
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
                {productsCart} 
                Total : {totalPrice} <br />
                <button className="btn btn-danger" onClick={ () => emptyCar()} >Vaciar todo el Carrito</button> <br />
                <Link to={`/checkout`} className="btn btn-success regularLink">Checkout</Link>
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