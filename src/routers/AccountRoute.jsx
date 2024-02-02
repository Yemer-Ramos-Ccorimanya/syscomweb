import { Route, Routes } from "react-router-dom"
import { ListaTerminalVenta } from "../components/account/ListaTerminalVenta"
import { TerminalVentaForm } from "../components/account/TerminalVentaForm"

export const AccountRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaTerminalVenta />} />
      <Route path="account/TerminalVentaForm" element={<TerminalVentaForm />} />
    </Routes>
  )
}