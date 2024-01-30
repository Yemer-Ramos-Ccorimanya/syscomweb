import { Card, Form, InputGroup, Pagination } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faChevronLeft, faChevronRight, faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export const ListadoSku = () => {
  return (
    <MainContainer>
      <Card >
        <Card.Header>
          <span className="fw-semibold">Códigos de Referencia</span>
        </Card.Header>
        <Card.Body>
          <Form className="row row-cols-auto g-2">
            <div className="col-auto col-md-4">
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control placeholder="Buscar por nombre o código SKU" />
              </InputGroup>
            </div>
            <div className="col-auto">
              <Form.Select className="text-uppercase">
                <option>Habilitado</option>
                <option>Deshabilitado</option>
              </Form.Select>
            </div>
            <div className="col-auto">
              <Link to="/inventarios/codigos-referencia/agregar" className="btn btn-success">
                <FontAwesomeIcon icon={faCirclePlus} className="me-1" />
                <span className="text-uppercase">Nuevo Cód. Referencia</span>
              </Link>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-uppercase">
                  <th>Nombre SKU</th>
                  <th>Cód. SKU</th>
                  <th>Unidad</th>
                  <th>Estado</th>
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
              <span>Códigos por página: </span>
              <select className="rounded">
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
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