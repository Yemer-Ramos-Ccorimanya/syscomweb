import { Card, Form, InputGroup, Button, Modal, Dropdown, CardHeader, Pagination } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faCircleXmark, faFloppyDisk, faLayerGroup, faList, faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export const DescontarStock = () => {
  return (
    <MainContainer>
      {/* icono de volver para para volver a la listaInventario */}
      <Link to="/inventarios/gestion" style={{ color: 'black', textDecoration: 'none' }}>
        <FontAwesomeIcon icon={faChevronLeft} className="mx-2" />
        <span>Regresar</span>
      </Link>
      <h5 className="mb-3 mt-2">Descontar Stock</h5>
      {/* crear  dos divs que el primero ocupe 8 y el segundo 4 */}
      <div className="row">
        <div className="col-8">
          <Card >
            <Card.Header>
              <div className="row row-cols-auto g-2">
                <div className="col-auto">
                  <label className="form-label col-form-label fw-semibold text-uppercase">Almacén</label>
                </div>
                <div className="col-auto">
                  <Form.Select aria-label="Default select example">
                    <option>seleccionar Tienda</option>
                    <option value="1">Tienda PRINCIPAL</option>
                    <option value="2">Tienda SECUNDARIA</option>
                  </Form.Select>
                </div>
                <div className="col-auto">
                  <Button variant="success">
                    <span className="text-uppercase">Explorar Cód. Referencia</span>
                  </Button>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
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
          <Card className="mb-3">
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
          <div className="d-flex">
            <Button size="lg" variant="secondary" className="w-100 me-2">
              <FontAwesomeIcon icon={faCircleXmark} className="me-1" />
              <span className="text-uppercase">Cancelar</span>
            </Button>
            <Button type="submit" form="f_sku" size="lg" className="w-100" variant="primary">
              <FontAwesomeIcon icon={faFloppyDisk} className="me-1" />
              <span className="text-uppercase">Guardar</span>
            </Button>
          </div>
        </div>
      </div>

    </MainContainer>
  )
}