import { Card } from "react-bootstrap";
import { MainContainer } from "../common/MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"; // Asegúrate de importar el icono que necesitas

export const Home = () => {
  return (
    <MainContainer>
      <h1 className="h1 text-start mb-4">Reporte de Clientes por fecha de Renta</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="mt-5">
              <Card style={{ width: '35rem' }}>
                <Card.Body>
                  <Card.Title>Clientes</Card.Title>
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "3rem" }} />
                    <div className="ml-3">
                      <Card.Text className="m-2">Ana Rodas Palomino</Card.Text>
                      <Card.Text className="m-2"><i>abc@gmail.com</i></Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="mt-4">
              <Card style={{ width: '35rem' }}>
                <Card.Body>
                  <Card.Title>Periodo de Renta</Card.Title>
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <div className="row">
                      <div className="col">
                        <Card.Text className="m-2">Entrega</Card.Text>
                        <input type="date" className="form-control m-2" />
                        <input type="time" className="form-control m-2" />
                      </div>
                      <div className="col">
                        <Card.Text className="m-2">Retorno</Card.Text>
                        <input type="date" className="form-control m-2" />
                        <input type="time" className="form-control m-2" />
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="mt-5">
              <Card style={{ width: '35rem', height: '22.2rem' }}>
                <Card.Body>
                  <Card.Title>Información del Cliente</Card.Title>
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <div className="ml-0">
                      <div className="d-flex">
                        <div className="col">
                          <Card.Text className="m-2" >Dirección</Card.Text>
                        </div>
                        <div className="col">
                          <Card.Text className="m-2">Av Andahuaylas</Card.Text>
                          <Card.Text className="m-2">987654321</Card.Text>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="col">
                          <Card.Text className="m-2">Prendas</Card.Text>
                        </div>
                        <div className="col">
                          <Card.Text className="m-2">04- calzados</Card.Text>
                          <Card.Text className="m-2">02- pantalones</Card.Text>
                          <Card.Text className="m-2">01- camisa</Card.Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>


    </MainContainer>
  );
};
