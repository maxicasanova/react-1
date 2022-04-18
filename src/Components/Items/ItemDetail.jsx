import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import s from './ItemDetail.module.css';

const ItemDetail = ({producto, spinner}) => {

    const [cantCarrito, setCantCarrito] = useState(0)

    const addToCart = (numero) =>{
        setCantCarrito(numero);
    }

    return (
        <>
        {spinner ? 
            <div className={s.spinner}>
                <Spinner animation='border' />
                <p>Cargando...</p>
            </div> :
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
                {cantCarrito > 0 ?
                    <div>
                        <p>Agregaste {cantCarrito} {producto.nombre} al carrito.</p>
                        <Button variant='success'><Link to={'/cart'}>Ir al Carrito</Link></Button>
                        <Button variant='secondary'><Link to={'/'}>Seguir Comprando</Link></Button>
                    </div> :
                    <ItemCount stock={producto.stock} initial={1} addToCart={addToCart} />
                }
                
            </aside>
        </div>
        }
        </>
    );
};

export default ItemDetail;