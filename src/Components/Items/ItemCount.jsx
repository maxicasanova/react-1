import React, { useState, useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import s from './ItemCount.module.css';
import { CartContext } from '../Context/CartContextProvider';
import Swal from 'sweetalert2';

function ItemCount({producto, initial, carrito}) {
  const [count, setCount] = useState(initial);

  const { setAgregado } = useContext(CartContext);

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
      if(isInCart(producto)) {
        Swal.fire({
          text:`El producto ya esta en el carrito. Desea cambiar por ${count} ${producto.nombre}?`,
          showCloseButton:true,
          confirmButtonText: 'De acuerdo',
          showCancelButton:true
        });
        Swal.getConfirmButton().onclick = () => {
          modifyCart(producto, count);
          setAgregado(true);
          Swal.close();
        }
      } else {
        addToCart({...producto, count});
        setAgregado(true);
        Swal.close();
      }
    }
  }

  function sumar(){
    if(count < producto.stock){
      setCount(count + 1);
    }
    if (carrito) modifyCart(producto, count+1);
  }

  function restar(){
    if (count > 0 ){
      setCount(count - 1);
    }
    if (carrito) modifyCart(producto, count - 1);
  }

  return (
    <>
      <div className={s.botonera}>
        <div>
          <Button variant="secondary" disabled={count === 1} onClick={restar}>-</Button>
          <h2>{count}</h2>
          <Button variant="secondary" disabled={count === producto.stock} onClick={sumar}>+</Button>
        </div>
        {!carrito && <Button variant="success" onClick={handleClick} className={s.btnCarrito}>Agregar al Carrito</Button>}
      </div>
    </>
  );
};

export default ItemCount;
