import { Route, Routes } from "react-router-dom"
import { ListaProductos } from "../components/inventarios/productos/ListaProductos"
import { ProductoForm } from "../components/inventarios/productos/ProductoForm"
import { ListaCategorias } from "../components/inventarios/productos/ListaCategorias"
import { ListaSubCategorias } from "../components/inventarios/productos/Listasubcategorias"
import { GestionInventarios } from "../components/inventarios/gestion/GestionInventarios"
import { AgregarStock } from "../components/inventarios/gestion/AgregarStock"
import { DescontarStock } from "../components/inventarios/gestion/DescontarStock"
import { ListadoSku } from "../components/inventarios/sku/ListadoSku"
import { ListaAlmacen } from "../components/inventarios/almacenes/ListaAlmacen"
import { FormSku } from "../components/inventarios/sku/FormSku"

export const InventarioRoute = () => {
  return (
    <Routes>
      <Route path="/productos" element={<ListaProductos />} />
      <Route path="/productos/agregar" element={<ProductoForm />} />
      <Route path="/productos/categorias" element={<ListaCategorias />} />
      <Route path="/productos/subcategorias" element={<ListaSubCategorias />} />
      <Route path="/gestion" element={<GestionInventarios />} />
      <Route path="/gestion/agregarstock" element={<AgregarStock />} />
      <Route path="/gestion/descontarstock" element={<DescontarStock />} />
      <Route path="/codigos-referencia" element={<ListadoSku />} />
      <Route path="/codigos-referencia/agregar" element={<FormSku />} />
      <Route path="/codigos-referencia/:id/editar" element={<FormSku />} />
      <Route path="/almacenes" element={<ListaAlmacen />} />
    </Routes>
  )
}