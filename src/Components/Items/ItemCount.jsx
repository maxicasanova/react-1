import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import s from './ItemCount.module.css';
import { CartContext } from '../Context/CartContextProvider';
import Swal from 'sweetalert2';

function ItemCount({producto,initial, setAgregado}) {
  const [count, setCount] = useState(initial);

  const { addToCart } = useContext(CartContext);

  const { isInCart } = useContext(CartContext);

  const {modifyCart} = useContext(CartContext);

  const handleClick = () =>{
    Swal.fire({
      text: `Desea agregar ${count} ${producto.nombre}`,
      showCloseButton:true,
      confirmButtonText: 'De acuerdo',
      showCancelButton:true
      })
    Swal.getConfirmButton().onclick = () => {
      isInCart(producto) ?
      alert('ya en carrito') :
      addToCart({...producto, count})
      setAgregado(true);
      Swal.close();
    }
  }

  function sumar(){
    if(count < producto.stock){
      setCount(count + 1);
    }
  }

  function restar(){
    if (count > 0 ){
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className={s.botonera}>
        <div>
          <Button variant="secondary" disabled={count === initial} onClick={restar}>-</Button>
          <h2>{count}</h2>
          <Button variant="secondary" disabled={count === producto.stock} onClick={sumar}>+</Button>
        </div>
        <Button variant="success" onClick={handleClick} className={s.btnCarrito}>Agregar al Carrito</Button>
      </div>
    </>
  );
};

export default ItemCount;
