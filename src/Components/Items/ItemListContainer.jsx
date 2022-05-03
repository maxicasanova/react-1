import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getFirestore, query, where } from 'firebase/firestore';
import ItemList from './ItemList';
import s from './ItemListContainer.module.css'
import buscarFirebase from '../../utils/buscarFirebase';

export default function ItemListContainer() {
    const [productos , setProductos] = useState([]);
    const {categoryId} = useParams();
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, 'Productos');
        if(categoryId){
            const q = query(productsCollection, where('categorias', 'array-contains',categoryId));
            buscarFirebase(q, setProductos);
        } else {
            buscarFirebase(productsCollection, setProductos);
        }
        setSpinner(false);
    },[categoryId]);

    return (
        <main>
            <h2>{categoryId ? categoryId : 'Todos los productos'}</h2>
            <div className={s.contenedorProductos}>
                <ItemList productos={productos} spinner={spinner}/>
            </div>
        </main>
    )
}