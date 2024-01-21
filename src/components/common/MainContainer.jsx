import { Fragment } from "react"
import { HeaderHTML } from "./HeaderHTML"
import { Sidebar } from "./Sidebar"

export const MainContainer = ({ children }) => {
  return (
    <Fragment>
      <HeaderHTML />
      <div className="d-flex">
        <Sidebar />
        <main>
          {children}
        </main>
      </div>
    </Fragment>
  )
}