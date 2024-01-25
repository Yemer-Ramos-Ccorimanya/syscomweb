import { Card, Form, InputGroup } from "react-bootstrap"
import { MainContainer } from "../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export const ListaCliente = () => {
  return (
    <MainContainer>
      <h5>Clientes</h5>
      <Card >
        <Card.Body>
          <Form className="row row-cols-auto g-2">
            <div className="col-auto col-md-5">
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Nombres Completo / Razón Social"
                />
              </InputGroup>
            </div>
            <div className="col-auto">
              <Link to="/clientes/agregar" className="btn btn-success" variant="success">
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                <span className="text-uppercase">Nuevo Cliente</span>
              </Link>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-uppercase">
                  <th>D.N.I</th>
                  <th>Razón Social</th>
                  <th>Dirección</th>
                  <th>Número</th>
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