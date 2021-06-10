import React, {useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/cartContext';


const ItemCount = ({product, quantity}) => {

    const [ productQuantity, setProductQuantity ] = useState()

    const { cartProducts, setCartProducts } = useContext(CartContext)
    const { cartQuantity, setCartQuantity } = useContext(CartContext)
    
    useEffect(()=>{
        // console.log(quantity)
        if (quantity) {
            setProductQuantity(quantity);
        } else {
            setProductQuantity(1);
        }
    },[])

    let addAmount = () => {
        if (productQuantity < product.stock){
            setProductQuantity(productQuantity + 1)
            if(quantity){
                const notExist = cartProducts.find(element => element.product.SKU == product.SKU);
                notExist.quantity = productQuantity + 1
                setCartQuantity(cartQuantity + 1)
            }
        } else {
            console.log('no hay mas unidades');
        }
    }

    let removeAmount = ()=>{
        if (productQuantity > 1){
            setProductQuantity(productQuantity - 1)
            if(quantity){
                const notExist = cartProducts.find(element => element.product.SKU == product.SKU);
                notExist.quantity = productQuantity - 1
                setCartQuantity(cartQuantity - 1)
            }
        }
    }

    let addToCart = ()=>{
        
        if(cartProducts == ''){
            setCartProducts([{product, quantity: productQuantity}]) 
            setCartQuantity(cartQuantity + productQuantity)
        } 

        const notExist = cartProducts.find(element => element.product.SKU == product.SKU);

        if(notExist == undefined) {
            setCartProducts([...cartProducts, {product, quantity: productQuantity, isInCart: true}])
            setCartQuantity(cartQuantity + productQuantity)
        }
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-start my-3 pl-md-0">
                    <button type="button" className="btn btn-light"  onClick={removeAmount}>-</button>
                    <div className="">
                        <input type="number" className="form-control mx-auto text-center" value={productQuantity} disabled></input>
                    </div>
                    <button type="button" className="btn btn-light" onClick={addAmount}>+</button>
                </div>
                {
                    !quantity && 
                    <div className="col-12 d-flex justify-content-start mb-3 pl-md-0 w-100">
                        <button type="button" className="btn btn-success" onClick={addToCart}><img  src="/assets/shoppingCartIcon.svg" width="auto" height="auto"/>Añadir al Carrito</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default ItemCount