import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faFloppyDisk, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { MainContainer } from "../common/MainContainer";
import { useNavigate } from "react-router-dom";

export const ClienteForm = () => {
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate("/clientes")
  }

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
                  <Form.Group controlId="dni">
                    <Form.Label>Tipo documento</Form.Label>
                    <Form.Select >
                      <option value="0:SIN DEFINIR">0 - SIN DEFINIR</option>
                      <option value="1:D.N.I">1 - D.N.I</option>
                      <option value="6:R.U.C">6 - R.U.C</option>
                      <option value="7:PASAPORTE">7 - PASAPORTE</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Label>D.N.I/R.U.C</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Documento de Identidad"
                    />
                    <Button variant="success">
                      <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                    </Button>
                  </InputGroup>
                </div>
              </div>
              <Form.Group controlId="nombres" className="mb-3">
                <Form.Label>Nombres Completo / Razón Social</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="direccion" className="mb-3">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <div className="row mb-3">
                <div className="col-6">
                  <Form.Group controlId="celular">
                    <Form.Label>Código Ubigeo</Form.Label>
                    <Form.Control type="tel" />
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group controlId="dni">
                    <Form.Label>Número de Celular</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-11">
          <div className="d-flex justify-content-end">
            <Button size="lg" onClick={handleCancel} variant="secondary" className="me-2">
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
