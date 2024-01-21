import { Fragment } from "react"
import { HeaderHTML } from "./HeaderHTML"
import { Sidebar } from "./Sidebar"

export const MainContainer = ({ children }) => {
  return (
    <Fragment>
      <HeaderHTML />
      <div className="d-flex">
        <Sidebar />
        <main className="w-100 p-3">
          {children}
        </main>
      </div>
    </Fragment>
  )
}