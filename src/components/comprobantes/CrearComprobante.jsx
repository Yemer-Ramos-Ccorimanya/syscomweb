import { Badge, Button, Card, Dropdown, Form, InputGroup, Modal } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt, faChevronLeft, faCircleXmark, faDollar, faEnvelope, faEye, faFloppyDisk, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons"
import { MainContainer } from "../common/MainContainer"
import { Link } from "react-router-dom";
import { useState } from "react";

export const CrearComprobante = () => {
  
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <MainContainer>
      <Link to="/comprobantes" style={{ color: 'black', textDecoration: 'none' }}>
        <FontAwesomeIcon icon={faChevronLeft} className="mx-2" />
        <span>Regresar</span>
      </Link>
      <div className="row m-2">
        <div className="col-2 d-flex justify-content-end g-2">
          <h5>Datos del cliente</h5>
        </div>
        <div className="col-10 p-2">

          <Card>
            <Card.Body>
              <Form className="row row-cols-auto g-2">
                <div className="col-8">
                  <InputGroup className="mb-2">
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Buscar por nombre o código SKU"
                    />
                  </InputGroup>
                </div>
                <div className="col-auto">
                  <InputGroup className="mb-2">
                    <Button variant="outline-dark" className="me-2">Nuevo Cliente</Button>
                  </InputGroup>
                </div>
                {/* dropdown Nota de venta */}
                <div className="col-auto">
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                      Nota de venta
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Recibo</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Comprobante</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-2 d-flex justify-content-end g-2">
          <h5>Detalles</h5>
        </div>
        <div className="col-10 p-2">
          <Card>
            <Card.Body>
              <Form className="row g-2">
                <div className="row">
                  <div className="col-4">
                    <span>Fecha de emision</span>
                    <InputGroup className="mb-2">
                      <Form.Control
                        placeholder="26-01-2024"
                      />
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faCalendarAlt} className="mx-2" />
                      </InputGroup.Text>

                    </InputGroup>
                  </div>
                  <div className="col-4">
                    <span>Sucursales</span>
                    <InputGroup className="mb-2">
                      <Form.Control
                        type="text"
                        placeholder="Sucursales"
                      />
                    </InputGroup>
                  </div>
                  <div className="col-4">
                    <span>Serie Comprobante</span>
                    <InputGroup className="mb-2">
                      <Form.Control
                        type="text"
                        placeholder="Sucursales"
                      />
                    </InputGroup>
                  </div>
                </div>

              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-2 d-flex justify-content-end g-2">
          <h5>Productos</h5>
        </div>
        <div className="col-10 p-2">
          <Card>
            <Card.Body>
              <Form className="row row-cols-auto g-2">
                <div className="col-10">
                  <InputGroup className="mb-2">
                    <Dropdown>
                      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        Almacen
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Almacen 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Almacen 2</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                      placeholder="Buscar por almacen"
                    />
                  </InputGroup>
                </div>
                <div className="col-auto">
                  <InputGroup className="mb-2">
                    <Button variant="outline-dark" className="me-2" onClick={handleOpenModal}>
                      Producto Libre
                    </Button>
                  </InputGroup>

                  <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title style={{ fontSize: 'smaller' }}>Agregar Producto o Servicio libre</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        {/* Agrega aquí los campos del formulario para el producto libre */}
                        <Form.Group className="mb-3" controlId="nombreProducto">
                          <Form.Label>Nombre del Producto</Form.Label>
                          <Form.Control type="text" placeholder="Ingrese el nombre del producto" />
                          {/* tipo de moneda y precio */}
                          <div className="row m-2">
                            <div className="col-6">
                              <Form.Label>Tipo de Moneda</Form.Label>
                              {/* icono de dolar */}
                              
                              <Dropdown>
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                  Tipo de moneda
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">Dolares</Dropdown.Item>
                                  <Dropdown.Item href="#/action-1">Soles</Dropdown.Item>
                                  <Dropdown.Item href="#/action-1">Pesos</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="col-6">
                              <Form.Label>Precio</Form.Label>
                              <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control type="number" placeholder="Ingrese el precio del producto" />
                              </InputGroup>
                            </div>
                          </div>
                          <div className="row m-2">
                            <div className="col-6">
                              <Form.Label>Unidad de Medida</Form.Label>
                              <Dropdown>
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                 Unidad de medida
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">...</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="col-6">
                              <Form.Label>impuestos</Form.Label>
                              <Dropdown>
                                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                  Gravado del 18% del IGV
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">...</Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>

                        </Form.Group>
                        {/* ... (otros campos del formulario) */}
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                      </Button>
                      <Button variant="primary" onClick={handleCloseModal}>
                        Aceptar
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>

              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-2 d-flex justify-content-end g-2">
          <h5>Resumen</h5>
        </div>
        <div className="col-10 p-2">
          <card>
            <Card.Body>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr className="">
                      <th className="text-secondary">Items</th>
                      <th className="text-secondary">Nombres</th>
                      <th className="text-secondary">Cantidad</th>
                      <th className="text-secondary">precio</th>
                      <th className="text-secondary">Valor unitario</th>
                      <th className="text-secondary">Descuento</th>
                      <th className="text-secondary">Total</th>
                      <th className="text-secondary">Borrar</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Zapatillas Adidad</td>
                      <td>
                        <input type="number" value={1} min={0} max={100} onChange={(e) => console.log(e.target.value)} />
                      </td>
                      <td>
                        {/* icono de dolar */}
                        <FontAwesomeIcon icon={faDollar} className="mx-2 text-dark" />
                        <input type="number" value={100} min={0} max={1000} onChange={(e) => console.log(e.target.value)} />
                      </td>
                      <td>100</td>
                      <td>
                        <input type="number" value={0} min={0} max={1000} onChange={(e) => console.log(e.target.value)} />
                      </td>
                      <td>S/.100</td>
                      <td> <FontAwesomeIcon icon={faTrash} className="mx-2 text-dark" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </card>
        </div>

      </div>
      <div className="row">

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">
            <span className="text-uppercase">Borrador</span>
          </Button>
          <Button type="submit" variant="primary" className="ms-2">
            <span className="text-uppercase">Emitir Comprobante</span>
          </Button>
        </div>

      </div>
    </MainContainer>
  );
};
