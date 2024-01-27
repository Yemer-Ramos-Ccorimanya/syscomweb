import { Card, Form, InputGroup, Button, Pagination } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faCircleMinus, faChevronLeft, faChevronRight, faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export const ListadoSku = () => {
  return (
    <MainContainer>
      <h1>SKU</h1>
      <div className="col-auto d-flex justify-content-between gap-2 mb-3">
        <Button variant="outline-dark" style={{ border: 'none' }}>
          <FontAwesomeIcon icon={faCircleMinus} className="mx-2" />
          Exportar
        </Button>
        <Link to="/inventarios/sku/agregar" className="btn btn-success">
          <FontAwesomeIcon icon={faCirclePlus} className="mx-2" />
          Nuevo Sku
        </Link>

      </div>
      <Card >
        {/* cabecera del card */}
        <Card.Body>
          <Button variant="outline-dark" className="me-2" style={{ border: 'none' }}>
            <FontAwesomeIcon icon={faCircleMinus} className="mx-2" />
            todos
          </Button>
          <Button variant="outline-dark" className="me-2" style={{ border: 'none' }}>
            <FontAwesomeIcon icon={faCircleMinus} className="mx-2" />
            Habilitados
          </Button>
          <Button variant="outline-dark" className="me-2" style={{ border: 'none' }}>
            <FontAwesomeIcon icon={faCircleMinus} className="mx-2" />
            Deshabilitados
          </Button>
          <Form className="row g-2">
            <div className="col-3">
              {/* Input de búsqueda */}
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control placeholder="Buscar por nombre o código SKU" />
              </InputGroup>
            </div>
            <div className="col-3">
              {/* Primer select de moneda */}
              <Form.Group controlId="moneda1">
                <Form.Label>Unidad de Moneda </Form.Label>
                <Form.Select>
                  <option>Soles</option>
                  <option>Dólares</option>
                  <option>Euros</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-3">
              {/* Segundo select de moneda */}
              <Form.Group controlId="moneda2">
                <Form.Label>Habilitado</Form.Label>
                <Form.Select>
                  <option>Habilitado</option>
                  <option>Deshabilitado</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-3">
              {/* Segundo select de moneda */}
              <Button variant="outline-dark" className="me-2" style={{ border: 'none' }}>
                <FontAwesomeIcon icon={faCircleMinus} className="mx-2" />
                Mas filtros
              </Button>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-uppercase">
                  <th>Nombre SKU</th>
                  <th>Cód. SKU</th>
                  <th>Descripion</th>
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
              <span>Skus por página: </span>
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