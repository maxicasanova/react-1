import React, { useEffect, useState, useContext } from 'react';
import './Cart.css';
import { CartContext } from '../Context/CartContextProvider';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

function TotalCarrito({cart}) {

    const [totalCarrito, setTotalCarrito] = useState(0);

    const {carritoCambiado} = useContext (CartContext);

    const {setCarritoCambiado} = useContext (CartContext);

    const { clearCart } = useContext (CartContext);

    const suma = (array) =>{
        let temp = 0
        for (const i of array) {
            temp+=i.precio * i.count;
        }
        return temp;
    }

    const handleClick = () =>{
        Swal.fire({
            text: `Desea comprar todos los productos del carrito`,
            icon: 'question',
            showCloseButton:true,
            confirmButtonText: 'Si, Adelante!',
            showCancelButton:true
            })
            Swal.getConfirmButton().onclick = () => {
                Swal.update({
                    text:'Felicidades termino su compra',
                    icon: 'success',
                    confirmButtonText: 'Hasta la vista'
                })
            Swal.getConfirmButton().onclick = () => {
                Swal.close();
                clearCart();
            }
        }
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
                <div className='cadaUnoTotal'>
                    <p>{e.nombre}</p><p>{e.count}</p><p> ${e.precio}</p>
                </div>
            ))}
            <div>   
                <h3>Total:</h3><h3> ${totalCarrito}</h3>
            </div>
            <Button variant='secondary' onClick={handleClick}>Finalizar Compra</Button>
        </div> 
        )}
        </>
    )
}

export default TotalCarrito