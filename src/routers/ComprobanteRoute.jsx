import { Route, Routes } from "react-router-dom"
import { ListaComprobantes } from "../components/comprobantes/ListaComprobantes"

export const ComprobanteRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaComprobantes />} />
    </Routes>
  )
}