import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../components/auth/login.component"
import SignUp from "../components/auth/signup.component"
import { Dashboard } from "./Dashboard"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/*" element={
          <Dashboard />
        } />
      </Routes>
    </BrowserRouter>
  )
}