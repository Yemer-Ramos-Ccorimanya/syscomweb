import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import logo from "../../assets/logo.png"
import { Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { faCircleUser } from "@fortawesome/free-regular-svg-icons"
import { UserContext } from "../../context/UserProvider"
import { useContext } from "react"

export const HeaderHTML = () => {
  const navigate = useNavigate()
  const { userData } = useContext(UserContext)

  const handleLogout = () => {
    if (localStorage.getItem("AuthToken"))
      localStorage.removeItem("AuthToken")
    if (localStorage.getItem("RefreshToken"))
      localStorage.removeItem("RefreshToken")
    navigate("/login")
  }

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
            <Nav.Link to={"/inventarios/productos"} className="text-uppercase">Productos</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">Clientes</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">Reservas</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">Alquilers</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">Punto de Venta</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">Reportes</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">Configuración</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">Listar Sku</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <div className="d-flex flex-column align-items-end">
                <span>{userData.user?.first_name} {userData.user?.last_name}</span>
                <span className="text-primary text-uppercase">{userData.empresa?.rzn_social}</span>
              </div>
            </Nav.Link>
            <Nav.Link className="d-none d-lg-block">
              <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "2.8rem" }} />
            </Nav.Link>
            <div className="d-flex align-items-center justify-content-end">
              <Button variant="danger" onClick={handleLogout} className="px-3">
                <FontAwesomeIcon icon={faRightFromBracket} className="me-1" />
                <span className="text-uppercase">Cerrar Sessión</span>
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
