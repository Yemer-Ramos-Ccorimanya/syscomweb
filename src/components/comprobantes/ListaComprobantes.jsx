import { Card, Form, InputGroup, Button, Dropdown, Pagination, CardTitle, CardText } from "react-bootstrap"
import { MainContainer } from "../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faDownload, faChevronLeft, faChevronRight, faEye, faEnvelope, faCircleQuestion } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import DateRangePicker from "@wojtekmaj/react-daterange-picker"
import { useState } from "react"


export const ListaComprobantes = () => {
  const [value, onChange] = useState([new Date(), new Date()])
  return (
    <MainContainer>
      <div className="row">
        <div className="d-flex justify-content-end">
          <h5 className="me-auto">Gestión Documentaria</h5>
          <Button variant="success" className="ms-auto me-0">Nuevo Documento</Button>
        </div>
      </div>
      <div className="col-auto d-flex gap-2 mb-3">
        <Link to="#">
          <Button variant="outline-dark" className="me-2" style={{ border: 'none' }}>
            <FontAwesomeIcon icon={faDownload} className="mx-2" />
            Exportar
          </Button>
        </Link>
        <div className="ms-auto">
          <Button variant="outline-dark" className="me-2">Hoy</Button>
          <Button variant="outline-dark" className="me-2">Ayer</Button>
          <Button variant="outline-dark" className="me-2">Últimos 7 días</Button>
          <Button variant="outline-dark" className="me-2">Últimos 30 días</Button>
          <DateRangePicker className={"m-2"} onChange={onChange} value={value} />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-4">
          <Card>
            <Card.Body>
              <CardTitle className="text-center" style={{ fontSize: '1em' }}>
                Comprobantes aceptados por SUNAT
                <FontAwesomeIcon icon={faCircleQuestion} className="mx-2" />
              </CardTitle>
              <CardText className="display-1 text-center fw-bold text-secondary">
                0
              </CardText>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card>
            <Card.Body>
              <CardTitle className="text-center" style={{ fontSize: '1em' }}>
                Comprobantes con excepción por SUNAT
                <FontAwesomeIcon icon={faCircleQuestion} className="mx-2" />
              </CardTitle>
              <CardText className="display-1 text-center fw-bold text-secondary">
                0
              </CardText>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card>
            <Card.Body>
              <CardTitle className="text-center" style={{ fontSize: '1em' }}>
                Comprobantes rechazados por SUNAT
                <FontAwesomeIcon icon={faCircleQuestion} className="mx-2" />
              </CardTitle>
              <CardText className="display-1 text-center fw-bold text-secondary">
                0
              </CardText>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Card >
        <Card.Body>
          <Form className="row row-cols-auto g-2 justify-content-between">
            <div className="col-7">
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Busque por número de documento, cliente o RUC"
                />
              </InputGroup>
            </div>
            <div className="col-auto">
              <InputGroup className="mb-2">
                <Dropdown>
                  <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                    Estado SUNAT
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Aceptado</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Con excepción</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Rechazado</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                    Tipo de documento
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Aceptado</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Con excepción</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Rechazado</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="outline-dark" className="">Mas filtros
                </Button>
              </InputGroup>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="">
                  <th className="text-secondary">Serie</th>
                  <th className="text-secondary">Tipo</th>
                  <th className="text-secondary">Cliente</th>
                  <th className="text-secondary">total</th>
                  <th className="text-secondary">Forma de pago</th>
                  <th className="text-secondary">Fecha de emision</th>
                  <th className="text-secondary">fecha de vencimiento</th>
                  <th className="text-secondary">Estado SUNAT</th>
                  <th className="text-secondary">Estado</th>
                  <th className="text-secondary">Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>Factura</td>
                  <td>John Doe</td>
                  <td>S/ 0.00</td>
                  <td>Efectivo</td>
                  <td>25-01-2024</td>
                  <td>25-01-2024</td>
                  <td>Aceptado</td>
                  <td className="text-success">Pagado</td>
                  <td>
                    <FontAwesomeIcon icon={faEye} className="mx-2 text-success" />
                    <FontAwesomeIcon icon={faEnvelope} className="mx-2 text-success" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card.Body>
        {/* card footer */}
        <Card.Footer>
          <div className="d-flex justify-content-end">
            <div className="m-2">
              <span>Documentos por página: </span>
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
  )
}