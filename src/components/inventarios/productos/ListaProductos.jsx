import { Card, Form, InputGroup, Button, Modal, Dropdown } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLayerGroup, faList, faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export const ListaProductos = () => {
  return (
    <MainContainer>
      <h5>Productos</h5>
      <Card >
        <Card.Body>
          <Form className="row row-cols-auto g-2">
            <div className="col-auto">
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Nombre"
                />
              </InputGroup>
            </div>
            <div className="col-auto">
              <Link to="/inventarios/productos/agregar" className="btn btn-success" variant="success">
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                <span className="text-uppercase">Nuevo Producto</span>
              </Link>
            </div>
            <div className="col-auto">
              <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                <FontAwesomeIcon icon={faLayerGroup} className="me-1" />
                  <span className="text-uppercase">Opciones</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="text-uppercase">
                  <Dropdown.Item as={Link} to="/inventarios/productos/categorias">
                    Categorías
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/inventarios/productos/subcategorias">
                    Subcategorías
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-uppercase">
                  <th>Nombre</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </MainContainer>
  )
}