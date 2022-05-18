import React, { useEffect, useState } from 'react';
import { getFirestore, query, where, collection } from 'firebase/firestore';
import buscarFirebase from '../../utils/buscarFirebase';
import Carousel from './Carousel';
import ThreeDots from '../Loading/ThreeDots';

export default function CarouselContainer({resaltar}) {
    const [productos , setProductos] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const [show, setShow] = useState(0);

    function reportWindowSize() {
        setWidth(window.innerWidth);
    }

    window.onresize = reportWindowSize;

    useEffect(() =>{
        if (width < 560) {
            setShow(1);
        } else if (width < 768){
            setShow(2);
        } else if (width < 1200){
            setShow(3);
        } else {
            setShow(4);
        }
    },[width])

    useEffect(() => {
        let isActive = true;
        setSpinner(true);
        const db = getFirestore();
        const productsCollection = collection(db, 'Productos');
        const q = query(productsCollection, where(resaltar, '==', true));
        buscarFirebase(q, setProductos, setSpinner, isActive);

        return () => {
            isActive = false;
        };
    },[]);

    return(
        <>
        {spinner && <ThreeDots />}
        {!spinner && (
            <div>
                <h2 className='titulo-carousel'>{(resaltar === 'destacado') ? 'Productos Destacados' : 'Productos en Oferta'}</h2>
                <Carousel productos={productos} show={show} spinner={spinner} resaltar={resaltar} />
            </div>
        )}
        </>
    )
}