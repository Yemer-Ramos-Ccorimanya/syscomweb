import { Route, Routes } from "react-router-dom"
import { ListadoSkus } from "../components/ListadoSku/ListadoSku"
import { BuscarSku } from "../components/inventarios/sku/BuscarSku"
export const SkuRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListadoSkus />} />
      <Route path="/sku/BuscarSkau" element={<BuscarSku />} />
    </Routes>
  )
}