import { Card, Form } from "react-bootstrap"
import { MainContainer } from "../common/MainContainer"
import { SidebarAlquiler } from "./SidebarAlquiler"

export const AlquilerForm = () => {
  return (
    <MainContainer bsPadding="p-0">
      <div className="d-flex justify-content-between">
        <div className="w-100 p-3">
          <div className="row">
            <div className="col-5 offset-1">
              <Card>
                <Card.Body>
                  <Form.Group>
                    <Form.Label>Cliente</Form.Label>
                    <Form.Select />
                  </Form.Group>
                </Card.Body>
              </Card>
            </div>
            <div className="col-5">
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