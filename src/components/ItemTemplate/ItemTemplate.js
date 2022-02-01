import React from 'react'
import { Link } from 'react-router-dom'

const ItemTemplate = (props) => {
    
    // //console.log(props.info.stock)

    return (
        <div className="col-md-4 pt-4 pt-md-5">
            <div className="card text-center">
                <div className="card-header">
                    {props.info.title}
                </div>
                <div className="card-body">
                    {/* <h5 className="card-title">{props.info.title}</h5> */}
                    <div className="m-3">
                        <img className="img-fluid" src={props.info.pictureURL} />    
                    </div>
                    <p className="card-text text-justify">{props.info.shortDescription}</p>
                    <Link to={`/item/${props.info.id}`} className="btn btn-primary w-50 mt-2">
                        Ver más
                    </Link>
                </div>
                <div className="card-footer text-muted">
                    Disponible {props.info.stock}
                </div>
            </div>
        </div>
    )
}

export default ItemTemplate