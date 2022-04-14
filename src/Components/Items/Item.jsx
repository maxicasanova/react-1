// En este caso al Item le saque el ItemCount para que quede mas agradable a la vista, el mismo esta colocado en el ItemDetail.

import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import ItemCount from './ItemCount';
import s from './Item.module.css';

function Item({producto}) {
    const objetivo = `/item/${producto.id}`
    return (
        <>
        <Link to={objetivo}>
        <Card className={s.tarjeta}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <div className={s.categories}>
                {producto.categorias.map((c,index) => (
                    <Card.Subtitle key={index}>#{c}</Card.Subtitle>
                ))}
            </div>
            <Card.Text> Alguna descripcion del item{producto.id} </Card.Text>
            {/* <ItemCount stock={producto.stock} initial={producto.initial}/> */}
            <Card.Text> Disponibles: {producto.stock} </Card.Text>
            </Card.Body>
            </Card>
        </Link>
        </>
    )
}

export default Item