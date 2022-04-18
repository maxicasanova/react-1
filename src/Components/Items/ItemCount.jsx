import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import s from './ItemCount.module.css'

function ItemCount({stock,initial,addToCart}) {
  const [count, setCount] = useState(initial);

  const handleClick = () =>{
    addToCart(count)
  }

  function sumar(){
    if(count < stock){
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
          <Button variant="secondary" disabled={count === stock} onClick={sumar}>+</Button>
        </div>
        <Button variant="success" onClick={handleClick} className={s.btnCarrito}>Agregar al Carrito</Button>
      </div>
    </>
  );
};

export default ItemCount;
