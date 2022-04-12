import * as React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function MyNavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/"><Navbar.Brand>Khipuy</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="#link">Sobre Mi</Nav.Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    {/* <ul>
                        {categories.map((cat) => (
                            <li>{cat}</li>
                        ))}
                        </ul> */}
                </Nav>
                <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}