import { Card, Form, Button, InputGroup } from "react-bootstrap"
import { MainContainer } from "../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { getClientesHook } from "../../hooks/clientes"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
import Modal from 'react-bootstrap/Modal';

export const ListaCliente = () => {
  const [clientes, setClientes] = useState({})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <div>
              <>
                <Button variant="primary" onClick={handleShow}>
                  Actualizar Cliente
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Editar cliente</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="row mb-3">
                      <div className="col-6">
                        <Form.Label htmlFor="inputPassword5">Tipo documento</Form.Label>
                        <Form.Control
                          type="text"
                          id="inputPassword5"
                          aria-describedby="passwordHelpBlock"
                        />
                      </div>
                      <div className="col-6">
                        <Form.Label htmlFor="inputPassword5">D.N.I/R.U.C</Form.Label>
                        <Form.Control
                          type="text"
                          id="inputPassword5"
                          aria-describedby="passwordHelpBlock"
                        />
                      </div>
                    </div>
                    <Form.Label htmlFor="inputPassword5">Nombres Completo / Razón Social</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                    />
                    <Form.Label htmlFor="inputPassword5">Dirección</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                    />
                    <div className="row mb-3">
                      <div className="col-6">
                        <Form.Label htmlFor="inputPassword5">Código Ubigeo</Form.Label>
                        <Form.Control
                          type="text"
                          id="inputPassword5"
                          aria-describedby="passwordHelpBlock"
                        />
                      </div>
                      <div className="col-6">
                        <Form.Label htmlFor="inputPassword5">Número de Celular</Form.Label>
                        <Form.Control
                          type="text"
                          id="inputPassword5"
                          aria-describedby="passwordHelpBlock"
                        />
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="primary">Guardar</Button>
                  </Modal.Footer>
                </Modal>
              </>

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