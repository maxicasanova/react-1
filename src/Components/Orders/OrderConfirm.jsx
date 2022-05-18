import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Orders.css'

function OrderConfirm() {
    const {orderId} = useParams();
    return (
        <div className='orderConfirmation'>
            <p className='orderNumber'> Orden numero <span>{orderId}</span> confirmada!</p>
            <p>Muchas Gracias por tu compra.</p>
            <p>Nos pondremos en contacto para los proximos pasos.</p>
            <Link to ='/'>Volver al Inicio</Link>
        </div>
        
    )
}

export default OrderConfirm