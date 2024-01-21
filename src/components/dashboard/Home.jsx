import { Card } from "react-bootstrap";
import { MainContainer } from "../common/MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"; // Asegúrate de importar el icono que necesitas

export const Home = () => {
  return (
    <MainContainer>
      <h1 className="h1 text-center mb-4">Reporte de Clientes por fecha de Renta</h1>
      <div>
        <div className="m-5">
          <Card style={{ width: '35rem' }}>
            <Card.Body>
              <Card.Title>Clientes</Card.Title>
              <div className="d-flex align-items-center justify-content-start mb-2 ">
                <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "3rem" }} />
                <div className="ml-3">
                  <Card.Text className="m-2 ">Ana Rodas Palomino</Card.Text>
                  <Card.Text className="m-2"><i>abc@gmail.com</i></Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="m-5">
          <Card style={{ width: '35rem' }}>
            <Card.Body>
              <Card.Title>Periodo de Renta</Card.Title>
              <div className="d-flex align-items-center justify-content-start mb-2 ">
                <div className="row">
                  <div className="col">
                    <Card.Text className="m-2">Entrega</Card.Text>
                    <input type="date" className="form-control" />
                    <input type="time" className="form-control" />
                  </div>
                  <div className="col">
                    <Card.Text className="m-2">Retorno</Card.Text>
                    <input type="date" className="form-control" />
                    <input type="time" className="form-control" />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </MainContainer>
  );
};
