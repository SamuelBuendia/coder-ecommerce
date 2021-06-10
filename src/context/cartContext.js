import React, {useState, useEffect } from 'react'

export const CartContext = React.createContext([])

export const CartContextComp = ({children}) => {

    const [cartProducts, setCartProducts] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    // useEffect(()=>{
    // })

    return (
        <CartContext.Provider value={{cartProducts, setCartProducts, cartQuantity, setCartQuantity, totalPrice, setTotalPrice}}>
        {children}
        </ CartContext.Provider>
    )
}