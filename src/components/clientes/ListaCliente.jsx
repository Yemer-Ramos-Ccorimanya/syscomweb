import { Card, Form, InputGroup } from "react-bootstrap"
import { MainContainer } from "../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { getClientesHook } from "../../hooks/clientes"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useFormik } from "formik"

export const ListaCliente = () => {
  const [clientes, setClientes] = useState({})

  useEffect(() => {
    getClientesHook().then(result => setClientes(result));
  }, [])

  const formik = useFormik({
    initialValues: {
      query: ""
    },
    onSubmit: values => {
      getClientesHook(values.query).then(result => setClientes(result))
    }
  })


  return (
    <MainContainer>
      <h5>Clientes</h5>
      <Card >
        <Card.Body>
          <Form onSubmit={formik.handleSubmit} className="row row-cols-auto g-2">
            <div className="col-auto col-md-5">
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="query"
                  value={formik.values.query}
                  onChange={formik.handleChange}
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
            <table className="table mb-0">
              <thead>
                <tr className="text-uppercase">
                  <th>D.N.I</th>
                  <th>Razón Social</th>
                  <th>Dirección</th>
                  <th>Número</th>
                </tr>
              </thead>
              <tbody>
                {
                  clientes && clientes.results?.map(item => (
                    <tr key={item.id} className="text-uppercase">
                      <td>{item.dni}</td>
                      <td>
                        <Link to={`/clientes/${item.id}/editar`}>
                          {item.nombre_completo}
                        </Link>
                      </td>
                      <td>{item.address}</td>
                      <td>{item.celular}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </MainContainer>
  )
}