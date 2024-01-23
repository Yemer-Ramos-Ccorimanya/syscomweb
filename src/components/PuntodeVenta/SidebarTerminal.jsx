import { Button, Form } from "react-bootstrap"
import styled from "styled-components"

const SidebarWrapper = styled.div`
  background: white;
  min-width: 150px;
  max-width: 250px;
  min-height: calc(100vh - 80px);
  padding: 15px;
`

export const SidebarTerminal = () => {
  return (
    <SidebarWrapper className="shadow-sm">
      <Button variant="outline-danger" className="w-100 mb-2">
        <span className="text-uppercase">Cerrar Turno</span>
      </Button>
      <Button variant="outline-success" className="w-100 mb-2">
        <span className="text-uppercase">Agregar Producto</span>
      </Button>
      <Button variant="outline-secondary" className="w-100">
        <span className="text-uppercase">Nuevo Alquiler</span>
      </Button>
      <hr />
      <span className="d-block text-center text-uppercase fw-semibold">Movimientos de Caja</span>
      <hr />
      <Button variant="outline-primary" className="w-100 mb-2">
        <span className="text-uppercase">Registrar Entrada</span>
      </Button>
      <Button variant="outline-danger" className="w-100 mb-2">
        <span className="text-uppercase">Registrar Salida</span>
      </Button>
      <Button variant="outline-secondary" className="w-100">
        <span className="text-uppercase">Lista de Operaciones</span>
      </Button>
      <hr />
      <span className="d-block text-center text-uppercase fw-semibold">Reportes</span>
      <hr />
      <Button variant="primary" size="lg" className="w-100 mb-2">
        <span className="text-uppercase">Resumen Caja</span>
      </Button>
    </SidebarWrapper>
  )
}