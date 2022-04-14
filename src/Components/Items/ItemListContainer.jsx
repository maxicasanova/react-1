import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import customFetch from '../../utils/customFetch';
import listaProductos from '../../utils/listaProductos';
import ItemList from './ItemList';
import s from './ItemListContainer.module.css'

export default function ItemListContainer() {
    const [productos , setProductos] = useState([]);
    const {categoryId} = useParams();
    const [spinner, setSpinner] = useState(true);

    useEffect(() =>{
        setSpinner(true);
        customFetch(3000, listaProductos)
        .then(res => {
            if(categoryId){
                let filtered = res.filter(function(f){
                    for (const cat of f.categorias) {
                        if (cat == categoryId) return cat;
                    }
                })
                setProductos(filtered);
            } else {
                setProductos(res);
            }
            setSpinner(false);
        })
        .catch(err => console.log(err))
    },[categoryId])

    return (
        <main className={s.contenedorProductos}>
            <ItemList productos={productos} spinner={spinner}/>
        </main>
    )
}