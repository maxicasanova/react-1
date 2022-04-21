import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import s from './ItemDetail.module.css';
import ThreeDots from '../Loading/ThreeDots';

const ItemDetail = ({producto, spinner}) => {

    const [agregado, setAgregado] = useState(false);

    return (
        <>
        {spinner ? 
            <div className={s.spinner}>
                <ThreeDots />
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
                {agregado ?
                    <div>
                        <p>Agregaste {producto.nombre} al carrito.</p>
                        <Button variant='success'><Link to={'/cart'}>Ir al Carrito</Link></Button>
                        <Button variant='secondary'><Link to={'/'}>Seguir Comprando</Link></Button>
                    </div> :
                    <ItemCount producto={producto} initial={1} setAgregado={setAgregado} />
                }
                
            </aside>
        </div>
        }
        </>
    );
};

export default ItemDetail;