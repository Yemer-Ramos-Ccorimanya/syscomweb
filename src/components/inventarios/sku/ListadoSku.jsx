import { Button, Card, Form, InputGroup, Pagination } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faChevronLeft, faChevronRight, faCirclePlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { deleteCatalogoSkuHook, getCatalogoSkusHook } from "../../../hooks/inventarios"
import { deleteConfirm } from "../../common/sweetalert"

export const ListadoSku = () => {
  const navigate = useNavigate()
  const [catalogoSkus, setCatalogoSkus] = useState({})

  useEffect(() => {
    getCatalogoSkusHook().then(result => setCatalogoSkus(result))
  }, [])

  const handleDelete = (id) => {
    deleteConfirm().then(result => {
      if (result.isConfirmed) {
        deleteCatalogoSkuHook(id).then(() => {
          const results = catalogoSkus.results.filter(item => item.id !== id)
          setCatalogoSkus({ ...catalogoSkus, results })
        })
      }
    })
  }

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
            <table className="table mb-0">
              <thead>
                <tr className="text-uppercase">
                  <th>Nombre</th>
                  <th>Cód. Referencia</th>
                  <th>Unidad</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  catalogoSkus && catalogoSkus.results?.map(item => (
                    <tr key={item.id}>
                      <td>{item.nombre}</td>
                      <td>{item.codigo_sku}</td>
                      <td>{item.unidad_medida}</td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <Button variant={"secondary"}
                            onClick={() => navigate(`/inventarios/codigos-referencia/${item.id}/editar`)}
                            size={"sm"} className="me-2">
                            <FontAwesomeIcon icon={faEdit} />
                          </Button>
                          <Button variant={"danger"} onClick={() => handleDelete(item.id)} size={"sm"}>
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                }
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