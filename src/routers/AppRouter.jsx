import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Registro } from "../components/auth/Registro"
import { Dashboard } from "./Dashboard"
import { InventarioRoute } from "./InventarioRoute"
import { AlquilerRoute } from "./AlquilerRoute"
import { TerminalRoute } from "./TerminalRoute"
import { PrivateRoute } from "./PrivateRoute"
import { UserProvider } from "../context/UserProvider"
import { ClientesRoute } from "./ClientesRoute"
import { ComprobanteRoute } from "./ComprobanteRoute"
import { AccountRoute } from "./AccountRoute"

export const AppRouter = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/inventarios/*" element={
            <PrivateRoute>
              <InventarioRoute />
            </PrivateRoute>
          } />
          <Route path="/clientes/*" element={
            <PrivateRoute>
              <ClientesRoute />
            </PrivateRoute>
          } />
          <Route path="/alquileres/*" element={
            <PrivateRoute>
              <AlquilerRoute />
            </PrivateRoute>
          } />
          <Route path="/terminales/*" element={
            <PrivateRoute>
              <TerminalRoute />
            </PrivateRoute>
          } />
          <Route path="/comprobantes/*" element={
            <PrivateRoute>
              <ComprobanteRoute />
            </PrivateRoute>
          } />
          <Route path="/account/*" element={
            <PrivateRoute>
              <AccountRoute />
            </PrivateRoute>
          } />
          <Route path="/*" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}