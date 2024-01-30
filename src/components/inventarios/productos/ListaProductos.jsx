import { Card, Form, InputGroup, Dropdown, Button } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup, faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"
import Modal from 'react-bootstrap/Modal';

export const ListaProductos = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <div className="col-auto">
              <>
                <Button variant="primary" onClick={handleShow}>
                  Seleccionar Producto
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Seleccionar Productos</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="d-flex" >
                      <div className="col-auto m-1">
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                          </InputGroup.Text>
                          <Form.Control
                            placeholder="Nombre"
                          />
                        </InputGroup>
                      </div>
                      <div className="m-1">
                        <Dropdown>
                          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                            Categoría
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="m-1">
                        <Dropdown>
                          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                            Unidad
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr className="text-uppercase">
                            <th>Nombre</th>
                            <th>Tipo de unidad</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                          </tr>
                          <tr className="text-uppercase">
                            <th>Casaca</th>
                            <th>UNIDAD</th>
                            <th>S/35.00</th>
                            <th>
                              <Button variant="success">AGREGAR</Button>{' '}
                            </th>
                          </tr>
                          <tr className="text-uppercase">
                            <th>Pantalón</th>
                            <th>UNIDAD</th>
                            <th>S/100.00</th>
                            <th>
                              <Button variant="success">AGREGAR</Button>{' '}
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </Modal.Body>
                </Modal>
              </>
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