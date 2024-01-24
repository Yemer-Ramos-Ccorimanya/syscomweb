import { Route, Routes } from "react-router-dom"
import { ListadoVentas } from "../components/PuntodeVenta/ListadoVentas"
import { TerminalVenta } from "../components/PuntodeVenta/TerminalVenta"

export const PuntodeVentaRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListadoVentas />} />
      <Route path="/:id/terminal" element={<TerminalVenta />} />
    </Routes>
  )
}