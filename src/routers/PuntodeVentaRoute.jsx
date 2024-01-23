import { Route, Routes } from "react-router-dom"
import { ListadoVentas } from "../components/PuntodeVenta/ListadoVentas"

export const PuntodeVentaRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListadoVentas />} />
    </Routes>
  )
}