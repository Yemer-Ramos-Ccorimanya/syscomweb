import { Route, Routes } from "react-router-dom"
import { ListadoVentas } from "../components/terminales/ListadoVentas"
import { TerminalVenta } from "../components/terminales/TerminalVenta"

export const TerminalRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListadoVentas />} />
      <Route path="/:id/caja" element={<TerminalVenta />} />
    </Routes>
  )
}