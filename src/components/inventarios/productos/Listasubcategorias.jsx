import { Card, Form, InputGroup, Button, Modal, Dropdown } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup, faList, faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"

export const ListaSubcategorias = () => {
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
                <span>Agregar Subcategoría</span>
              </Button>
              {/* Subcategory Modal */}
              <Modal show={showSubcategoryModal} onHide={handleCloseSubcategory}>
                <Modal.Header closeButton>
                  <Modal.Title>Agregar Subcategoría</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group className="mb-3" controlId="formSubcategoryName">
                    <Form.Label>Nombre de la Subcategoría</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre de la subcategoría" />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseSubcategory}>
                    Cancelar
                  </Button>
                  <Button variant="primary" onClick={handleCloseSubcategory}>
                    Agregar
                  </Button>
                </Modal.Footer>
              </Modal>
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
    </MainContainer>
  )
}