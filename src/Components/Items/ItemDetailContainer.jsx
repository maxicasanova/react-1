import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
// import customFetch from '../../utils/customFetch';
// import listaProductos from '../../utils/listaProductos';
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    const [detalle , setDetalle] = useState({});
    const [spinner, setSpinner] = useState(true);
    const {itemId} = useParams();

    useEffect(() =>{
        setSpinner(true);
        const db = getFirestore();
        const itemRef = doc(db, 'Productos', itemId);

        getDoc(itemRef)
        .then((res) => {
            if (res.exists()) {
                setDetalle({id: res.id, ...res.data()});
            }
            setSpinner(false);
        })
    },[itemId])
    
    return (
        <>
            <ItemDetail producto={detalle} spinner={spinner} />
        </>
    )
}