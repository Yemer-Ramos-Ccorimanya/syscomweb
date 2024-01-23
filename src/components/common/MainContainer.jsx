import { Fragment } from "react"
import { HeaderHTML } from "./HeaderHTML"
import { Sidebar } from "./Sidebar"

export const MainContainer = ({ children, bsPadding }) => {
  const padding = bsPadding || "p-3"

  return (
    <Fragment>
      <HeaderHTML />
      <div className="d-flex">
        <Sidebar />
        <main className={"w-100 " + padding}>
          {children}
        </main>
      </div>
    </Fragment>
  )
}