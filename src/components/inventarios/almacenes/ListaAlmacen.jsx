import { Card, Form, InputGroup, Button, Pagination } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faChevronLeft, faChevronRight, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { AlmacenFormModal } from "./AlmacenFormModal"
import { useEffect, useState } from "react"
import { deleteAlmacenHook, getAlmacenesHook } from "../../../hooks/inventarios/almacenes.hook"
import { useFormik } from "formik"
import { formTypeModal } from "../../../config"
import { deleteConfirm } from "../../common/sweetalert"


export const ListaAlmacen = () => {
  const [showModal, setShowModal] = useState(false)
  const [typeModal, setTypeModal] = useState(formTypeModal.add)
  const [almacenes, setAlmacenes] = useState({})
  const [almacenActual, setAlmacenActual] = useState({})

  useEffect(() => {
    getAlmacenesHook().then(result => setAlmacenes(result))
  }, [])

  const formik = useFormik({
    initialValues: {
      query: ""
    },
    onSubmit: values => {
      getAlmacenesHook(values.query).then(result => setAlmacenes(result))
    }
  })

  const handleCloseModal = () => setShowModal(false)

  const handleAddModal = () => {
    setTypeModal(formTypeModal.add)
    setShowModal(true)
  }

  const handleEditarAlamcenModal = (item) => {
    setTypeModal(formTypeModal.edit)
    setAlmacenActual(item)
    setShowModal(true)
  }

  const saveChanges = ({ data, type }) => {
    if (type === formTypeModal.add) {
      const results = [data, ...almacenes.results]
      setAlmacenes({ ...almacenes, results })
      setShowModal(false)
    }
    if (type === formTypeModal.edit) {
      const results = almacenes.results.map(item => {
        if (item.id === data.id) item = data
        return item
      })
      setAlmacenes({ ...almacenes, results })
      setShowModal(false)
    }
  }

  const handleDeleteAlmacen = (id) => {
    deleteConfirm().then(result => {
      if (result.isConfirmed) {
        deleteAlmacenHook(id).then(() => {
          const results = almacenes.results.filter(item => item.id !== id)
          setAlmacenes({ ...almacenes, results })
        })
      }
    })
  }

  return (
    <MainContainer>
      <Card >
        <Card.Header>
          <span className="text-uppercase fw-semibold">Almacenes</span>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit} className="row row-cols-auto g-2">
            <div className="col-4">
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control
                  name="query"
                  value={formik.values.query}
                  onChange={formik.handleChange}
                  placeholder="Buscar por nombre"
                />
              </InputGroup>
            </div>
            <div className="col-3">
              <Button onClick={handleAddModal} className="text-uppercase" variant="success" >Agregar Almacen</Button>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table mb-0">
              <thead>
                <tr className="text-uppercase">
                  <th>Nombre</th>
                  <th>Dirección</th>
                  <th>Teléfono</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  almacenes && almacenes.results?.map(item => (
                    <tr key={item.id}>
                      <td>{item.nombre}</td>
                      <td>{item.direccion}</td>
                      <td>{item.telefono}</td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <Button variant={"secondary"}
                            onClick={() => handleEditarAlamcenModal(item)}
                            size={"sm"} className="me-2">
                            <FontAwesomeIcon icon={faEdit} />
                          </Button>
                          <Button variant={"danger"} onClick={() => handleDeleteAlmacen(item.id)} size={"sm"}>
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

      <AlmacenFormModal
        type={typeModal}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        almacen={almacenActual}
        saveChanges={saveChanges}
      />

    </MainContainer>
  )
}