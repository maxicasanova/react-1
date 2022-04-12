import React, { useEffect, useState } from 'react';
import customFetch from '../../utils/customFetch';
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer({item}) {
    const [detalle , setDetalle] = useState({});

    useEffect(() =>{
        customFetch(2000, item)
        .then(res => setDetalle(res))
        .catch(err => console.log(err))
    },[detalle])

    return (
        <>
            <ItemDetail producto={detalle} />
        </>
    )
}