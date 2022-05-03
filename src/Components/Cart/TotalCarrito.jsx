import React, { useEffect, useState, useContext } from 'react';
import './Cart.css';
import { CartContext } from '../Context/CartContextProvider';
// import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function TotalCarrito({cart}) {

    const {totalCarrito} = useContext (CartContext);

    const {setTotalCarrito} = useContext (CartContext);
    
    const {carritoCambiado} = useContext (CartContext);

    const {setCarritoCambiado} = useContext (CartContext);

    const { clearCart } = useContext (CartContext);

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

    // const handleClick = () =>{
    //     Swal.fire({
    //         text: `Desea comprar todos los productos del carrito`,
    //         icon: 'question',
    //         showCloseButton:true,
    //         confirmButtonText: 'Si, Adelante!',
    //         showCancelButton:true
    //         })
    //         Swal.getConfirmButton().onclick = () => {
    //             <Link to={}></Link>
    //             Swal.update({
    //                 text:'Felicidades termino su compra',
    //                 icon: 'success',
    //                 confirmButtonText: 'Hasta la vista'
    //             })
    //         Swal.getConfirmButton().onclick = () => {
    //             Swal.close();
    //             clearCart();
    //         }
    //     }
    // }

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
                    <p>{e.nombre}</p><p>{e.count}</p><p> ${e.oferta ? e.precioOFerta : e.precio}</p>
                </div>
            ))}
            <div>   
                <h3>Total:</h3><h3> ${totalCarrito}</h3>
            </div>
            <Button variant='secondary'><Link to='/checkout'>Finalizar Compra</Link></Button>
        </div> 
        )}
        </>
    )
}

export default TotalCarrito