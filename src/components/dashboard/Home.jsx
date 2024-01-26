import { Button, Card, Form, InputGroup } from "react-bootstrap"
import { MainContainer } from "../common/MainContainer"
import { SidebarDashboard } from "./SidebarDashboard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

export const Home = () => {
  return (
    <MainContainer bsPadding="p-0">
      <div className="d-flex justify-content-beetween">
        <div className="w-100 p-1">
          <div className="row">
            <h1 className="text-primary" style={{ fontSize: "1.5em" }}>Reporte de clientes por fecha de renta</h1>
            <div className="col-6">
              <Card className="m-2" >
                <Card.Header>
                  <Card.Title className="m-2">Clientes</Card.Title>
                </Card.Header>
                <Card.Body className="d-flex align-items-start">
                  <FontAwesomeIcon icon={faCircleUser} className="me-3" style={{ fontSize: '5.5em' }} />
                  <div>
                    <Card.Text>Ana Rodas Palomino</Card.Text>
                    <Card.Text><i>anarodas25@gmail.com</i></Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card className="m-2" >
                <Card.Header>
                  <Card.Title className="m-2">Periodo de Renta</Card.Title>
                </Card.Header>
                <Card.Body className="d-flex align-content-between">
                  <div className="ms-3">
                    <Card.Text className="m-2">Entrega</Card.Text>
                    <input type="date" className="form-control m-2" />
                    <input type="time" className="form-control m-2" />
                  </div>
                  <div className="mx-5">
                    <Card.Text className="m-2">Devolución</Card.Text>
                    <input type="date" className="form-control m-2" />
                    <input type="time" className="form-control m-2" />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-6">
              <Card className="m-2" >
                {/* card header */}
                <Card.Header>
                  <Card.Title className="m-2">información del cliente</Card.Title>
                </Card.Header>
                <Card.Body className="">
                  <div className="row">
                    <div className="col-6">
                      <Card.Text className="m-2">Direccion</Card.Text>
                    </div>
                    <div className="col-6">
                      <Card.Text className="m-2">Ana Rodas Palomino</Card.Text>
                      <Card.Text className="m-2">12345678</Card.Text>
                      <Card.Text className="m-2">987654321</Card.Text>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-6">
                      <Card.Text className="m-2">Prendas</Card.Text>
                    </div>
                    <div className="col-6">
                      <Card.Text className="m-2">04- calzados</Card.Text>
                      <Card.Text className="m-2">02- pantalones</Card.Text>
                      <Card.Text className="m-2">01- camisa</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <SidebarDashboard />
      </div>
    </MainContainer>
  )
}