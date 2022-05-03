import React, {useContext} from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from '../Items/ItemCount';
import { CartContext } from '../Context/CartContextProvider';
import s from './CardItem.module.css'


function CartItem({producto}) {

    const { removeFromCart } = useContext(CartContext);

    return (
        <Card className={s.tarjetaCarrito}>
            <Link to ={`/item/${producto.id}`}>
                <Card.Img src={producto.imagenes[0]} />
            </Link>
            <Card.Body className={s.bodyTarjeta}>
            <Card.Title>{producto.nombre}</Card.Title>
            <ItemCount producto={producto} initial={producto.count} carrito={true} className={s.botoneraCarrito} />
            <span onClick={() => {removeFromCart(producto)}} className={s.redCross}>&#x2717;</span>
            </Card.Body>
        </Card>
    )
}

export default CartItem