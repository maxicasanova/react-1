import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getFirestore, query, where } from 'firebase/firestore';
import ItemList from './ItemList';
import s from './ItemListContainer.module.css'
import buscarFirebase from '../../utils/buscarFirebase';

export default function ItemListContainer({filter}) {
    const [productos , setProductos] = useState([]);
    const {categoryId} = useParams();
    const [spinner, setSpinner] = useState(true);
    const [titulo, setTitulo] = useState('');

    const db = getFirestore();
    const productsCollection = collection(db, 'Productos');
    
    useEffect(() => {
        let isActive = true;
        setSpinner(true);
        let q = [];
        
        if(categoryId){
            q = query(productsCollection, where('categorias', 'array-contains',categoryId));
        } else if (filter === 'highlights'){
            q = query(productsCollection, where('destacado', '==', true));
            setTitulo('Productos destacados');
        } else if (filter === 'sales'){
            q = query(productsCollection, where('oferta', '==', true));
            setTitulo('Productos en oferta');
        }else {
            q = productsCollection
        }
        buscarFirebase(q, setProductos, setSpinner, isActive);

        return () => {
            isActive = false;
        };
    },[categoryId, filter]);

    return (
        <main>
            <h2 className={s.tituloCategoria}>{categoryId ? categoryId : filter ? titulo : 'Todos los productos'}</h2>
            <div className={s.contenedorProductos}>
                <ItemList productos={productos} spinner={spinner}/>
            </div>
        </main>
    )
}