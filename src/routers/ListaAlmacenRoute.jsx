import { Route, Routes } from "react-router-dom"
import { ListaAlmacen } from "../components/Almacen/ListaAlmacen"
import { EditarAlmacen } from "../components/Almacen/EditarAlmacen"


export const ListaAlmacenRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaAlmacen/>} />
      <Route path="/" element={<EditarAlmacen/>} />
    </Routes>
  )
}