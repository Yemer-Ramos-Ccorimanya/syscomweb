import { Button, Card, Form,Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { MainContainer } from "../common/MainContainer";

export const TerminalVentaForm = () => {
  return (
    <MainContainer>
      <div className="row">
        <div className=" mb-4 col-11 offset-1">
          <h5>Terminal</h5>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-2 offset-1">
          <h6>Datos empresa</h6>
          <p>Completa la información de tu empresa</p>
        </div>
        <div className="col-7">
          <Card>
            <Card.Body>
              <div className="row mb-3">
              </div>
              <div className="row mb-3">
                <div className="col-9">
                  <Form.Group controlId="nombres">
                    <Form.Label>Nombre de la empresa</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
                <div className="col-9">
                  <Form.Group controlId="apellidos">
                    <Form.Label>Sucursal</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Card className="m-3">
        <Card.Body>
          <div className="d-flex justify-content-between mb-3">
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-uppercase">
                  <th>Serie</th>
                  <th>Tipo de Comprobante</th>
                  <th> Correlativo</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-end">
            <div className="m-2">
              <span>Filas por página: </span>
              <select className="rounded">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
            <div className="m-2">
              <span>1-10 de 1</span>
            </div>
            <nav aria-label="...">
              <Pagination>
                <Pagination.Prev disabled>
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <span className="visually-hidden">Anterior</span>
                </Pagination.Prev>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Next>
                  <FontAwesomeIcon icon={faChevronRight} />
                  <span className="visually-hidden">Siguiente</span>
                </Pagination.Next>
              </Pagination>
            </nav>
          </div>
        </Card.Footer>
      </Card>

      <div className="row">
        <div className="col-11">
          <div className="d-flex justify-content-end">
            <Button size="lg" variant="secondary" className="me-2">
              <span className="text-uppercase">Añadir serie</span>
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