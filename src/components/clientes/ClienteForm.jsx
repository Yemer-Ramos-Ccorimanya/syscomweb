import { Button, Card, Form, InputGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark, faFloppyDisk, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { MainContainer } from "../common/MainContainer"
import { useNavigate, useParams } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"
import { cssValidation } from "../common/css.validation"
import { createClienteHook, getClienteHook, updateClienteHook } from "../../hooks/clientes.hook"
import { toastSuccess } from "../common/helpers"
import { useEffect } from "react"

const ClienteSchema = Yup.object().shape({
  tipo_doc: Yup.string().required("Campo requerido"),
  dni: Yup.string().required("Campo requerido"),
  nombre_completo: Yup.string().required("Campo requerido"),
  address: Yup.string().required("Campo requerido"),
  cod_ubigeo: Yup.string(),
  celular: Yup.string(),
})

export const ClienteForm = () => {
  const { clienteId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (clienteId) {
      getClienteHook(clienteId).then(result => {
        formik.setValues({
          tipo_doc: result.tipo_doc,
          dni: result.dni,
          nombre_completo: result.nombre_completo,
          address: result.address,
          cod_ubigeo: result.cod_ubigeo,
          celular: result.celular,
        })
      })
    }
  }, [clienteId])

  const formik = useFormik({
    initialValues: {
      tipo_doc: "",
      dni: "",
      nombre_completo: "",
      address: "",
      cod_ubigeo: "",
      celular: "",
    },
    validationSchema: ClienteSchema,
    onSubmit: (values, { setValues }) => {
      if (!clienteId) {
        createClienteHook(values).then(result => {
          toastSuccess("Cliente Registrado!")
          navigate(`/clientes/${result.id}/editar`)
        })
      } else {
        updateClienteHook(clienteId, values)
          .then(result => {
            setValues({
              tipo_doc: result.tipo_doc,
              dni: result.dni,
              nombre_completo: result.nombre_completo,
              address: result.address,
              cod_ubigeo: result.cod_ubigeo,
              celular: result.celular,
            })
            toastSuccess("Cliente Actualizado!")
            navigate(`/clientes/${result.id}/editar`)
          })
      }
    },
  })

  const handleCancel = () => {
    navigate("/clientes")
  }

  return (
    <MainContainer>
      <div className="row">
        <div className="col-11 offset-1">
          <h5>Añadir nuevo cliente</h5>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-2 offset-1">
          <h6>Información Cliente</h6>
          <p>Por favor, ingrese todos los datos de sus clientes.</p>
        </div>
        <div className="col-8">
          <Card>
            <Card.Body>
              <Form id="f_cliente" onSubmit={formik.handleSubmit}>
                <div className="row mb-3">
                  <div className="col-6">
                    <Form.Group controlId="dni">
                      <Form.Label>Tipo documento</Form.Label>
                      <Form.Select
                        name="tipo_doc"
                        value={formik.values.tipo_doc}
                        onChange={formik.handleChange}
                        className={(formik.errors.tipo_doc && formik.touched.tipo_doc)
                          && cssValidation.isInvalid}>
                        <option value="0:SIN DEFINIR">0 - SIN DEFINIR</option>
                        <option value="1:D.N.I">1 - D.N.I</option>
                        <option value="6:R.U.C">6 - R.U.C</option>
                        <option value="7:PASAPORTE">7 - PASAPORTE</option>
                      </Form.Select>
                      <div className={cssValidation.invalidFeedback}>{formik.errors.tipo_doc}</div>
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Label>D.N.I/R.U.C</Form.Label>
                    <InputGroup>
                      <Form.Control
                        placeholder="Documento de Identidad"
                        name="dni"
                        value={formik.values.dni}
                        onChange={formik.handleChange}
                        className={(formik.errors.dni && formik.touched.dni)
                          && cssValidation.isInvalid}
                      />
                      <Button variant="success">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                      </Button>
                      <div className={cssValidation.invalidFeedback}>{formik.errors.dni}</div>
                    </InputGroup>
                  </div>
                </div>
                <Form.Group controlId="nombres" className="mb-3">
                  <Form.Label>Nombres Completo / Razón Social</Form.Label>
                  <Form.Control type="text"
                    name="nombre_completo"
                    value={formik.values.nombre_completo}
                    onChange={formik.handleChange}
                    className={(formik.errors.nombre_completo && formik.touched.nombre_completo)
                      && cssValidation.isInvalid} />
                  <div className={cssValidation.invalidFeedback}>{formik.errors.nombre_completo}</div>
                </Form.Group>
                <Form.Group controlId="direccion" className="mb-3">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control type="text"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    className={(formik.errors.address && formik.touched.address)
                      && cssValidation.isInvalid} />
                  <div className={cssValidation.invalidFeedback}>{formik.errors.address}</div>
                </Form.Group>
                <div className="row mb-3">
                  <div className="col-6">
                    <Form.Group controlId="celular">
                      <Form.Label>Código Ubigeo</Form.Label>
                      <Form.Control type="text"
                        name="cod_ubigeo"
                        value={formik.values.cod_ubigeo}
                        onChange={formik.handleChange}
                        className={(formik.errors.cod_ubigeo && formik.touched.cod_ubigeo)
                          && cssValidation.isInvalid} />
                      <div className={cssValidation.invalidFeedback}>{formik.errors.cod_ubigeo}</div>
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="dni">
                      <Form.Label>Número de Celular</Form.Label>
                      <Form.Control type="text"
                        name="celular"
                        value={formik.values.celular}
                        onChange={formik.handleChange}
                        className={(formik.errors.celular && formik.touched.celular)
                          && cssValidation.isInvalid} />
                      <div className={cssValidation.invalidFeedback}>{formik.errors.celular}</div>
                    </Form.Group>
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-11">
          <div className="d-flex justify-content-end">
            <Button size="lg" onClick={handleCancel} variant="secondary" className="me-2">
              <FontAwesomeIcon icon={faCircleXmark} className="me-1" />
              <span className="text-uppercase">Cancelar</span>
            </Button>
            <Button type="submit" form="f_cliente" size="lg" variant="primary">
              <FontAwesomeIcon icon={faFloppyDisk} className="me-1" />
              <span className="text-uppercase">Guardar</span>
            </Button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
