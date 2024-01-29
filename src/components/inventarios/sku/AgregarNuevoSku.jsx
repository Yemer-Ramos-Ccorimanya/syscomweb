import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { MainContainer } from "../../common/MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faFloppyDisk, faMagnifyingGlass, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const AgregarNuevoSku = () => {
  return (
    <MainContainer>
      <div className="row">
        <div className="col-11 offset-1">
          <h1>Nuevo sku</h1>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-2 offset-1">
          <h6>Datos básicos</h6>
          <p>Asocia tu Sku con un almacén para poder realizar tu gestión de inventarios.</p>
        </div>
        <div className="col-8">
          <Card>
            <Card.Body>
              <div className="row mb-3">
                <div className="col-6">
                  <Form.Group controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre del sku" />
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group controlId="codigoSku">
                    <Form.Select>
                      <option>Automatico</option>
                      <option>Por defecto</option>
                    </Form.Select>
                    <Form.Label>Código de SKU</Form.Label>
                    <Form.Control type="text" placeholder="Código del sku" />
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <Form.Group controlId="moneda">
                    <Form.Label>Moneda</Form.Label>
                    <Form.Select>
                      <option>Soles</option>
                      <option>Dólares</option>
                      <option>Euros</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group controlId="tipoUnidad">
                    <Form.Label>Tipo de Unidad</Form.Label>
                    <Form.Select>
                      <option>Unidad</option>
                      <option>Docena</option>
                      <option>Caja</option>
                    </Form.Select>
                  </Form.Group>
                  <p className="text-danger">
                    *La unidad no se podrá editar posteriormente
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <Form.Group controlId="proveedor">
                    <Form.Label>Proveedor</Form.Label>
                    <Form.Control type="text" placeholder="Proveedor" />
                  </Form.Group>
                </div>
              </div>
              <div className="col-6">
                <Form.Group controlId="descripcion">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control as="textarea" rows="3" placeholder="Descripción" />
                </Form.Group>
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
