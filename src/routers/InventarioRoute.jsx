import { Route, Routes } from "react-router-dom"
import { ListaProductos } from "../components/inventarios/productos/ListaProductos"
import { ProductoForm } from "../components/inventarios/productos/ProductoForm"
import { AgregarNuevoSku } from "../components/inventarios/productos/AgregarNuevoSku"
import { ListaCategorias } from "../components/inventarios/productos/ListaCategorias"
import { ListaSubCategorias } from "../components/inventarios/productos/Listasubcategorias"
import { ListaInventarios } from "../components/inventarios/Listainventarios"

import {ListadoSkus} from "../components/ListadoSku/ListadoSku"

import { AgregarStock } from "../components/inventarios/productos/AgregarStock"
import { DescontarStock } from "../components/inventarios/productos/DescontarStock"


export const InventarioRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaInventarios />} />
      <Route path="/productos/agregarstock" element={<AgregarStock />} />
      <Route path="/productos/descontarstock" element={<DescontarStock />} />
      <Route path="/productos" element={<ListaProductos />} />
      <Route path="/productos/agregar" element={<ProductoForm />} />

      <Route path="/productos/agregarNuevoSku" element={<AgregarNuevoSku/>} />
      <Route path="/productos/categorias" element={<ListaCategorias />} />
      <Route path="/productos/subcategorias" element={<ListaSubcategorias />} />
      <Route path="/ListadoSku/ListadoSku" element={<ListadoSkus />} />

      <Route path="/productos/:productoId/agregar" element={<ProductoForm />} />
      <Route path="/productos/categorias" element={<ListaCategorias />} />
      <Route path="/productos/subcategorias" element={<ListaSubCategorias />} />


    </Routes>
  )
}