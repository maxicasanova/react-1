import React from 'react';
import ThreeDots from '../Loading/ThreeDots';
import Item from './Item';

function ItemList({productos, spinner}) {
    console.log(productos)
    return (
        <>
        {spinner && (<ThreeDots />)}
        {!spinner && (
            productos.map(e => (
            <Item key={e.id} producto = {e} />
            )))}
        </>
    )
}

export default ItemList