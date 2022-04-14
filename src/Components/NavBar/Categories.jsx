// Componente en Proceso!

import React from 'react';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { categories } from '../../utils/listaProductos';


function Categories() {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <CustomToggle eventKey="0">Categorias</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ul>   
                            {categories.map((cat, index) =>(
                                <Link to={'/category/'+cat} key={index}>{cat}</Link>
                            ))}
                        </ul>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default Categories;

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <p onClick={decoratedOnClick}>
        {children}
        </p>
    );
}

