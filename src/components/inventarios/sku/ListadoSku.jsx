import { Button, Card, Form, InputGroup, Pagination } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faChevronLeft, faChevronRight, faCirclePlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { deleteCatalogoSkuHook, getCatalogoSkuHook, getCatalogoSkusHook } from "../../../hooks/inventarios"
import { deleteConfirm } from "../../common/sweetalert"
import { useFormik } from "formik"

export const ListadoSku = () => {
  const navigate = useNavigate()
  const [pageSize, setPageSize] = useState(12)
  const [catalogoSkus, setCatalogoSkus] = useState({})

  const formik = useFormik({
    initialValues: {
      query: "",
      estado: "HABILITADO",
    },
    onSubmit: values => {
      getCatalogoSkusHook(values.query, values.estado, 1, pageSize)
        .then(result => setCatalogoSkus(result))
    }
  })

  useEffect(() => {
    getCatalogoSkusHook(formik.values.query,
      formik.values.estado, 1, pageSize)
      .then(result => setCatalogoSkus(result))
  }, [pageSize])

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
          <span className="fw-semibold text-uppercase">Códigos de Referencia</span>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit} className="row row-cols-auto g-2">
            <div className="col-auto col-md-4">
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="query"
                  value={formik.values.query}
                  onChange={formik.handleChange}
                  placeholder="Buscar por nombre o código SKU" />
              </InputGroup>
            </div>
            <div className="col-auto">
              <Form.Select
                name="estado"
                value={formik.values.estado}
                onChange={(e) => {
                  formik.handleChange(e)
                  formik.handleSubmit()
                }}
                className="text-uppercase">
                <option value="HABILITADO">HABILITADO</option>
                <option value="DESHABILITADO">DESHABILITADO</option>
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
                      <td>
                        <Link to={`/inventarios/codigos-referencia/${item.id}/editar`} className="text-decoration-none">
                          {item.nombre}
                        </Link>
                      </td>
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
              <select className="rounded"
                onChange={(e) => {
                  setPageSize(e.target.value)
                }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="m-2">
              <span>1-10 de 1</span>
            </div>
            <nav aria-label="...">
              <Pagination>
                <Pagination.Prev disabled={catalogoSkus.previous === null}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <span className="visually-hidden">Anterior</span>
                </Pagination.Prev>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Next disabled={catalogoSkus.next === null}>
                  <FontAwesomeIcon icon={faChevronRight} />
                  <span className="visually-hidden">Siguiente</span>
                </Pagination.Next>
              </Pagination>
            </nav>
          </div>
        </Card.Footer>
      </Card>
      {/** DEBUG */}
      <div className="alert alert-warning mt-2">
        <span className="fw-semibold">Configurar Stock</span>
        <pre>
          {JSON.stringify(catalogoSkus, null, 2)}
        </pre>
      </div>
    </MainContainer>
  )
}