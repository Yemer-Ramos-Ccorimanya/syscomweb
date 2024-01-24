import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Login} from "../components/auth/Login"
import {Registro} from "../components/auth/Registro"
import {Dashboard} from "./Dashboard"
import {InventarioRoute} from "./InventarioRoute"
import {ClienteRoute} from "./clienteRoute"
import {AlquilerRoute} from "./AlquilerRoute"
import {PuntodeVentaRoute} from "./PuntodeVentaRoute"
import {PrivateRoute} from "./PrivateRoute"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/inventarios/*" element={
          <PrivateRoute>
            <InventarioRoute/>
          </PrivateRoute>
        }/>
        <Route path="/clientes/*" element={
          <PrivateRoute>
            <ClienteRoute/>
          </PrivateRoute>
        }/>
        <Route path="/alquileres/*" element={
          <PrivateRoute>
            <AlquilerRoute/>
          </PrivateRoute>
        }/>
        <Route path="/PuntodeVenta/*" element={
          <PrivateRoute>
            <PuntodeVentaRoute/>
          </PrivateRoute>
        }/>
        <Route path="/*" element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
    </BrowserRouter>
  )
}