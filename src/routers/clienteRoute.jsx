import { Route, Routes } from "react-router-dom"
import { ListaCliente } from "../components/cliente/ListaCliente"
import { ClienteForm } from "../components/cliente/ClienteForm"

export const clienteRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaCliente />} />
      <Route path="/" element={<ClienteForm />} />
    </Routes>
  )
}