import React from 'react'

const ItemTemplate = (props) => {
    
    console.log(props.info)

    return (
        <div className="col-4 py-5">
            <div className="card text-center">
                <div className="card-header">
                    Id - {props.info.id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.info.title}</h5>
                    <p className="card-text">{props.info.description}</p>
                    <a href="#" className="btn btn-primary">Ver Más</a>
                </div>
                <div className="card-footer text-muted">
                    Disponible
                </div>
            </div>
        </div>
    )
}

export default ItemTemplate