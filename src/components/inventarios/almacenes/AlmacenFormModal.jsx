import { Button, Form, Modal } from "react-bootstrap"
export const AlmacenFormModal = (props) => {
  const { 
    showModal,
    handleCloseModal
    } = props
  return (
    <>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-3">
            <div className="col-6">
              <Form.Label htmlFor="inputPassword5">Tipo documento</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
            </div>
            <div className="col-6">
              <Form.Label htmlFor="inputPassword5">D.N.I/R.U.C</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
            </div>
          </div>
          <Form.Label htmlFor="inputPassword5">Nombres Completo / Razón Social</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="inputPassword5">Dirección</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <div className="row mb-3">
            <div className="col-6">
              <Form.Label htmlFor="inputPassword5">Código Ubigeo</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
            </div>
            <div className="col-6">
              <Form.Label htmlFor="inputPassword5">Número de Celular</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancelar</Button>
          <Button variant="primary">Guardar</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}