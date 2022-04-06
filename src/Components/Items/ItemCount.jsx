import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import s from './ItemCount.module.css'

function ItemCount({stock,initial}) {
  const [count, setCount] = useState(initial);

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

  function onAdd(){
    alert('Compraste ' + count + ' Item1')
  }

  return (
    <>
      <div className={s.botonera}>
        <Button variant="secondary" onClick={restar}>-</Button>
        <h2>{count}</h2>
        <Button variant="secondary" onClick={sumar}>+</Button>
      </div>
      <Button variant="success" onClick={onAdd} className={s.btnCarrito}>Agregar al Carrito</Button>
    </>
  );
};

export default ItemCount;
