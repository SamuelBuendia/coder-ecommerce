import React from 'react'
import ItemTemplate from '../ItemTemplate/ItemTemplate'

const ItemList = (props) => {
    console.log(props)
    return (
        <div className="container">
             <div className="row justify-content-center">
                {
                props.items.map((item)=><ItemTemplate info={item} />)
                }
             </div>
        </div>
    )
}

export default ItemList