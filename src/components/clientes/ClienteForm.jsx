import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { MainContainer } from "../common/MainContainer";

export const ClienteForm = () => {
  return (
    <MainContainer>
      <div className="row">
        <div className="col-11 offset-1">
          <h5>Añadir nuevo cliente</h5>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-2 offset-1">
          <h6>Información Cliente</h6>
          <p>Por favor, ingrese todos los datos de sus clientes.</p>
        </div>
        <div className="col-8">
          <Card>
            <Card.Body>
              <div className="row mb-3">
                {/* Otros elementos que puedas agregar aquí */}
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <Form.Group controlId="nombres">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group controlId="apellidos">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <Form.Group controlId="dni">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group controlId="direccion">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <Form.Group controlId="celular">
                    <Form.Label>Número de Celular</Form.Label>
                    <Form.Control type="tel" />
                  </Form.Group>
                </div>
                {/* Otros elementos que puedas agregar aquí */}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-11">
          <div className="d-flex justify-content-end">
            <Button size="lg" variant="secondary" className="me-2">
              <FontAwesomeIcon icon={faCircleXmark} className="me-1" />
              <span className="text-uppercase">Cancelar</span>
            </Button>
            <Button size="lg" variant="primary">
              <FontAwesomeIcon icon={faFloppyDisk} className="me-1" />
              <span className="text-uppercase">Guardar</span>
            </Button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
