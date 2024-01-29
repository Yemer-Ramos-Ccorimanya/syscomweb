import { useState } from "react";
import { Card, Button, Pagination } from "react-bootstrap";
import { MainContainer } from "../common/MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useNavigate } from "react-router-dom";

export const ListadoVentas = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const navigate = useNavigate();

  const handleTerminal = () => {
    navigate("/terminales/1/caja");
  };

  const handleCardClick = (index) => {
    // Agrega la lógica de redirección o cualquier otra acción que desees
    navigate(`/terminales/${index}/detalles`);
  };

  return (
    <MainContainer>
      <div className="m-3">
        <h5>CANALES DE PUNTO DE VENTA ABIERTO</h5>
      </div>

      <div className="d-flex">
        <Card style={{ width: '18rem', cursor: 'pointer' }} onClick={handleTerminal} className="me-3">
          <Card.Body className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faCashRegister} className="me-3" style={{ fontSize: '5.5em' }} />
            <div>
              <Card.Title>CAJA - 1</Card.Title>
              <Card.Text>10/01/2024 11:00PM</Card.Text>
              <Card.Text>USER - CAJA</Card.Text>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', cursor: 'pointer' }} onClick={handleTerminal} className="me-3">
          <Card.Body className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faCashRegister} className="me-3" style={{ fontSize: '5.5em' }} />
            <div>
              <Card.Title>CAJA - 2</Card.Title>
              <Card.Text>10/01/2024 11:00PM</Card.Text>
              <Card.Text>USER - CAJA</Card.Text>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', cursor: 'pointer' }} onClick={handleTerminal}>
          <Card.Body className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faCashRegister} className="me-3" style={{ fontSize: '5.5em' }} />
            <div>
              <Card.Title>CAJA - 1</Card.Title>
              <Card.Text>10/01/2024 11:00PM</Card.Text>
              <Card.Text>USER - CAJA</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="m-3">
        <h5>OPERACIONES DE TERMINALES DE PUNTOS DE VENTA</h5>
      </div>

      <div className="col-auto d-flex gap-2">
        <Button variant="outline-success" className="me-2">
          Hoy
        </Button>
        <Button variant="outline-success" className="me-2">
          Ayer
        </Button>
        <Button variant="outline-success" className="me-2">
          Últimos 7 días
        </Button>
        <Button variant="outline-success" className="me-2">
          Últimos 30 días
        </Button>
        <DateRangePicker onChange={setDateRange} value={dateRange} className="me-2" />
        <button className="btn btn-success">Apertura de Caja</button>
      </div>

      <h1>   </h1>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between mb-3">
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-uppercase">
                  <th>Hora</th>
                  <th>Cajero apertura</th>
                  <th> Cajero cierre</th>
                  <th>Monto S/</th>
                  <th>Monto $</th>
                  <th>Imprimir</th>
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
    </MainContainer>
  );
};
