import * as React from 'react';
import { Badge } from 'react-bootstrap';
import ItemCount from './ItemCount';

export default function ItemListContainer(greeting) {
    return (
        <>
            <h2> Hello, {greeting.name} <Badge bg="secondary">New</Badge></h2>;
            <ItemCount stock = {5} initial = {2} />
        </>
    )
}