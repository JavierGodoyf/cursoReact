import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import logo from "../../assets/img/logo.png";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom"
function NavbarComp() {
    return (
        <>
            <Navbar bg="success" data-bs-theme="dark" className='rounded-5 rounded-top-0' >
                <Container>
                    <Nav className=" bg-black bg-opacity-25 rounded-5">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/category/café">Cafeteria</Nav.Link>
                        <Nav.Link href="/category/pastelería">Pasteleria</Nav.Link>
                    </Nav>
                    <Navbar.Brand href="/" className=''>
                        <img src={logo} alt="logo" className='logo' />Cafeteria MiauCafe</Navbar.Brand>
                </Container>
                <CartWidget />
            </Navbar>
        </>
    );
}

export default NavbarComp;