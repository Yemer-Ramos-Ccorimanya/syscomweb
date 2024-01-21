import { Route, Routes } from "react-router-dom"
import { ListaProductos } from "../components/inventarios/productos/ListaProductos"

export const InventarioRoute = () => {
  return (
    <Routes>
      <Route path="/productos" element={<ListaProductos />} />
    </Routes>
  )
}