import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.png"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

export const HeaderHTML = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
      <Container fluid={true}>
        <Link to={"/"} className="navbar-brand">
          <img src={logo} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-lg-none me-auto">
            <Nav.Link href="#home" className="text-uppercase">Inicio</Nav.Link>
            <Nav.Link to={"/inventarios/productos"} className="text-uppercase">Catálogo</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">Clientes</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">Reservas</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">Alquilers</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">Punto de Venta</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">Reportes</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">Configuración</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <div className="d-flex flex-column align-items-end">
                <span>Karina Cardenas Casas</span>
                <span className="text-primary text-uppercase">Empresa de la tienda de ropa KYLOS'S</span>
              </div>
            </Nav.Link>
            <Nav.Link className="d-none d-lg-block">
              <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "3rem" }} />
            </Nav.Link>
            <div className="d-flex align-items-center justify-content-end">
              <Button variant="danger" className="px-3">
                <FontAwesomeIcon icon={faRightFromBracket} className="me-1" />
                <span className="text-uppercase">Cerrar Sessión</span>
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
