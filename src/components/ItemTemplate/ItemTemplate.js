import React from 'react'
import ItenCount from '../ItemCount/ItemCount'
import { Link, NavLink } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const ItemTemplate = (props) => {
    
    // console.log(props.info.stock)

    return (
        <div className="col-4 py-5">
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