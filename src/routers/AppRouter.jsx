import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../components/auth/login.component"
import SignUp from "../components/auth/signup.component"
import { Dashboard } from "./Dashboard"
import { InventarioRoute } from "./InventarioRoute"
import { ClienteRoute } from "./clienteRoute"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/inventarios/*" element={<InventarioRoute />} />
        <Route path="/*" element={<Dashboard />} />
        
        <Route path="/clientes/*" element={<ClienteRoute />} />

      </Routes>
    </BrowserRouter>
  )
}