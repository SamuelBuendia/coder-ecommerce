import { getByTitle } from '@testing-library/dom'
import React, {useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router'

import { getFirestore } from '../../firebase'

const ItemListContainer = () => {

    const [ items, setItems ] = useState([])
    const [ loading, setLoading ] = useState(false);

    const { categoryName } = useParams();

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore();
        const itemsCollection = db.collection('items');

        switch (categoryName) {
          case 'hombre':
            var itemsFiltered = itemsCollection.where('categoryId','==','z0sXtGHDFnhfNZ56TVNr');
            break;
          case 'mujer':
            var itemsFiltered = itemsCollection.where('categoryId','==','3Wl1FipgH56d52qPuyla');
            break;
          case 'ninos':
            var itemsFiltered = itemsCollection.where('categoryId','==','5MhyA1Clum6afL3qs3LB');
            break;
          case 'accesorios':
            var itemsFiltered = itemsCollection.where('categoryId','==','gmQ1yYGUeuQmdMi8BJOg');
            break;
          default:
            var itemsFiltered = itemsCollection;
            break;
        }

        itemsFiltered.get()
        .then((querySnapShot)=>{
          querySnapShot.size === 0 ? console.log('No hay items') : console.log(`Hay ${querySnapShot.size} items`)
          const documentos = querySnapShot.docs.map((doc)=>{
            //console.log(doc)
            return {
              id: doc.id,
              ...doc.data()
            }}
            );
          setItems(documentos)
          //console.log(documentos)
        })
        .catch((err)=>console.log('ocurrio un error', err))
        .finally(()=>setLoading(false))
    },[categoryName])

    return (
        <div style={{minHeight: '90vh'}} className="d-flex align-items-center justify-content-center">
            { loading && <div><Spinner animation='border' variant='danger' /></div> }
            { !loading && <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer