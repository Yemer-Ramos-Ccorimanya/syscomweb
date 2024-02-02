import { Button, Card, CardHeader, Form, InputGroup, Pagination } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faCircleXmark, faFloppyDisk, faShuffle } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"

export const FormEmpresa = () => {
  
  return (
    <MainContainer>
      <div className="row">
        <div className="col-11 ms-2">
          <h5>Informacion de empresa</h5>
        </div>
        <div className="row mb-3">
          <div className="col-2 offset-1">
            <h6>Datos Empresa</h6>
            <p>Completa la informacion de tu empresa</p>
          </div>
          <div className="col-8">
            {/* card con nombre de la empresa. ruc  departamento provincia distrito y direccion de facturacion */}
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de la empresa</Form.Label>
                    <Form.Control type="text" placeholder="Nombre de la empresa" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ruc</Form.Label>
                    <Form.Control type="text" placeholder="Ruc" />
                  </Form.Group>

                  <div className="row">
                    <div className="col-4">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Departamento</Form.Label>
                        <Form.Control type="text" placeholder="Departamento" />
                      </Form.Group>
                    </div>
                    <div className="col-4">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Provincia</Form.Label>
                        <Form.Control type="text" placeholder="Provincia" />
                      </Form.Group>
                    </div>
                    <div className="col-4">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Distrito</Form.Label>
                        <Form.Control type="text" placeholder="Distrito" />
                      </Form.Group>
                    </div>
                  </div>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Direccion de facturacion</Form.Label>
                    <Form.Control type="text" placeholder="Direccion de facturacion" />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="primary" className="text-uppercase">
                <FontAwesomeIcon icon={faFloppyDisk} className="me-2" />
                Guardar
              </Button>
            </div>
          </div>

        </div>
        <div className="row mb-3">
          <div className="col-2 offset-1">
            <h6 className="ms-2">Sucursales</h6>
          </div>
          <div className="col-8">
            <Card>
              <Card.Header>
                <div className="d-flex justify-content-between">
                  <span className="text-uppercase fw-semibold">Sucursales</span>
                  <Button className="text-uppercase" variant="success" >Nueva Sucursal</Button>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr className="text-uppercase">
                        <th>Sucursal</th>
                        <th>Dirección</th>
                        <th>Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>00000</td>
                        <td>Av. Andahuaylas</td>
                        <td>tienda principal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card.Body>
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
          </div>

        </div>


      </div>
    </MainContainer>
  )

}