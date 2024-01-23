import { Badge, Button, Card, Form, InputGroup, Table } from "react-bootstrap"
import { MainContainer } from "../common/MainContainer"
import { SidebarTerminal } from "./SidebarTerminal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBox, faCirclePlus, faCircleXmark, faCoins, faMagnifyingGlass, faTrashAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons"

export const TerminalVenta = () => {
  return (
    <MainContainer bsPadding="p-0">
      <div className="d-flex justify-content-between">
        <div className="w-100 p-3">
          <div className="row">
            <div className="col-7">
              <h5>Terminal Punto de Venta</h5>
              <Card>
                <Card.Body>
                  <Form className="row">
                    <div className="col-7">
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                        </InputGroup.Text>
                        <Form.Control
                          placeholder="Buscar productos"
                        />
                      </InputGroup>
                    </div>
                    <div className="col-5">
                      <Button variant="outline-secondary">
                        <FontAwesomeIcon icon={faCirclePlus} className="me-1" />
                        <span>Agregar Item Libre</span>
                      </Button>
                    </div>
                  </Form>
                  <div className="table-responsive">
                    <Table hover className="fs-5 mb-0">
                      <thead>
                        <tr className="text-uppercase">
                          <th className="fw-semibold">Seleccionar Item Producto</th>
                          <th className="fw-semibold">Precio</th>
                        </tr>
                      </thead>
                      <tbody className="text-uppercase">
                        <tr style={{ cursor: "pointer" }}>
                          <td>Cable de red Cat5e - Satra</td>
                          <td>1.80</td>
                        </tr>
                        <tr style={{ cursor: "pointer" }}>
                          <td>Cable de red Cat5e - Satra</td>
                          <td>1.80</td>
                        </tr>
                        <tr style={{ cursor: "pointer" }}>
                          <td>Cable de red Cat5e - Satra</td>
                          <td>1.80</td>
                        </tr>
                        <tr style={{ cursor: "pointer" }}>
                          <td>Cable de red Cat5e - Satra</td>
                          <td>1.80</td>
                        </tr>
                        <tr style={{ cursor: "pointer" }}>
                          <td>Cable de red Cat5e - Satra</td>
                          <td>1.80</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-5">
              <Card className="mb-3">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center fs-6">
                    <div className="fs-5">
                      <FontAwesomeIcon icon={faUserCircle} className="me-2" />
                      <span>Cliente Varios</span>
                    </div>
                    <Button variant="outline-secondary">Nuevo Cliente</Button>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <section className="d-flex justify-content-between">
                    <div className="text-uppercase" style={{ cursor: "pointer" }}>
                      <h6 className="text-secondary">Camisa de manga Larga talla S</h6>
                      <div className="fw-semibold text-secondary">
                        <FontAwesomeIcon icon={faBox} className="me-1" />
                        <span>1</span>
                        <span className="mx-1">|</span>
                        <span>14.00</span>
                        <Badge bg="success" className="mx-1">18.00 %</Badge>
                        <span>Total: 28.00</span>
                      </div>
                    </div>
                    <a href="#">
                      <FontAwesomeIcon icon={faTrashAlt} className="text-danger fs-4" />
                    </a>
                  </section>
                  <hr />
                  <section className="d-flex justify-content-between">
                    <div className="text-uppercase" style={{ cursor: "pointer" }}>
                      <h6 className="text-secondary">Camisa de manga Larga talla S</h6>
                      <div className="fw-semibold text-secondary">
                        <FontAwesomeIcon icon={faBox} className="me-1" />
                        <span>1</span>
                        <span className="mx-1">|</span>
                        <span>14.00</span>
                        <Badge bg="success" className="mx-1">18.00 %</Badge>
                        <span>Total: 28.00</span>
                      </div>
                    </div>
                    <a href="#">
                      <FontAwesomeIcon icon={faTrashAlt} className="text-danger fs-4" />
                    </a>
                  </section>
                  <form className="bg-secondary-subtle p-2 mt-1">
                    <div className="d-flex">
                      <div className="flex-fill">
                        <label>Cant.</label>
                        <input type="number" className="w-100" />
                      </div>
                      <div className="flex-fill mx-2">
                        <label>Precio</label>
                        <input type="number" step="0.1" className="w-100" />
                      </div>
                      <div className="flex-fill">
                        <label>Descuento</label>
                        <input type="number" step="0.1" className="w-100" />
                      </div>
                    </div>
                    <label>Agregar una nota</label>
                    <input type="text" className="w-100" />
                  </form>
                  <hr />
                  <div className="fw-semibold">
                    <div className="d-flex justify-content-between fs-5">
                      <span>SubTotal</span>
                      <span>24.00</span>
                    </div>
                    <div className="d-flex justify-content-between fs-5">
                      <span>IGV (18%)</span>
                      <span>24.00</span>
                    </div>
                    <div className="d-flex justify-content-between fs-5">
                      <span>Importe Total</span>
                      <span>24.00</span>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex py-2">
                    <Button size="lg" variant="danger" className="w-100">
                      <FontAwesomeIcon icon={faCircleXmark} className="me-1" />
                      <span className="text-uppercase">Cancelar</span>
                    </Button>
                    <span className="mx-1"></span>
                    <Button size="lg" variant="success" className="w-100">
                      <FontAwesomeIcon icon={faCoins} className="me-1" />
                      <span className="text-uppercase">Cobrar</span>
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </div>
        <SidebarTerminal />
      </div>
    </MainContainer>
  )
}