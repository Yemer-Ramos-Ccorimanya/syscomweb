import { Card, Form, InputGroup, Dropdown, Button } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faLayerGroup, faMagnifyingGlass, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Modal from 'react-bootstrap/Modal';
import { useFormik } from "formik"
import { deleteProductoHook, getProductosHook } from "../../../hooks/inventarios"
import { deleteConfirm } from "../../common/sweetalert"
import { formatearNumero } from "../../../hooks/helpers.hook"

export const ListaProductos = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [productos, setProductos] = useState({})

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    getProductosHook().then(result => setProductos(result))
  }, [])

  const formik = useFormik({
    initialValues: {
      query: ""
    },
    onSubmit: values => {
      getProductosHook(values.query).then(result => setProductos(result))
    }
  })

  const handleDelete = (id) => {
    deleteConfirm().then(result => {
      if (result.isConfirmed) {
        deleteProductoHook(id).then(() => {
          const results = productos.results.filter(item => item.id !== id)
          setProductos({ ...productos, results })
        })
      }
    })
  }

  return (
    <MainContainer>
      <h5>Productos</h5>
      <Card >
        <Card.Body>
          <Form onSubmit={formik.handleSubmit} className="row row-cols-auto g-2">
            <div className="col-auto">
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control
                  name="query"
                  value={formik.values.query}
                  onChange={formik.handleChange}
                  placeholder="Nombre"
                />
              </InputGroup>
            </div>
            <div className="col-auto">
              <Link to="/inventarios/productos/agregar" className="btn btn-success" variant="success">
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                <span className="text-uppercase">Nuevo Producto</span>
              </Link>
            </div>
            <div className="col-auto">
              <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                  <FontAwesomeIcon icon={faLayerGroup} className="me-1" />
                  <span className="text-uppercase">Opciones</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="text-uppercase">
                  <Dropdown.Item as={Link} to="/inventarios/productos/categorias">
                    Categorías
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/inventarios/productos/subcategorias">
                    Subcategorías
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-auto">
              <>
                <Button variant="primary" onClick={handleShow}>
                  Seleccionar Producto
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Seleccionar Productos</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="d-flex" >
                      <div className="col-auto m-1">
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                          </InputGroup.Text>
                          <Form.Control
                            placeholder="Nombre"
                          />
                        </InputGroup>
                      </div>
                      <div className="m-1">
                        <Dropdown>
                          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                            Categoría
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="m-1">
                        <Dropdown>
                          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                            Unidad
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr className="text-uppercase">
                            <th>Nombre</th>
                            <th>Tipo de unidad</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                          </tr>
                          <tr className="text-uppercase">
                            <th>Casaca</th>
                            <th>UNIDAD</th>
                            <th>S/35.00</th>
                            <th>
                              <Button variant="success">AGREGAR</Button>{' '}
                            </th>
                          </tr>
                          <tr className="text-uppercase">
                            <th>Pantalón</th>
                            <th>UNIDAD</th>
                            <th>S/100.00</th>
                            <th>
                              <Button variant="success">AGREGAR</Button>{' '}
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </Modal.Body>
                </Modal>
              </>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table mb-0">
              <thead>
                <tr className="text-uppercase">
                  <th>Nombre</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  productos && productos.results?.map((item, index) => (
                    <tr key={item.id} className="text-uppercase">
                      <td>
                        <Link to={`/inventarios/productos/${item.id}/editar`}>
                          {item.nombre}
                        </Link>
                      </td>
                      <td>{item.categoria}</td>
                      <td>{formatearNumero(item.precio_unitario)}</td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <Button variant={"secondary"}
                            onClick={() => navigate(`/inventarios/productos/${item.id}/editar`)}
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
      </Card>
    </MainContainer>
  )
}