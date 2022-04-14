import React from 'react'
import { Spinner } from 'react-bootstrap'
import Item from './Item'

function ItemList({productos, spinner}) {
    return (
        <>
        {spinner && (<div className='spinner'><Spinner animation='border' /><p>Cargando...</p></div>)}
        {!spinner && (
            productos.map(e => (
            <Item key={e.id} producto = {e} />
            )))}
        </>
    )
}

export default ItemList