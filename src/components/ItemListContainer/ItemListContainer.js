import { getByTitle } from '@testing-library/dom'
import React, {useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [ items, setItems ] = useState([])

    useEffect(()=>{
        const itemsPromise = new Promise ((resolve, reject)=>{
            const itemsArray = [
                {
                    id: 1,
                    title: 'Camisa',
                    description: 'Esta es una camisa',
                    price: '50.000',
                    pictureURL: 'https://cutt.ly/TvIWbW7'
                },
                {
                    id: 2,
                    title: 'Camiseta',
                    description: 'Esta es una camiseta',
                    price: '100.000',
                    pictureURL: 'https://cutt.ly/TvIWbW7'
                },
                {
                    id: 3,
                    title: 'Pantalon',
                    description: 'Esta es una pantalon',
                    price: '150.000',
                    pictureURL: 'https://cutt.ly/TvIWbW7'
                }
            ]
            setTimeout(()=>{
                resolve(itemsArray)
            }, 2000)
        })

        itemsPromise
        .then((response)=>{
            setItems(response)

            // res.forEach((item)=>{
            // console.log("item", item)
            // if (item.name === 'Arco') throw new Error()

        })
        .catch((err)=>{
            console.log("Hubo un error")
        })
    },[])

    return (
        <div>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer