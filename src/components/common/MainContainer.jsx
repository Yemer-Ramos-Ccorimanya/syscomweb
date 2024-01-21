import { Fragment } from "react"
import { HeaderHTML } from "./HeaderHTML"

export const MainContainer = ({children}) => {
  return (
    <Fragment>
      <HeaderHTML/>
      {children}
    </Fragment>
  )
}