import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Login} from "../components/auth/Login"
import { Registro } from "../components/auth/Registro"
import { Dashboard } from "./Dashboard"
import { InventarioRoute } from "./InventarioRoute"
import { ClienteRoute } from "./clienteRoute"
import { AlquilerRoute } from "./AlquilerRoute"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inventarios/*" element={<InventarioRoute />} />
        <Route path="/clientes/*" element={<ClienteRoute />} />
        <Route path="/alquileres/*" element={<AlquilerRoute />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}