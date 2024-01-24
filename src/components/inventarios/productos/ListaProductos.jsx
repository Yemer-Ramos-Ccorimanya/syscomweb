import { Card, Form, InputGroup, Button, Modal } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup, faList, faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"


export const ListaProductos = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showSubcategoryModal, setShowSubcategoryModal] = useState(false);

  const handleShowCategory = () => setShowCategoryModal(true);
  const handleCloseCategory = () => setShowCategoryModal(false);

  const handleShowSubcategory = () => setShowSubcategoryModal(true);
  const handleCloseSubcategory = () => setShowSubcategoryModal(false);
  return (
    <MainContainer>
      <h5>Productos</h5>
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
              <Link to="/inventarios/productos/agregar" className="btn btn-success" variant="success">
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                <span>Nuevo Producto</span>
              </Link>
            </div>
            <div className="col-auto">
              <Button variant="primary" onClick={handleShowCategory}>
                <FontAwesomeIcon icon={faList} className="me-1" />
                <span>Agregar Categoría</span>
              </Button>
              <Button variant="warning" onClick={handleShowSubcategory} className="ms-2">
                <FontAwesomeIcon icon={faLayerGroup} className="me-1" />
                <span>Agregar Subcategoría</span>
              </Button>

              {/* Category Modal */}
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
                  <th>Nombre</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Estado</th>
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