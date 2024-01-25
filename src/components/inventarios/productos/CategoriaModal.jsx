import { Button, Form, Modal } from "react-bootstrap"

export const CategoriaModal = (props) => {
  const { showCategoryModal, handleCloseCategory } = props
  return (
    <Modal show={showCategoryModal} onHide={handleCloseCategory} centered>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Categoría</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formCategoryName">
          <Form.Label>Nombre de la Categoría</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre de la categoría" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="secondary" size="lg" onClick={handleCloseCategory}>
          <span className="text-uppercase">Cancelar</span>
        </Button>
        <Button variant="primary" size="lg" onClick={handleCloseCategory}>
          <span className="text-uppercase">Guardar</span>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}