import "./navbar.css"
import logo from "../../multimedia/logo2png.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carrito from '../carrito/Carrito'
import { NavLink } from "react-router-dom";

function Navbar1() {
  return (  
    <Navbar expand="lg" className="fondoNav">
      <Container>
        <Navbar.Brand as={NavLink} to='/' ><img src={logo} alt='logo' style={{width:'7rem'}}/></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navv">
            <Nav.Link as={NavLink} to='/' style={{ color: 'white' }} >Inicio</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/categories/Nuevos'>Nuevos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categories/Mas vendidos'>
                Mas vendidos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categories/Ofertas'>Ofertas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavLink className="texto" to='/cart'>
            <Carrito/>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1; 