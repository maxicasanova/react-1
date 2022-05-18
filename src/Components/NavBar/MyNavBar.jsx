import * as React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { collection, getFirestore, getDocs } from 'firebase/firestore';
import './MyNavBar.css';

export default function MyNavBar() {

    const [categorias, setCategorias] = React.useState([]);
    const db = getFirestore();
    const refCategorias = collection(db, 'Categorias');

    React.useEffect (() => {
        getDocs(refCategorias)
        .then((res) =>{
            if (res.size === 0) {
                console.log('No Results')
            } else {
                setCategorias(res.docs.map(doc => (doc.data().nombre)));
            }
    })},[]);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/" id='home'><Navbar.Brand>Khipuy</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/">Inicio</Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <ul>
                        {categorias.map((cat, index) =>(
                            <Link to={'/category/'+cat} key={index}>{cat}</Link>
                        ))}
                        </ul>
                    </NavDropdown>
                    <Link to="/highlights">Destacados</Link>
                    <Link to="/sales">Ofertas</Link>
                </Nav>
                <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
