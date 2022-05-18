import React, {useContext} from 'react';
import {CartContext} from '../Context/CartContextProvider';
import CartItem from './CartItem';
import TotalCarrito from './TotalCarrito';
import './Cart.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart() {

    const { cart } = useContext(CartContext);

    const { clearCart } = useContext(CartContext);

    return (
        <div className='carrito'>
            {cart.length > 0 ?
                <div className='itemsCarrito'>
                {cart.map(e => (
                    <CartItem producto={e} key={e.id}/>
                ))}
                <Button onClick={() => {clearCart()}} variant='danger'>Vaciar Carrito</Button>
                </div> : 
            <p className='carritoVacio'> El carrito esta vacio. Puedes comprar los productos<Link to='/'> aqui.</Link></p>
            }
            <TotalCarrito cart={cart}/>
        </div>
        
    )
}

export default Cart