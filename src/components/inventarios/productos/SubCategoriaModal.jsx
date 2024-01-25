import { Button, Form, Modal } from "react-bootstrap"

export const SubCategoriaModal = (props) => {
  const { showSubcategoryModal, handleCloseSubcategory } = props

  return (
    <Modal show={showSubcategoryModal} onHide={handleCloseSubcategory} centered>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Subcategoría</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formCategoryName">
          <Form.Label>Seleccionar Categoría</Form.Label>
          <Form.Select />
        </Form.Group>
        <Form.Group controlId="formSubcategoryName">
          <Form.Label>Nombre de la Subcategoría</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre de la subcategoría" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="secondary" size="lg" onClick={handleCloseSubcategory}>
          <span className="text-uppercase">Cancelar</span>
        </Button>
        <Button variant="primary" size="lg" onClick={handleCloseSubcategory}>
          <span className="text-uppercase">Guardar</span>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}