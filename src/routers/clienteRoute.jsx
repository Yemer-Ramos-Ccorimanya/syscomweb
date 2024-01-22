import { Route, Routes } from "react-router-dom"
import { ListaCliente } from "../components/clientes/ListaCliente"
import { ClienteForm } from "../components/clientes/ClienteForm"

export const ClienteRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaCliente />} />
      <Route path="/agregar" element={<ClienteForm />} />
    </Routes>
  )
}