import { Card, Form, InputGroup, Button } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { CategoriaModal } from "./CategoriaModal"
import { getCategoriasHook } from "../../../hooks/inventarios"
import { useFormik } from "formik"

export const ListaCategorias = () => {
  const [categorias, setCategorias] = useState({})
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const handleShowCategory = () => setShowCategoryModal(true)
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
              <Button type="button" variant="success" onClick={handleShowCategory}>
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
                </tr>
              </thead>
              <tbody>
                {
                  categorias && categorias.results?.map((item, index) => (
                    <tr key={item.id} className="text-uppercase">
                      <td>{index + 1}</td>
                      <td>{item.nombre}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
      <CategoriaModal showCategoryModal={showCategoryModal} handleCloseCategory={handleCloseCategory} />
    </MainContainer>
  )
}