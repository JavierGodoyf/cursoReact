import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import logo from "../../assets/img/logo.png";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom"
import { Row, Col } from 'react-bootstrap';
function NavbarComp() {
    return (
        <>
            <Navbar bg="success" data-bs-theme="dark">
                <Container>
                    <Nav className=" bg-black bg-opacity-25 rounded-5">
                    <Link to={`/`}>
                        <p className='navitem'>Inicio</p>
                    </Link>
                    <Link to={'/category/café'}>
                        <p className='navitem'>Cafeteria</p>
                    </Link>
                    <Link to={`/category/pastelería`}>
                        <p className='navitem'>Pasteleria</p>
                        </Link>
                    </Nav>
                    <Link to={'/'}>
    <Row className='align-items-center ms-3'>
    <Col><h3 className='logoitem text-nowrap '>Cafeteria MiauCafe</h3></Col>
        <Col><img src={logo} alt="logo" className='logo'/></Col>
        
    </Row>
</Link>
                </Container>
                <CartWidget />
            </Navbar>
        </>
    );
}

export default NavbarComp;