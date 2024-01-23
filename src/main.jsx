import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './routers/AppRouter'
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css"
import "./styles.scss"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
