import React, {useContext, useEffect} from 'react'
import ItenCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/cartContext';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom'



const ItemDetail = ({info}) => {
    
    // console.log(`hola ${info.title}`)
    const { cartProducts, setCartProducts } = useContext(CartContext)

    useEffect(()=>{
    },[])

    const isInCart = cartProducts.find(element => element.product.SKU === info.SKU)

    console.log(isInCart)

    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 px-5 py-5 gris-adidas">
                        <img className="img-fluid" src={info.pictureURL} />    
                    </div>
                    <div className="col-md-6 px-5 d-flex flex-column justify-content-center align-items-start">
                        <h2 className="mb-3">{info.title}</h2>
                        <p className="text-left">{info.description}</p>
                        <h3>Precio Unidad {formatterPeso.format(info.price)}</h3>
                        { 
                        isInCart === undefined 
                        ? 
                        <ItenCount product={info}/> 
                        : 
                        <Link to={`/cart`} className="btn btn-danger">
                            Finalizar compra
                        </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail