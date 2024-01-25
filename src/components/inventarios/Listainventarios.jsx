import { Card, Form, InputGroup, Button, Modal, Dropdown,Pagination  } from "react-bootstrap"
import { MainContainer } from "../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup, faList, faMagnifyingGlass, faCirclePlus,faCircleMinus,faCalendarAlt,faDownload,faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export const ListaInventarios = () => {
  return (
    <MainContainer>
      <h5>Inventario</h5>
      <div className="col-auto d-flex gap-2 mb-3">
        <Button variant="outline-dark" className="me-2" style={{ border: 'none' }}>
          <FontAwesomeIcon icon={faCircleMinus} className="mx-2" />
          Descontar Stock
        </Button>
        <Button variant="outline-dark" className="me-2" style={{ border: 'none' }}>
          <FontAwesomeIcon icon={faCirclePlus} className="mx-2" />
          Agregar Stock
        </Button>
      </div>
      <Card >
        {/* cabecera del card */}
        <Card.Header>
          <div className="d-flex justify-content-start">
            <h5 className= "m-2" style={{ fontSize: '.9em'}}>Reporte de inventario</h5>
            <h5 className= "m-2" style={{ fontSize: '.9em' }}>Reporte Consolidado</h5>
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
                  placeholder="Buscar por nombre o código SKU"
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
            <div className="col-2">
              <Button variant="outline-dark" className="ms-5 me-0">Exportar
              <FontAwesomeIcon icon={faDownload} className="mx-2" />
              </Button>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-uppercase">
                  <th>Nombre SKU</th>
                  <th>Cód. SKU</th>
                  <th>Almacén</th>
                  <th>Stock actual</th>
                  <th>U. de medida</th>
                  <th>Costo unitario</th>
                  <th>Costo total</th>
                  <th>Ultimo movimiento</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </Card.Body>
        {/* card footer */}
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
        </Card.Footer>
      </Card>
    </MainContainer>
  )
}