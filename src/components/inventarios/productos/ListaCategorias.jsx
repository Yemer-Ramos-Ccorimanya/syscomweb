import { Card, Form, InputGroup, Button, Modal, Dropdown } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup, faList, faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"

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
                <span>Agregar Categoría</span>
              </Button>
              <Modal show={showCategoryModal} onHide={handleCloseCategory}>
                <Modal.Header closeButton>
                  <Modal.Title>Agregar Categoría</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group className="mb-3" controlId="formCategoryName">
                    <Form.Label>Nombre de la Categoría</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre de la categoría" />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseCategory}>
                    Cancelar
                  </Button>
                  <Button variant="primary" onClick={handleCloseCategory}>
                    Agregar
                  </Button>
                </Modal.Footer>
              </Modal>
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
    </MainContainer>
  )
}