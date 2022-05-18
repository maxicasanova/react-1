import React from 'react';
import ThreeDots from '../Loading/ThreeDots';
import Item from './Item';

function ItemList({productos, spinner}) {
    return (
        <>
        {spinner && (<ThreeDots />)}
        {!spinner && (
            productos.filter(p => p.stock>0).map(e => (
            <Item key={e.id} producto = {e} />
            )))}
        </>
    )
}

export default ItemList