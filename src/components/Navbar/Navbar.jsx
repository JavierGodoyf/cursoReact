import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import logo from "../../assets/logo.png";
import CartWidget from '../CartWidget/CartWidget';
function NavbarComp() {
    return (
        <>
            <Navbar bg="success" data-bs-theme="dark" className='rounded-5 rounded-top-0' >
                <Container>
                    <Nav className=" bg-black bg-opacity-25 rounded-5">
                        <Nav.Link href="#Inicio">Inicio</Nav.Link>
                        <Nav.Link href="#Bebidas">Bebidas</Nav.Link>
                        <Nav.Link href="#Dulce">Dulce</Nav.Link>
                        <Nav.Link href="#Salado">Salado</Nav.Link>
                    </Nav>
                    <Navbar.Brand href="#home" className=''>
                        <img src={logo} alt="logo" className='logo' />Cafeteria MiauCafe</Navbar.Brand>
                </Container>
                <CartWidget />
            </Navbar>
        </>
    );
}

export default NavbarComp;