import { Route, Routes } from "react-router-dom"
import { ListaProductos } from "../components/inventarios/productos/ListaProductos"
import { ProductoForm } from "../components/inventarios/productos/ProductoForm"
import { AgregarNuevoSku } from "../components/inventarios/sku/AgregarNuevoSku"
import { ListaCategorias } from "../components/inventarios/productos/ListaCategorias"
import { ListaSubCategorias } from "../components/inventarios/productos/Listasubcategorias"
import { GestionInventarios } from "../components/inventarios/gestion/GestionInventarios"
import { AgregarStock } from "../components/inventarios/gestion/AgregarStock"
import { DescontarStock } from "../components/inventarios/gestion/DescontarStock"
import { ListadoSku } from "../components/inventarios/sku/ListadoSku"
import { BuscarSku } from "../components/inventarios/sku/BuscarSku"
import { ListaAlmacen } from "../components/inventarios/almacenes/ListaAlmacen"
import { EditarAlmacen } from "../components/inventarios/almacenes/EditarAlmacen"

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
      <Route path="/lista-sku" element={<ListadoSku />} />
      <Route path="/sku/agregar" element={<AgregarNuevoSku />} />
      <Route path="/sku/Buscar" element={<BuscarSku />} />
      <Route path="/almacenes" element={<ListaAlmacen />} />
      <Route path="/almacenes/agregar" element={<EditarAlmacen />} />
    </Routes>
  )
}