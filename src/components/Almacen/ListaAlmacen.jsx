import { Card, Form, InputGroup, Button,Pagination  } from "react-bootstrap"
import { MainContainer } from "../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass,faCalendarAlt,faChevronLeft, faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons"

import { Link } from "react-router-dom"

export const ListaAlmacen = () => {
  return (
    <MainContainer>
      <h5>Almacen</h5>
      <div className="col-auto d-flex gap-2 mb-3">

      </div>
      <Card >
        <Card.Header>
          <div className="d-flex justify-content-start">
            <h5 className= "m-2" style={{ fontSize: '.9em'}}>Lista de almacenes</h5>
          </div>
        </Card.Header>
        <Card.Body>
          <Form className="row row-cols-auto g-2">
            <div className="col-7">
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Buscar por nombre"
                />
              </InputGroup>
            </div>
            <div className="col-3">
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faCalendarAlt} className="mx-2" />
                </InputGroup.Text>
                <Form.Control
                  type="date"
                  placeholder="Seleccionar fecha"
                />
                <Button variant="outline-dark" className="me-2">Más filtros</Button>

              </InputGroup>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-uppercase">
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Dirección</th>
                  <th>Teléfono</th>
                  <th>Estado</th>
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
              <select className ="rounded">
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
          <div className="col-auto">
          <Link to="/almacen/EditarAlmacen">

            <Button variant="outline-success" className="me-2"> Actualizar</Button>
          </Link>
          </div>
        </Card.Footer>
      </Card>
    </MainContainer>
  )
}