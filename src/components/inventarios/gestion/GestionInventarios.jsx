import { Card, Form, InputGroup, Button, Pagination } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faCirclePlus, faCircleMinus, faCalendarAlt, faDownload, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export const GestionInventarios = () => {
  return (
    <MainContainer>
      <h5>Inventario</h5>
      <div className="col-auto d-flex gap-2 mb-2">
        <Link to="/inventarios/gestion/agregarstock" className="btn btn-outline-dark me-2" style={{ border: 'none' }}>
          <FontAwesomeIcon icon={faCirclePlus} className="me-2" />
          Agregar Stock
        </Link>
        <Link to="/inventarios/gestion/descontarstock" className="btn btn-outline-dark me-2" style={{ border: 'none' }}>
          <FontAwesomeIcon icon={faCircleMinus} className="me-2" />
          Descontar Stock
        </Link>
      </div>
      <Card >
        {/* cabecera del card */}
        <Card.Header>
        <span className="text-uppercase fw-semibold">Gestión de Inventarios</span>
        </Card.Header>
        <Card.Body>
          <Form className="row row-cols-auto g-2">
            <div className="col-auto col-5">
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Buscar por nombre o código SKU"
                />
              </InputGroup>
            </div>
            <div className="col-auto col-md-3">
              <InputGroup>
                <Form.Select>
                </Form.Select>
                <Button variant="outline-dark" className="me-2">Más filtros</Button>
              </InputGroup>
            </div>
            <div className="col-auto">
              <Button variant="outline-dark">
              <FontAwesomeIcon icon={faDownload}  className="me-1" />
                <span className="text-uppercase">Exportar</span>                
              </Button>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-uppercase">
                  <th>Nombre</th>
                  <th>Cód. Referencia</th>
                  <th>Stock</th>
                  <th>Costo Unitario</th>
                  <th>Costo Total</th>
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