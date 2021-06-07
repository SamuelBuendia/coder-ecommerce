import { getByTitle } from '@testing-library/dom'
import React, {useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import ItenCount from '../ItemCount/ItemCount'


const Cart = () => {

    const { cartProducts, setCartProducts } = useContext(CartContext)
    const { cartQuantity, setCartQuantity } = useContext(CartContext)

    if (cartProducts.length > 0) {
        var productsCart = cartProducts.map((element) =>  
            <div>
                {element.product.title}
                <ItenCount product={element.product} quantity={element.quantity}/>
                {element.quantity}
                <button className="btn btn-danger" onClick={() => removeProduct(element)}>X</button> 
            </div>
        );
    }

    let removeProduct = (produ) => {
        console.log(produ.quantity)
        setCartProducts(cartProducts.filter(x => x.SKU != produ.SKU));
    }

    console.log(cartProducts);

    return (
        <div>
            {cartProducts.length > 0 ? productsCart :  <div>No hay nada</div>}
        </div>
    )
}

export default Cart