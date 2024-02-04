import { Route, Routes } from "react-router-dom"
import { ListaComprobantes } from "../components/comprobantes/ListaComprobantes"
import { CrearComprobante } from "../components/comprobantes/CrearComprobante"
import {SerieComprobantes} from "../components/comprobantes/SerieComprobantes"

export const ComprobanteRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListaComprobantes />} />
      <Route path="/crear" element={<CrearComprobante />} />
      <Route path="/SerieComprobantes" element={<SerieComprobantes/>} />
    </Routes>
  )
}