import { Card, Form, InputGroup } from "react-bootstrap"
import { MainContainer } from "../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export const ListaTerminalVenta = () => {
  return (
    <MainContainer>
      <div className="m-3 " >
        <h5>Terminales venta</h5>
      </div>

      <Card className="m-3">
        <Card.Body>
          <Form className="row row-cols-auto g-2">
            <div className="col-6">
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
              <Link to="account/TerminalVentaForm" className="btn btn-success" variant="success">
                <span>Nuevo Terminal</span>
              </Link>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-uppercase">
                  <th>Terminal</th>
                  <th>Sucursal</th>
                  <th>Estado</th>
                </tr>
                <tr>
                  <th>CAJA 01</th>
                  <th>Empresas de gastronomia S.A.C.</th>
                  <th>habilitado</th>
                </tr>
              </thead>
            </table>
          </div>
        </Card.Body>
      </Card>
    </MainContainer>
  )
}
