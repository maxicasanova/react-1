import React from 'react'
import { Spinner } from 'react-bootstrap'
import ThreeDots from '../Loading/ThreeDots'
import Item from './Item'

function ItemList({productos, spinner}) {
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