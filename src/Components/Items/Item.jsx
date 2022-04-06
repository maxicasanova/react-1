import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

function Item({stock,initial,id, imagen}) {
    return (
        <>
            {/* le pongo el estilo aca provisoriamente */}
            <Card key={id} style={{ width: '12rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                <Card.Title>Item {id}</Card.Title>
                <Card.Text> Alguna descripcion del item{id} </Card.Text>
                </Card.Body>
                <ItemCount stock={stock} initial={initial}/>
                <Card.Text> Disponibles: {stock} </Card.Text>
            </Card>
        </>
    )
}

export default Item