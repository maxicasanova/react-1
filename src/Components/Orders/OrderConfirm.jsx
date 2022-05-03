import React from 'react';

function OrderConfirm({orderId}) {
    return (
        orderId && <p> Orden numero {orderId} confirmada! Muchas Gracias por tu compra</p>
    )
}

export default OrderConfirm