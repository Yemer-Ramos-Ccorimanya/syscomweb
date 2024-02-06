import { Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { getUserEmpresasHook } from "../../../hooks/account"
import { useEffect, useState } from "react"
import { MainContainer } from "../../common/MainContainer"

export const ListarEmpresas = () => {
  const [empresas, setEmpresas] = useState([])

  useEffect(() => {
    getUserEmpresasHook().then(result => {
      console.log(result)
      setEmpresas(result)
    })
  }, [])

  return (
    <MainContainer>
      <Card>
        <Card.Header>
          <span className="text-uppercase fw-semibold">Empresas</span>
        </Card.Header>
        <Card.Body>
          <Link to="/account/empresas/agregar">
            <Button className="text-uppercase" variant="success">Nueva empresa</Button>
          </Link>
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
                    return (
                      <tr key={item.id}>
                        <td>{item.ruc}</td>
                        <td>
                          <Link to={`/account/empresas/${item.id}/editar`}>
                          {item.rzn_social}
                          </Link>
                        </td>
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
      {/** DEBUG */}
      <div className="alert alert-warning mt-2">
        <span className="fw-semibold">Configurar Stock</span>
        <pre>
          {JSON.stringify(empresas, null, 2)}
        </pre>
      </div>
    </MainContainer>
  )
}