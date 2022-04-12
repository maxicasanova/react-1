import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import s from './Item.module.css';

function Item({stock,initial,id, imagen}) {
    return (
        <>
            {/* le pongo el estilo aca provisoriamente style={{ width: '12rem', display: 'flex', flexDirection: 'column', gap: '10px'}} */ }
            <Card className={s.tarjeta}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                <Card.Title>Item {id}</Card.Title>
                <Card.Text> Alguna descripcion del item{id} </Card.Text>
                <ItemCount stock={stock} initial={initial}/>
                <Card.Text> Disponibles: {stock} </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item