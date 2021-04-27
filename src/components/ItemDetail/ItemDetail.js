import React from 'react'
import ItenCount from '../ItemCount/ItemCount'

const ItemDetail = ({info}) => {
    
    // console.log(`hola ${info.title}`)

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 px-5">
                        <img className="img-fluid" src={info.pictureURL} />    
                    </div>
                    <div className="col-6 px-5 d-flex flex-column justify-content-center align-items-start">
                        <h2 className="mb-3">{info.title}</h2>
                        <p className="text-left">{info.description}</p>
                        <h3>Precio Unidad ${info.price}</h3>
                        <ItenCount stock={info.stock} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail