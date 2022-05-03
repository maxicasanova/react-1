import React, { useEffect, useState } from 'react';
import { getFirestore, query, where, collection } from 'firebase/firestore';
import buscarFirebase from '../../utils/buscarFirebase';
import Carousel from './Carousel';
import ThreeDots from '../Loading/ThreeDots';

export default function CarouselContainer({resaltar}) {
    const [productos , setProductos] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const width = window.innerWidth;
    let show = 0;

    if (width < 560) {
        show = 1;
    } else if (width < 768){
        show = 2;
    } else if (width < 1200){
        show = 3;
    } else{
        show = 4;
    }

    useEffect(() => {
        setSpinner(true);
        const db = getFirestore();
        const productsCollection = collection(db, 'Productos');
        const q = query(productsCollection, where(resaltar, '==', true));
        buscarFirebase(q, setProductos);
        setSpinner(false);
    },[]);

    return(
        <>
        {spinner && <ThreeDots />}
        {!spinner && (
            <div>
                <h2 className='titulo-carousel'>{(resaltar === 'destacado') ? 'Productos Destacados' : 'Productos en Oferta'}</h2>
                <Carousel productos={productos} resaltar={resaltar} show={show} spinner={spinner} />
            </div>
        )}
        </>
    )
}