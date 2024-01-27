import { Route, Routes } from "react-router-dom"
import { ListaProductos } from "../components/inventarios/productos/ListaProductos"
import { ProductoForm } from "../components/inventarios/productos/ProductoForm"
import { AgregarNuevoSku } from "../components/inventarios/productos/AgregarNuevoSku"
import { ListaCategorias } from "../components/inventarios/productos/ListaCategorias"
import { ListaSubcategorias } from "../components/inventarios/productos/Listasubcategorias"
import { ListaInventarios } from "../components/inventarios/Listainventarios"
import {ListadoSkus} from "../components/ListadoSku/ListadoSku"


export const InventarioRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaInventarios />} />
      <Route path="/productos" element={<ListaProductos />} />
      <Route path="/productos/agregar" element={<ProductoForm />} />
      <Route path="/productos/agregarNuevoSku" element={<AgregarNuevoSku/>} />
      <Route path="/productos/categorias" element={<ListaCategorias />} />
      <Route path="/productos/subcategorias" element={<ListaSubcategorias />} />
      <Route path="/ListadoSku/ListadoSku" element={<ListadoSkus />} />
    </Routes>
  )
}