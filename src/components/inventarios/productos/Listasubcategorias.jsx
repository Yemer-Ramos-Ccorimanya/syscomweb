import { Card, Form, InputGroup, Button } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { SubCategoriaModal } from "./SubCategoriaModal"

export const ListaSubCategorias = () => {
  const [showSubcategoryModal, setShowSubcategoryModal] = useState(false);
  const handleShowSubcategory = () => setShowSubcategoryModal(true);
  const handleCloseSubcategory = () => setShowSubcategoryModal(false);
  return (
    <MainContainer>
      <h5>SubCategorias</h5>
      <Card >
        <Card.Body>
          <Form className="row row-cols-auto g-2">
            <div className="col-auto">
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Nombre"
                />
              </InputGroup>
            </div>
            <div className="col-auto">
              <Button variant="success" onClick={handleShowSubcategory} className="ms-2">
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                <span className="text-uppercase">Agregar Subcategoría</span>
              </Button>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-uppercase">
                  <th>N°</th>
                  <th>Nombre</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
      <SubCategoriaModal showSubcategoryModal={showSubcategoryModal} handleCloseSubcategory={handleCloseSubcategory} />
    </MainContainer>
  )
}