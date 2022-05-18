import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import s from './Item.module.css';

function Item({producto}) {
    return (
        <>
        <Link to={`/item/${producto.id}`}>
        <Card className={s.tarjeta}>
            {producto.destacado && <span className={s.destacado}>&#11088; Nuevo</span>}
            <Card.Img variant="top" src={producto.imagenes[0]} />
            <Card.Body className={s.cuerpoTarjeta}>
            <Card.Title>{producto.nombre}</Card.Title>
            <div className={s.categories}>
                {producto.categorias.map((c,index) => (
                    <Card.Subtitle key={index}>#{c}</Card.Subtitle>
                ))}
            </div>
            <div>
            <Card.Text className={producto.oferta && s.precioTachado}>${producto.precio}</Card.Text> 
            {producto.oferta &&<span className={s.precioOferta}> ${producto.precioOFerta}</span>}
            </div>
            <Card.Text> Disponibles: {producto.stock} </Card.Text>
            </Card.Body>
            </Card>
        </Link>
        </>
    )
}

export default Item