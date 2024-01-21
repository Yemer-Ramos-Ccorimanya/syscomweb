import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.png"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const HeaderHTML = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid={true}>
        <Link to={"/"} className="navbar-brand">
          <img src={logo} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <div className="d-flex flex-column align-items-end">
                <span>Karina Cardenas Casas</span>
                <span className="text-primary text-uppercase">Empresa de la tienda de ropa KYLOS'S</span>
              </div>
            </Nav.Link>
            <Button variant="danger">
              <span className="text-uppercase">Cerrar Sessión</span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
