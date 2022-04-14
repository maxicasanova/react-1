import * as React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { categories } from '../../utils/listaProductos';
import './MyNavBar.css';

export default function MyNavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/" id='home'><Navbar.Brand>Khipuy</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/">Inicio</Link>
                    <Link to="/sobreMi">Sobre Mi</Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <ul>
                        {categories.map((cat, index) =>(
                            <Link to={'/category/'+cat} key={index}>{cat}</Link>
                        ))}
                        </ul>
                    </NavDropdown>
                </Nav>
                <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}