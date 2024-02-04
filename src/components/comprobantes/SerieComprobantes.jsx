import { Button, Card, Form, InputGroup, Pagination } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { MainContainer } from "../common/MainContainer"
import { ModalSerieComprobante } from "./ModalSerieComprobante"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
import { formTypeModal } from "../../config"
import {deleteAlmacenHook, getAlmacenesHook } from "../../hooks/inventarios/almacenes.hook"
import { deleteConfirm } from "../common/sweetalert"


export const SerieComprobantes = () => {
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
      <h5> Serie Comprobante</h5>
      <div className="row m-2">
        <div className="col-10 p-2">
          <Card>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit} className="row row-cols-auto g-2">
                <div className="col-8">
                  <InputGroup className="mb-2">
                    <Form.Control
                      placeholder="BUSQUEDA"
                    />
                  </InputGroup>
                </div>
                <div className="col-auto">
                  <Button onClick={handleAddModal} className="btn btn-success ">Nueva Serie</Button>
                </div>

                <table className='table w-100'>

                  <thead>
                    <tr>
                      <th scope="col">Serie</th>
                      <th scope="col">Tipo de comprobante</th>
                      <th scope="col">Correlativo</th>
                      <th scope="col">Estados</th>
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
                          <td>{item.telefono}</td>
                          <td>
                            <div className="d-flex justify-content-end">
                              <Button variant={"secondary"}  onClick={() => handleEditarAlamcenModal(item)} size={"sm"} className="me-2">
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


              </Form>
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

      <ModalSerieComprobante
        type={typeModal}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        almacen={almacenActual}
        saveChanges={saveChanges}
      />

    </MainContainer>
  );
};
