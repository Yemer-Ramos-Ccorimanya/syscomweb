import { Card, Form, InputGroup } from "react-bootstrap"
import { MainContainer } from "../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import DateRangePicker from "@wojtekmaj/react-daterange-picker"
import { useState } from "react"

export const ListaAlquileres = () => {
  const [value, onChange] = useState([new Date(), new Date()])

  return (
    <MainContainer>
      <h5>Alquileres</h5>
      <Card>
        <Card.Body>
          <Form className="row row-cols-auto g-2">
            <div className="col-auto">
              <Form.Select className="text-uppercase">
                <option>Alquiler</option>
                <option>Reservaciones</option>
              </Form.Select>
            </div>
            <div className="col-auto">
              <DateRangePicker onChange={onChange} value={value} />
            </div>
            <div className="col-auto">
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Nombre"
                />
              </InputGroup>
            </div>
            <div className="col-auto">
              <Link to="/alquileres/agregar" className="btn btn-success" variant="success">
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                <span>Nuevo Alquiler</span>
              </Link>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-uppercase">
                  <th>Nro. Contrato</th>
                  <th>Cliente</th>
                  <th>Monto</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>

    </MainContainer>
  )
}