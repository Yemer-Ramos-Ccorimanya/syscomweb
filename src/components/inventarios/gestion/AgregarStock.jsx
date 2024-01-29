import { Card, Form, InputGroup, Button, Modal, Dropdown, CardHeader, Pagination } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faLayerGroup, faList, faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export const AgregarStock = () => {
  return (
    <MainContainer>
      {/* icono de volver para para volver a la listaInventario */}
      <Link to="/inventarios/gestion" style={{ color: 'black', textDecoration: 'none' }}>
        <FontAwesomeIcon icon={faChevronLeft} className="mx-2" />
        <span>Regresar</span>
      </Link>
      <h5 className="mb-3 mt-2">Agregar Stock</h5>
      {/* crear  dos divs que el primero ocupe 8 y el segundo 4 */}
      <div className="row">
        <div className="col-8">
          <Card >
            <Card.Header>
              <div className="d-flex justify-content-start">
                <h5 className="m-2" style={{ fontSize: '.9em' }}>Almacen *</h5>
              </div>
              <div className="d-flex justify-content-start">
                <Form.Select aria-label="Default select example">
                  <option>seleccionar Tienda</option>
                  <option value="1">Tienda PRINCIPAL</option>
                  <option value="2">Tienda SECUNDARIA</option>
                </Form.Select>
              </div>
            </Card.Header>
            <Card.Body>
              <Form className="row row-cols-auto g-2">
                <div className="col-10">
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Buscar por nombre o código SKU"
                    />
                  </InputGroup>
                </div>
                <div className="col-2">
                  <button className="btn btn-light" variant="light">
                    <span>Explorar Skus</span>
                  </button>
                </div>

              </Form>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr className="">
                      <th>Skus</th>
                      <th>Categoría</th>
                      <th>Medida</th>
                      <th>Costo unitario</th>
                      <th>Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="5" className="text-center">No hay datos para mostrar</td>
                    </tr>
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
        </div>
        <div className="col-4">
          <Card >
            <Card.Body>
              <Form className="g-2">
                <div className="">
                  <h5 className="m-2" style={{ fontSize: '.9em' }}>Motivo</h5>
                </div>
                {/* div para texttarea para escribir */}
                <div className="mb-3">
                  <Form.Control placeholder="Escribe el motivo del aumento" as="textarea" rows={3} />

                </div>
              </Form>

            </Card.Body>
          </Card>
        </div>
      </div>

    </MainContainer>
  )
}