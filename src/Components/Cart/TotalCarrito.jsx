import React, { useEffect, useContext } from 'react';
import './Cart.css';
import { CartContext } from '../Context/CartContextProvider';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function TotalCarrito({cart}) {

    const {totalCarrito} = useContext (CartContext);

    const {setTotalCarrito} = useContext (CartContext);
    
    const {carritoCambiado} = useContext (CartContext);

    const {setCarritoCambiado} = useContext (CartContext);

    const navigate = useNavigate();

    const suma = (array) =>{
        let temp = 0
        for (const i of array) {
            if(i.oferta) {
                temp+=i.precioOFerta * i.count;
            } else {
                temp+=i.precio * i.count;
            }
        }
        return temp;
    }

    useEffect(() => {
        setTotalCarrito(suma(cart));
        setCarritoCambiado(false);
    },[carritoCambiado])
    
    return (
        <>
        {cart.length>0 && (
        <div className='totalCarrito'>
            <h2>Total Carrito</h2>
            <div className='cadaUnoTitulosTotal'>
                <p>Nombre</p><p>Cantidad</p><p>Precio</p>
            </div>
            {cart.map((e) => (
                <div key={e.id} className='cadaUnoTotal'>
                    <p>{e.nombre}</p><p>{e.count}</p><p> ${e.oferta ? e.precioOFerta : e.precio}</p>
                </div>
            ))}
            <div className='textoTotalCarrito'>   
                <h3>Total:</h3><h3> ${totalCarrito}</h3>
            </div>
            <Button variant='secondary' onClick={()=> navigate('/checkout')}>Finalizar Pedido</Button>
        </div> 
        )}
        </>
    )
}

export default TotalCarrito