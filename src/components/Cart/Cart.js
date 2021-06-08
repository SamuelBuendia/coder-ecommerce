import { getByTitle } from '@testing-library/dom'
import React, {useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import ItenCount from '../ItemCount/ItemCount'


const Cart = () => {

    const { cartProducts, setCartProducts } = useContext(CartContext)
    const { cartQuantity, setCartQuantity } = useContext(CartContext)

    const removeProduct = (produ) => {
        // console.log(produ.quantity)
        console.log(produ)
        setCartProducts(cartProducts.filter(x => x.product.SKU != produ.product.SKU));
    }

    console.log(cartProducts);

    return (
        <div>
            {
            cartProducts.length > 0 
            ? cartProducts.map((element) =>  
            <div>
                {element.product.title}
                <ItenCount product={element.product} quantity={element.quantity}/>
                {element.quantity}
                <button className="btn btn-danger" onClick={() => removeProduct(element)}>X</button> 
            </div>
            ) 
            :  <div>No hay nada</div>
            }
        </div>
    )
}

export default Cart