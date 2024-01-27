import { Route, Routes } from "react-router-dom"
import { ListadoSkus } from "../components/ListadoSku/ListadoSku"

export const SkuRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ListadoSkus />} />
    </Routes>
  )
}