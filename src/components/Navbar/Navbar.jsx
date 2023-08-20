import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'

import './Navbar.css';

import CartWidget from '../CartWidget/CartWidget';

function systecNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/' id= "titulo" >SyStec</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
            <NavDropdown title="Productos">
              <NavDropdown.Item as={NavLink} to='/category/notebooks'>Notebooks</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/placasgpu'>Placas de Video</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/perifericos'>Periféricos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/monitores'>Monitores</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/impresoras'>Impresoras e Insumos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/'>Todos los Productos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default systecNavBar;