import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
// import customFetch from '../../utils/customFetch';
// import listaProductos from '../../utils/listaProductos';
import Carousel from './Carousel';

export default function CarouselContainer({categoryId}) {
    const [productos , setProductos] = useState([]);
    const [spinner, setSpinner] = useState(true);

    // useEffect(() =>{
    //     setSpinner(true);
    //     customFetch(1500, listaProductos)
    //     .then(res => {
    //         if(categoryId){
    //             let filtered = res.filter(function(f){
    //                 for (const cat of f.categorias) {
    //                     if (cat === categoryId) return cat;
    //                 }
    //             })
    //             setProductos(filtered);
    //         } else {
    //             setProductos(res);
    //             // evaluar un array vacio.
    //         }
    //     })
    //     .catch(err => console.log(err))
    //     .finally(() => setSpinner(false))
    // },[])

    return(
        <>
        <Carousel productos={productos} categoryId={categoryId} show={4} spinner = {spinner} />
        </>
    )
}