import { Card, Form, InputGroup, Button } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faMagnifyingGlass, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
import { formTypeModal } from "../../../config"
import { CategoriaModal } from "./CategoriaModal"
import { deleteCategoriaHook, getCategoriasHook } from "../../../hooks/inventarios"
import { deleteConfirm } from "../../common/sweetalert"

export const ListaCategorias = () => {
  const [categorias, setCategorias] = useState({})
  const [titleModal, setTitleModal] = useState("")
  const [categoriaActual, setCategoriaActual] = useState({})
  const [typeModal, setTypeModal] = useState(formTypeModal.add)
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const handleCloseCategory = () => setShowCategoryModal(false)

  useEffect(() => {
    getCategoriasHook().then(result => setCategorias(result));
  }, [])

  const formik = useFormik({
    initialValues: {
      query: ""
    },
    onSubmit: values => {
      getCategoriasHook(values.query).then(result => setCategorias(result))
    }
  })

  const handleAddCategoryModal = () => {
    setTitleModal("Agregar Categoría")
    setTypeModal(formTypeModal.add)
    setShowCategoryModal(true)
  }

  const handleEditarCategoriaModal = (item) => {
    setTitleModal("Editar Categoría")
    setTypeModal(formTypeModal.edit)
    setCategoriaActual(item)
    setShowCategoryModal(true)
  }

  const saveChanges = ({ data, type }) => {
    if (type === formTypeModal.add) {
      const results = [data, ...categorias.results]
      setCategorias({ ...categorias, results })
      setShowCategoryModal(false)
    }
    if (type === formTypeModal.edit) {
      const results = categorias.results.map(item => {
        if (item.id === data.id) item = data
        return item
      })
      setCategorias({ ...categorias, results })
      setShowCategoryModal(false)
    }
  }

  const handleDelete = (id) => {
    deleteConfirm().then(result => {
      if (result.isConfirmed) {
        deleteCategoriaHook(id).then(() => {
          const results = categorias.results.filter(item => item.id !== id)
          setCategorias({ ...categorias, results })
        })
      }
    })
  }

  return (
    <MainContainer>
      <h5>Categorías</h5>
      <Card >
        <Card.Body>
          <Form onSubmit={formik.handleSubmit} className="row row-cols-auto g-2">
            <div className="col-auto col-md-4">
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
              <Button type="button" variant="success" onClick={handleAddCategoryModal}>
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                <span className="text-uppercase">Agregar Categoría</span>
              </Button>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table mb-0">
              <thead>
                <tr className="text-uppercase">
                  <th>N°</th>
                  <th>Nombre</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  categorias && categorias.results?.map((item, index) => (
                    <tr key={item.id} className="text-uppercase">
                      <td>{index + 1}</td>
                      <td>{item.nombre}</td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <Button variant={"secondary"}
                            onClick={() => handleEditarCategoriaModal(item)}
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
      <CategoriaModal
        type={typeModal}
        title={titleModal}
        categoria={categoriaActual}
        saveChanges={saveChanges}
        showCategoryModal={showCategoryModal}
        handleCloseCategory={handleCloseCategory} />
    </MainContainer>
  )
}