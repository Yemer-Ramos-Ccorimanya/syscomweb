import { Card, Form, InputGroup, Button } from "react-bootstrap";
import { MainContainer } from "../common/MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const ListadoVentas = () => {
  return (
    <MainContainer>
      <h5>CANALES DE PUNTO DE VENTA ABIERTO</h5>
      <h5>OPERACIONES DE TERMINALES DE PUNTOS DE VENTA</h5>
      <div className="col-auto d-flex gap-2">
        <Button variant="outline-dark" className="me-2">Hoy</Button>
        <Button variant="outline-dark" className="me-2">Ayer</Button>
        <Button variant="outline-dark" className="me-2">Últimos 7 días</Button>
        <Button variant="outline-dark" className="me-2">Últimos 30 días</Button>
        <Link to="/clientes/agregar" className="btn btn-success" variant="success">
          <FontAwesomeIcon icon={faPlus} className="me-1" />
          <span>Apertura de Caja</span>
        </Link>
      </div>
      <h1>   </h1>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between mb-3">
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead>
                <tr className="text-uppercase">
                  <th>Hora</th>
                  <th>Cajero Apertura</th>
                  <th>Cajero Cierre</th>
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
