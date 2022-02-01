import { getByTitle } from '@testing-library/dom'
import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail/ItemDetail'

import { getFirestore } from '../../firebase'

const ItemDetailContainer = () => {

    const { itemId } = useParams();
    const [ item, setItem ] = useState({})
  
    useEffect(()=>{
        const db = getFirestore();
        const getOneItem = db.collection('items').doc(itemId);
        getOneItem.get()
        .then((query)=>{
            query.size > 0 ? console.log('Producto no disponible') : console.log(query.data());
            setItem({...query.data(), id: query.id});
        })
    },[itemId])

    //console.log(item)

    return (
        <div>
            <ItemDetail key={item.id} info={item} />
        </div>
    )
}

export default ItemDetailContainer