import { Route, Routes } from "react-router-dom"
import { ListaTerminalVenta } from "../components/account/ListaTerminalVenta"
import { TerminalVentaForm } from "../components/account/TerminalVentaForm"
import { FormEmpresa, ListarEmpresas } from "../components/account/empresas"

export const AccountRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaTerminalVenta />} />
      <Route path="account/TerminalVentaForm" element={<TerminalVentaForm />} />
      <Route path="/empresas" element={<ListarEmpresas />} />
      <Route path="/empresas/agregar" element={<FormEmpresa />} />
      <Route path="/empresas/:empresaId/editar" element={<FormEmpresa />} />
    </Routes>
  )
}