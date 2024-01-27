import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Registro } from "../components/auth/Registro"
import { Dashboard } from "./Dashboard"
import { InventarioRoute } from "./InventarioRoute"
import { AlquilerRoute } from "./AlquilerRoute"
import { PuntodeVentaRoute } from "./PuntodeVentaRoute"
import { PrivateRoute } from "./PrivateRoute"
import { UserProvider } from "../context/UserProvider"
import { ClientesRoute } from "./ClientesRoute"
import { ListaAlmacen } from "../components/Almacen/ListaAlmacen"

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
          <Route path="/PuntodeVenta/*" element={
            <PrivateRoute>
              <PuntodeVentaRoute />
            </PrivateRoute>
          } />
          <Route path="/Almacen/*" element={
            <PrivateRoute>
              <ListaAlmacen />
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