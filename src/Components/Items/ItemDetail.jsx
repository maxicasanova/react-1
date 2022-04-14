import React from 'react';
import { Spinner } from 'react-bootstrap';
import ItemCount from './ItemCount';
import s from './ItemDetail.module.css';

const ItemDetail = ({producto, spinner}) => {

    return (
        <>
        {spinner && (<div className={s.spinner}><Spinner animation='border' /><p>Cargando...</p></div>)}
        {!spinner && (
        <div className={s.detalleProd}>
            <aside className={s.fotitos}>
                <img src={producto.imagen} alt="" />
                <img src={producto.imagen} alt="" />
                <img src={producto.imagen} alt="" />
            </aside>
            <img src={producto.imagen}></img>
            <aside className={s.descripcion}>
                <h1>{producto.nombre}</h1>
                <p>{producto.descripcion}</p>
                <p>${producto.precio} </p>
                <p>Disponible: {producto.stock}</p>
                <div className={s.selectColores}>
                    <input type="radio" name="colores" id="rojo" />Rojo
                    <input type="radio" name="colores" id="natural" />Natural
                    <input type="radio" name="colores" id="negro" />Negro
                </div>
                <ItemCount stock={producto.stock} initial={0}/>
            </aside>
        </div>
        )}
        </>
    );
};

export default ItemDetail;