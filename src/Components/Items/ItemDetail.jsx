import React from 'react';
import ItemCount from './ItemCount';
import s from './ItemDetail.module.css';

const ItemDetail = ({producto}) => {

    return (
        <div className={s.detalleProd}>
            <aside className={s.fotitos}>
                <img src={producto.url} alt="" />
                <img src={producto.url} alt="" />
                <img src={producto.url} alt="" />
            </aside>
            <img src={producto.url}></img>
            <aside className={s.descripcion}>
                <h1>{producto.name}</h1>
                <p>{producto.description}</p>
                <p>${producto.price} </p>
                <p>Disponible: {producto.stock}</p>
                <div className={s.selectColores}>
                    <input type="radio" name="colores" id="rojo" />Rojo
                    <input type="radio" name="colores" id="natural" />Natural
                    <input type="radio" name="colores" id="negro" />Negro
                </div>
                <ItemCount stock={producto.stock} initial={0}/>
            </aside>
        </div>
    );
};

export default ItemDetail;