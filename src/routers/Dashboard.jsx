import { Route, Routes } from "react-router-dom"
import { Home } from "../components/dashboard/Home"

export const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}