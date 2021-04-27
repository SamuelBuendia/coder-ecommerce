import { getByTitle } from '@testing-library/dom'
import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    // const { itemId } = useParams();
    // console.log(`UserId ${itemId}`)

    const [ item, setItem ] = useState({})
  

    useEffect(()=>{
        const itemPromise = new Promise ((resolve, reject)=>{
            const itemGet = {
                id: 2,
                title: 'Camiseta',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,',
                stock: 5,
                price: '100.000',
                pictureURL: 'https://cutt.ly/TvIWbW7'
            }
            
            setTimeout(()=>{
                resolve(itemGet)
            }, 100)
        })

        itemPromise
        .then((response)=>{
            setItem(response)
            // res.forEach((item)=>{
            // console.log("item", item)
            // if (item.name === 'Arco') throw new Error()
        })
        .catch((err)=>{
            console.log("Hubo un error")
        })
    },[])

    console.log(item)

    return (
        <div>
            <ItemDetail key={item.id} info={item} />
        </div>
    )
}

export default ItemDetailContainer