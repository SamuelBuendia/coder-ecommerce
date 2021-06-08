import React from 'react'
import { Link } from 'react-router-dom'

const ItemTemplate = (props) => {
    
    // console.log(props.info.stock)

    return (
        <div className="col-md-4 py-5">
            <div className="card text-center">
                <div className="card-header">
                    Id - {props.info.id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.info.title}</h5>
                    <p className="card-text">{props.info.description}</p>
                    <Link to={`/item/${props.info.id}`} className="btn btn-primary">
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