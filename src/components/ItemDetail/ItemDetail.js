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
                        <h2 className="mb-3 mt-4">{info.title}</h2>
                        <p className="text-justify">{info.description}</p>
                        <h3 className="text-center mb-4">Precio Unidad {formatterPeso.format(info.price)}</h3>
                        { 
                        isInCart === undefined 
                        ? 
                        <ItenCount product={info}/> 
                        : 
                        <div className="container">
                            <div className="row"> 
                                <div className="col-md-12 pl-md-0 d-flex justify-content-center justify-content-md-start">
                                    <Link to={`/cart`} className="btn btn-danger" style={{paddingRight:'2rem', paddingLeft:'2rem', }}>
                                        Finalizar compra
                                    </Link>
                                </div>
                            </div>
                        </div>
                        }
                        {
                        <div className="container">
                            <div className="row">   
                                <div className="col-md-12 my-2 pl-md-0 d-flex justify-content-center justify-content-md-start">
                                    <Link to={`/items/all`} className="btn btn-primary py-2 px-4">
                                        Seguir comprando
                                    </Link>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail