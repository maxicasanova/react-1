import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
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
            if (res.exists()) setDetalle({id: res.id, ...res.data()});
        })
        .finally(()=>setSpinner(false))
    },[])
    
    return (
        <>
            <ItemDetail producto={detalle} spinner={spinner} />
        </>
    )
}