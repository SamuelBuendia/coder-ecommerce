import React, {useState, useEffect } from 'react'

const ItemCount = (props) => {

    const [ productQuantity, setProductQuantity ] = useState()
    // console.log('aca',props.price)
    
    useEffect(()=>{
        setProductQuantity(1);
    },[])

    let addAmount = () => {
        if (productQuantity < props.stock){
            setProductQuantity(productQuantity + 1)
        }
    }

    let removeAmount = ()=>{
        if (productQuantity > 1){
            setProductQuantity(productQuantity - 1)
        }
    }

    // { productQuantity > 1 ? () => setProductQuantity(productQuantity - 1) : console.log("No hay mas unidades")}

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
                <div className="col-12 d-flex justify-content-start mb-3 pl-md-0 w-100">
                    <button type="button" className="btn btn-success"><img  src="/assets/shoppingCartIcon.svg" width="auto" height="auto" /> Añadir al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount