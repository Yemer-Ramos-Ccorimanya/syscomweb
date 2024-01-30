import { Button, Form, Modal } from "react-bootstrap"
import { formTypeModal } from "../../../config"
import { createCategoriaHook, updateCategoriaHook } from "../../../hooks/inventarios"
import { useFormik } from "formik"
import * as Yup from "yup"
import { cssValidation } from "../../common/css.validation"

export const AgregarModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Actualizar Cliente
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
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
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary">Guardar</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}