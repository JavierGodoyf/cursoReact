import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingBasket } from "react-icons/fa";
function NavbarComp() {
    return (
        <>
            <Navbar bg="success" data-bs-theme="dark" className='rounded-5 rounded-top-0' >
                <Container>
                    <Navbar.Brand href="#home">Cafeteria MiauCafe</Navbar.Brand>
                    <Nav className="mx-auto ">
                        <Nav.Link href="#Inicio">Inicio</Nav.Link>
                        <Nav.Link href="#Bebidas">Bebidas</Nav.Link>
                        <Nav.Link href="#Dulce">Dulce</Nav.Link>
                        <Nav.Link href="#S">Salado</Nav.Link>
                    </Nav>
                </Container>
                <div className='px-5'>
                    <FaShoppingBasket size="2rem" />
                </div>
            </Navbar>
        </>
    );
}

export default NavbarComp;