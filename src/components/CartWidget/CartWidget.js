import React, {useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/cartContext';

const CartWidget = (props) => {

    const { cartQuantity } = useContext(CartContext)

    useEffect(()=>{
        // setCartQuantity(3)
        console.log(cartQuantity)
    },[])

    return (
        <div>
            <img src="/assets/shoppingCartIcon.svg" width="25" height="auto" alt="la manzana de apple" />
            <span>{cartQuantity}</span>
        </div>
    )
}

export default CartWidget