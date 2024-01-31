import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Form, InputGroup, ListGroup, Modal } from "react-bootstrap"

export const ExplorarSkuByAlmacen = (props) => {
  const { show, handleClose } = props
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-1" />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Buscar códigos de referencia"
          />
        </InputGroup>
        <ListGroup variant="flush" className="fs-5">
          <ListGroup.Item action>Cras justo odio</ListGroup.Item>
          <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </Modal.Body>
    </Modal>
  )
}