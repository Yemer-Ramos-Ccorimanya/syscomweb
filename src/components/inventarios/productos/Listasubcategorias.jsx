import { Card, Form, InputGroup, Button } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faMagnifyingGlass, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { SubCategoriaModal } from "./SubCategoriaModal"
import { deleteSubCategoriaHook, getSubCategoriasHook } from "../../../hooks/inventarios"
import { useFormik } from "formik"
import { formTypeModal } from "../../../config"
import { deleteConfirm } from "../../common/sweetalert"

export const ListaSubCategorias = () => {
  const [subCategorias, setSubCategorias] = useState({})
  const [titleModal, setTitleModal] = useState("")
  const [subCategoriaActual, setSubCategoriaActual] = useState({})
  const [typeModal, setTypeModal] = useState(formTypeModal.add)
  const [showSubcategoryModal, setShowSubcategoryModal] = useState(false)
  const handleCloseSubcategory = () => setShowSubcategoryModal(false)

  useEffect(() => {
    getSubCategoriasHook().then(result => setSubCategorias(result))
  }, [])

  const formik = useFormik({
    initialValues: {
      query: ""
    },
    onSubmit: values => {
      getSubCategoriasHook(values.query).then(result => setSubCategorias(result))
    }
  })

  const handleAddSubCategoryModal = () => {
    setTitleModal("Agregar SubCategoría")
    setTypeModal(formTypeModal.add)
    setShowSubcategoryModal(true)
  }

  const handleEditarSubCategoriaModal = (item) => {
    setTitleModal("Editar SubCategoría")
    setTypeModal(formTypeModal.edit)
    setSubCategoriaActual(item)
    setShowSubcategoryModal(true)
  }

  const saveChanges = ({ data, type }) => {
    if (type === formTypeModal.add) {
      const results = [data, ...subCategorias.results]
      setSubCategorias({ ...subCategorias, results })
      setShowSubcategoryModal(false)
    }
    if (type === formTypeModal.edit) {
      const results = subCategorias.results.map(item => {
        if (item.id === data.id) item = data
        return item
      })
      setSubCategorias({ ...subCategorias, results })
      setShowSubcategoryModal(false)
    }
  }

  const handleDelete = (id) => {
    deleteConfirm().then(result => {
      if (result.isConfirmed) {
        deleteSubCategoriaHook(id).then(() => {
          const results = subCategorias.results.filter(item => item.id !== id)
          setSubCategorias({ ...subCategorias, results })
        })
      }
    })
  }

  return (
    <MainContainer>
      <h5>SubCategorias</h5>
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
              <Button type="button" variant="success" onClick={handleAddSubCategoryModal} className="ms-2">
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                <span className="text-uppercase">Agregar Subcategoría</span>
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
                  subCategorias && subCategorias.results?.map((item, index) => (
                    <tr key={item.id} className="text-uppercase">
                      <td>{index + 1}</td>
                      <td>{item.nombre}</td>
                      <th>
                        <div className="d-flex justify-content-end">
                          <Button variant={"secondary"}
                            onClick={() => handleEditarSubCategoriaModal(item)}
                            size={"sm"} className="me-2">
                            <FontAwesomeIcon icon={faEdit} />
                          </Button>
                          <Button variant={"danger"} onClick={() => handleDelete(item.id)} size={"sm"}>
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </div>
                      </th>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
      <SubCategoriaModal
        type={typeModal}
        title={titleModal}
        subCategoria={subCategoriaActual}
        saveChanges={saveChanges}
        showSubcategoryModal={showSubcategoryModal}
        handleCloseSubcategory={handleCloseSubcategory} />
    </MainContainer>
  )
}