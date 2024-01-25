import { Card, Button } from "react-bootstrap";
import { MainContainer } from "../common/MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


export const ListadoVentas = () => {
  const navigate = useNavigate()

  const handleTerminal = () => {
    navigate("/PuntodeVenta/1/terminal")
  }

  return (
    <MainContainer>
      <h5>CANALES DE PUNTO DE VENTA ABIERTO</h5>
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
      <h5>OPERACIONES DE TERMINALES DE PUNTOS DE VENTA</h5>
      <div className="col-auto d-flex gap-2">
        <Button variant="outline-success" className="me-2">Hoy</Button>
        <Button variant="outline-success" className="me-2">Ayer</Button>
        <Button variant="outline-success" className="me-2">Últimos 7 días</Button>
        <Button variant="outline-success" className="me-2">Últimos 30 días</Button>

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
      </Card>
    </MainContainer>
  );
};
