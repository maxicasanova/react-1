import React, {useContext} from 'react';
import {CartContext} from '../Context/CartContextProvider';

function Cart() {

    const { cart } = useContext(CartContext);

    return (
        cart.map(e => (
            <div>
                <h1>{e.nombre}</h1>
                <p>{`Hay ${e.count} agregados en el carrito`}</p>
            </div>
            ))
    )
}

export default Cart