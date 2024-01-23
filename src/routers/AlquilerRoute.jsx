import { Route, Routes } from "react-router-dom"
import { ListaAlquileres } from "../components/alquileres/ListaAlquileres"
import { AlquilerForm } from "../components/alquileres/AlquilerForm"

export const AlquilerRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaAlquileres />} />
      <Route path="/agregar" element={<AlquilerForm />} />
    </Routes>
  )
}