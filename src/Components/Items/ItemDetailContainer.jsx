import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import customFetch from '../../utils/customFetch';
import listaProductos from '../../utils/listaProductos';
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    const [detalle , setDetalle] = useState({});
    const [spinner, setSpinner] = useState(true);
    const {itemId} = useParams();

    useEffect(() =>{
        setSpinner(true);
        customFetch(2000, listaProductos)
        .then(res =>{
            setDetalle(res.find(i => i.id === Number(itemId)));
        })
        .catch(err => console.log(err))
        .finally(() => setSpinner(false))
    },[detalle,itemId])

    return (
        <>
            <ItemDetail producto={detalle} spinner={spinner} />
        </>
    )
}