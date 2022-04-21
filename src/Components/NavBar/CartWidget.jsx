import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContextProvider';

export default function CartWidget() {

    const {cart} = useContext(CartContext);

    useEffect(()=> {
        // como renderizo el numerito?
    },[cart])

    return (
        <>
            <Link to='/cart'>
                <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-shopping-cart-miscellaneous-kiranshastry-lineal-kiranshastry.png" alt="carrito" width="30px"/>
            </Link>
            <span>({cart.length})</span>
        </>
    )
}
