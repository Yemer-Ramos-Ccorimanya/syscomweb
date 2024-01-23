import { Button, Form } from "react-bootstrap"
import styled from "styled-components"

const SidebarWrapper = styled.div`
  background: white;
  min-width: 150px;
  max-width: 250px;
  min-height: calc(100vh - 80px);
  padding: 15px;
`

export const SidebarAlquiler = () => {
  return (
    <SidebarWrapper className="shadow-sm">
      <Button variant="outline-primary" className="w-100 mb-2">
        <span className="text-uppercase">Agregar Producto</span>
      </Button>
      <Button variant="outline-success" className="w-100">
        <span className="text-uppercase">Agregar Cliente</span>
      </Button>
      <hr />
      <span className="d-block text-center text-uppercase fw-semibold">Formas de pago</span>
      <hr />
      <Form.Select className="text-uppercase">
        <option>Yape</option>
        <option>Contado</option>
        <option>Depósito</option>
      </Form.Select>
      <hr />
      <span className="d-block text-center text-uppercase fw-semibold">Notas</span>
      <hr />
      <Form.Control as="textarea" placeholder="Deja aqui tu comentario" />
      <hr />
      <Button variant="primary" size="lg" className="w-100 mb-2">
        <span className="text-uppercase">Registrar Pago</span>
      </Button>
    </SidebarWrapper>
  )
}