import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContextProvider';
import './MyNavBar.css'

export default function CartWidget() {

    const {cart} = useContext(CartContext);

    const {carritoCambiado} = useContext (CartContext);

    const suma = (array) =>{
        let temp = 0;
        for (const i of array) {
            temp+= i.count;
        }
        return temp;
    }

    useEffect(()=> {
        // como renderizo el numerito?
    },[carritoCambiado])

    return (
        <>
            <Link to='/cart'>
                <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-shopping-cart-miscellaneous-kiranshastry-lineal-kiranshastry.png" alt="carrito" width="30px"/>
            </Link>
            { suma(cart)> 0 && <span id='widget'>{suma(cart)}</span>}
        </>
    )
}
