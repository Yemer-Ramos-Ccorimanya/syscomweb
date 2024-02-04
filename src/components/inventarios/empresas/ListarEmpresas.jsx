import { Card, Form, Button, InputGroup, Pagination } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEdit, faMagnifyingGlass, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { getUserEmpresasHook } from "../../../hooks/account"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
import { MainContainer } from "../../common/MainContainer"

export const ListarEmpresas = () => {
  const [empresas, setEmpresas] = useState([])
  const [empresaActual, setEmpresaActual] = useState({})

  useEffect(() => {
    getUserEmpresasHook().then(result => {
      console.log(result)
      setEmpresas(result)
    })
  }, [])

  const formik = useFormik({
    initialValues: {
      query: ""
    },
    onSubmit: values => {
      getUserEmpresasHook(values.query).then(result => setEmpresas(result))
    }
  })

  

  return (
    <MainContainer>
      <Card>
        <Card.Header>
          <span className="text-uppercase fw-semibold">Empresas</span>
        </Card.Header>
        <Card.Body>
          <Form className="row row-cols-auto g-2">
            <div className="col-4">
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Busqueda"
                  name="query"
                  onChange={formik.handleChange}
                  value={formik.values.query}
                />
              </InputGroup>
            </div>
            <div className="col-3">
              <Link to="/inventarios/empresas/agregar">
                <Button className="text-uppercase" variant="success">Nueva empresa</Button>
              </Link>
            </div>
          </Form>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-uppercase">
                  <th>Ruc</th>
                  <th>Empresa</th>
                  <th>Dirección</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  empresas && empresas?.map(item => {
                    console.log(item); // Imprimir el objeto item en la consola
                    return (
                      <tr key={item.id}>
                        <td>{item.ruc}</td>
                        <td>{item.rzn_social}</td>
                        <td>{item.direccion}</td>
                        <td>
                          <div className="d-flex justify-content-end">
                            <Button variant={"secondary"} size={"sm"} className="me-2">
                              <FontAwesomeIcon icon={faEdit} />
                            </Button>
                            <Button variant={"danger"} size={"sm"}>
                              <FontAwesomeIcon icon={faTrash} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </MainContainer>
  )
}