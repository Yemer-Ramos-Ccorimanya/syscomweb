import { Card, Form, InputGroup, Button, Modal } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { CategoriaModal } from "./CategoriaModal"

export const ListaCategorias = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const handleShowCategory = () => setShowCategoryModal(true);
  const handleCloseCategory = () => setShowCategoryModal(false);

  return (
    <MainContainer>
      <h5>Categorías</h5>
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
              <Button variant="success" onClick={handleShowCategory}>
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                <span className="text-uppercase">Agregar Categoría</span>
              </Button>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table mx-auto">
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
      <CategoriaModal showCategoryModal={showCategoryModal} handleCloseCategory={handleCloseCategory} />
    </MainContainer>
  )
}