import { Route, Routes } from "react-router-dom"
import { ListaComprobantes } from "../components/comprobantes/ListaComprobantes"
import { CrearComprobante } from "../components/comprobantes/CrearComprobante"

export const ComprobanteRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaComprobantes />} />
      <Route path="/crear" element={<CrearComprobante />} />
      
    </Routes>
  )
}