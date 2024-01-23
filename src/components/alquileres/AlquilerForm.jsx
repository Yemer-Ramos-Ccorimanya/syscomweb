import { Button, Card, Form, InputGroup } from "react-bootstrap"
import { MainContainer } from "../common/MainContainer"
import { SidebarAlquiler } from "./SidebarAlquiler"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faUserAlt } from "@fortawesome/free-solid-svg-icons"

export const AlquilerForm = () => {
  return (
    <MainContainer bsPadding="p-0">
      <div className="d-flex justify-content-between">
        <div className="w-100 p-3">
          <div className="row mb-3">
            <div className="col-5 offset-1">
              <Card>
                <Card.Body>
                <Form.Group>
                    <div className="d-flex justify-content-center">
                      <Form.Check
                        type="radio"
                        label="Alquiler"
                        id="alquiler" name="tipo_documento"
                        className="me-3" defaultChecked />
                      <Form.Check
                        type="radio"
                        label="Reserva"
                        id="reserva" name="tipo_documento" />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Seleccione un cliente</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUserAlt} className="mx-2" />
                      </InputGroup.Text>
                      <Form.Select />
                    </InputGroup>
                  </Form.Group>
                </Card.Body>
              </Card>
            </div>
            <div className="col-5">
              <Card>
                <Card.Body>                  
                  <div className="row text-uppercase">
                    <Form.Label className="col-form-label col-3 text-end">Desde</Form.Label>
                    <div className="col-8 mb-3">
                      <Form.Control type="date" />
                    </div>
                    <Form.Label className="col-form-label col-3 text-end">Hasta</Form.Label>
                    <div className="col-8">
                      <Form.Control type="date" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-10 offset-1">
              <Card>
                <Card.Body>
                  <Form className="row row-cols-auto g-2">
                    <div className="col-5">
                      <Form.Control style={{ minWidth: "300px" }} />
                    </div>
                    <div className="col-auto">
                      <Button variant="secondary">BUSCAR</Button>
                    </div>
                  </Form>
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead>
                        <tr className="text-uppercase">
                          <th className="fw-semibold">Producto</th>
                          <th className="fw-semibold">Cantidad</th>
                          <th className="fw-semibold">Dias Alquiler</th>
                          <th className="fw-semibold">Monto total</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Zapatillas</td>
                          <td><input type="number" /></td>
                          <td><input type="number" /></td>
                          <td>20</td>
                          <td>
                            <a href="#">
                              <FontAwesomeIcon icon={faTrashAlt} className="fs-4 text-danger" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colSpan={3} className="text-end">TOTAL</th>
                          <th colSpan={2}>20.00</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <SidebarAlquiler />
      </div>
    </MainContainer>
  )
}