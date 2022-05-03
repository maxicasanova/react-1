import React, { useEffect, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import s from './ItemDetail.module.css';
import ThreeDots from '../Loading/ThreeDots';
import { CartContext } from '../Context/CartContextProvider';

const ItemDetail = ({producto, spinner}) => {

    const {agregado} = useContext(CartContext);

    const {setAgregado} = useContext(CartContext);

    const [imgPrinc, setImgPrinc] = useState('');

    const handleClick = (index) => {
        setImgPrinc(producto.imagenes[index]);
    }

    useEffect(() => {
        setAgregado(false);
    }, [])
    
    return (
        <>
        {spinner ? 
            <div className={s.spinner}>
                <ThreeDots />
            </div> :
        <div className={s.detalleProd}>
            <aside className={s.fotitos}>
                <img src={producto.imagenes[0]} onMouseOver={() => handleClick(0)} alt="" />
                <img src={producto.imagenes[1]} onMouseOver={() => handleClick(1)} alt="" />
                {producto.imagenes[2] && <img src={producto.imagenes[2]} onMouseOver={() => handleClick(2)} alt="" />}
                {producto.imagenes[3] && <img src={producto.imagenes[3]} onMouseOver={() => handleClick(3)} alt="" />}
            </aside>
            <img src={imgPrinc || producto.imagenes[0]}></img>
            <aside className={s.descripcion}>
                <h1>{producto.nombre}</h1>
                <p>{producto.descripcion}</p>
                <p>${producto.precio} </p>
                <p>Disponible: {producto.stock}</p>
                {agregado ?
                    <div>
                        <p>Agregaste {producto.nombre} al carrito.</p>
                        <Button variant='success'><Link to={'/cart'}>Ir al Carrito</Link></Button>
                        <Button variant='secondary'><Link to={'/'}>Seguir Comprando</Link></Button>
                    </div> :
                    <ItemCount producto={producto} initial={1} carrito={false} />
                }
                
            </aside>
        </div>
        }
        </>
    );
};

export default ItemDetail;