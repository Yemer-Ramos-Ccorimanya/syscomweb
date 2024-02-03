import { Button, Card, Form, InputGroup } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark, faFloppyDisk, faShuffle } from "@fortawesome/free-solid-svg-icons"
import * as Yup from "yup"
import { useFormik } from "formik"
import { cssValidation } from "../../common/css.validation"
import { useNavigate, useParams } from "react-router-dom"
import { Fragment, useEffect, useState } from "react"
import { createCatalogoSkuAlmacenHook, createCatalogoSkuHook, getCatalogoSkuHook, getCatalogoSkusAlmacenHook, updateCatalogoSkuHook } from "../../../hooks/inventarios"
import { toastSuccess } from "../../common/helpers"

const SkuSchema = Yup.object().shape({
  nombre: Yup.string().required('Campo requerido'),
  codigo_sku: Yup.string().required('Campo requerido'),
  unidad_medida: Yup.string().required('Campo requerido'),
  descripcion: Yup.string(),
})

export const FormSku = () => {
  const { skuId } = useParams()
  const navigate = useNavigate()
  const [configurarStock, setConfigurarStock] = useState([])

  useEffect(() => {
    if (skuId) {
      getCatalogoSkuHook(skuId).then(result => {
        formik.setValues({
          nombre: result.nombre,
          codigo_sku: result.codigo_sku,
          unidad_medida: result.unidad_medida,
          descripcion: result.descripcion,
        })
      })
      getCatalogoSkusAlmacenHook(skuId).then(result => setConfigurarStock(result))
    }
  }, [skuId])

  const formik = useFormik({
    initialValues: {
      nombre: '',
      codigo_sku: '',
      unidad_medida: 'NIU:UNIDAD',
      descripcion: '',
    },
    validationSchema: SkuSchema,
    onSubmit: (values, { setValues }) => {
      if (!skuId) {
        createCatalogoSkuHook(values).then(result => {
          toastSuccess("Código de referencia registrado!")
          navigate(`/inventarios/codigos-referencia/${result.id}/editar`)
        })
      } else {
        updateCatalogoSkuHook(skuId, values)
          .then(result => {
            setValues({
              nombre: result.nombre,
              codigo_sku: result.codigo_sku,
              unidad_medida: result.unidad_medida,
              descripcion: result.descripcion,
            })
            toastSuccess("Código de referencia actualizado!")
            navigate("/inventarios/codigos-referencia")
          })
      }
    },
  })

  const generarCodigoSKU = () => {
    // Obtener la fecha actual
    const fecha = new Date();
    const anio = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0')
    const dia = fecha.getDate().toString().padStart(2, '0')
    // Generar parte aleatoria del SKU (en este caso, 4 caracteres alfanuméricos)
    const parteAleatoria = Math.random().toString(36).substring(2, 8).toUpperCase()
    // Construir el código SKU
    const codigoSKU = `${anio}${mes}${dia}${parteAleatoria}`
    formik.setFieldValue('codigo_sku', codigoSKU)
  }

  const handleSwitchChange = (almacenId) => {
    setConfigurarStock((prevConfigurarStock) =>
      prevConfigurarStock.map((configStock) =>
        configStock.almacenId === almacenId ? { ...configStock, deshabilitado: !configStock.deshabilitado } : configStock
      )
    )
  }

  const handleInputChange = (almacenId, inputName, value) => {
    setConfigurarStock((prevConfigurarStock) =>
      prevConfigurarStock.map((configStock) =>
        configStock.almacenId === almacenId ? { ...configStock, [inputName]: value } : configStock
      )
    )
  }

  const guardarConfigurarStock = () => {
    const configFilter = configurarStock.filter(item => item.deshabilitado === false)
    const data = configFilter.map(item => {
      return {
        almacen: item.almacenId,
        costo_unitario: item.costoUnitario,
        stock_minimo: item.stockMinimo,
        punto_reposicion: item.puntoReposicion,
      }
    })
    createCatalogoSkuAlmacenHook(skuId, data).then(() => {
      navigate("/inventarios/codigos-referencia")
      toastSuccess("Configuración stock actualizada!")
    })
  }

  return (
    <MainContainer>
      <div className="row">
        <div className="col-11 offset-1">
          <h5>Nuevo Código de Referencia</h5>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-2 offset-1">
          <h6>Datos básicos</h6>
          <p>Asocia tu código de referencia con un almacén para poder realizar tu gestión de inventarios.</p>
        </div>
        <div className="col-8">
          <Card>
            <Card.Body>
              <Form id="f_sku" onSubmit={formik.handleSubmit}>
                <div className="row mb-3">
                  <div className="col-12">
                    <Form.Group controlId="nombre">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text"
                        name="nombre"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        className={(formik.errors.nombre && formik.touched.nombre)
                          && cssValidation.isInvalid}
                        placeholder="Ingrese el nombre del código de referencia" />
                      <div className={cssValidation.invalidFeedback}>{formik.errors.nombre}</div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <Form.Group>
                      <Form.Label>Código de Rerencia</Form.Label>
                      <InputGroup className="mb-3">
                        <Button onClick={generarCodigoSKU} variant="success" id="button-addon1">
                          <FontAwesomeIcon icon={faShuffle} className="me-1" />
                          <span className="text-uppercase">Generar</span>
                        </Button>
                        <Form.Control
                          type="text"
                          name="codigo_sku"
                          value={formik.values.codigo_sku}
                          onChange={formik.handleChange}
                          className={(formik.errors.codigo_sku && formik.touched.codigo_sku)
                            && cssValidation.isInvalid}
                        />
                        <div className={cssValidation.invalidFeedback}>{formik.errors.codigo_sku}</div>
                      </InputGroup>
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="tipoUnidad">
                      <Form.Label>Tipo de Unidad de Médida</Form.Label>
                      <Form.Select
                        name="unidad_medida"
                        value={formik.values.unidad_medida}
                        onChange={formik.handleChange}
                        className={(formik.errors.unidad_medida && formik.touched.unidad_medida)
                          && cssValidation.isInvalid}>
                        <option value="BX:CAJA">CAJA</option>
                        <option value="NIU:UNIDAD">UNIDAD (BIENES)</option>
                        <option value="ZZ:UNIDAD">UNIDAD (SERVICIOS)</option>
                        <option value="4A:BOBINAS">BOBINAS</option>
                        <option value="BJ:BALDE">BALDE</option>
                        <option value="BLL:BARRILES">BARRILES</option>
                        <option value="BG:BOLSA">BOLSA</option>
                        <option value="BO:BOTELLAS">BOTELLAS</option>
                        <option value="CT:CARTONES">CARTONES</option>
                        <option value="CY:CILINDRO">CILINDRO</option>
                        <option value="CJ:CONOS">CONOS</option>
                        <option value="DZN:DOCENA">DOCENA</option>
                        <option value="BE:FARDO">FARDO</option>
                        <option value="GLI:GALÓN INGLES (4,545956L)">GALÓN INGLES (4,545956L)</option>
                        <option value="GRM:GRAMO">GRAMO</option>
                        <option value="LEF:HOJA">HOJA</option>
                        <option value="SET:JUEGO">JUEGO</option>
                        <option value="KGM:KILOGRAMO">KILOGRAMO</option>
                        <option value="KT:KIT">KIT</option>
                        <option value="CA:LATAS">LATAS</option>
                        <option value="LBR:LIBRAS">LIBRAS</option>
                        <option value="LTR:LITRO">LITRO</option>
                        <option value="MTR:METRO">METRO</option>
                        <option value="MGM:MILIGRAMOS">MILIGRAMOS</option>
                        <option value="MLT:MILILITRO">MILILITRO</option>
                        <option value="MMT:MILIMETRO">MILIMETRO</option>
                        <option value="MIL:MILLARES">MILLARES</option>
                        <option value="ONZ:ONZAS">ONZAS</option>
                        <option value="PF:PALETAS">PALETAS</option>
                        <option value="PK:PAQUETE">PAQUETE</option>
                        <option value="PR:PAR">PAR</option>
                        <option value="C62:PIEZAS">PIEZAS</option>
                        <option value="PG:PLACAS">PLACAS</option>
                        <option value="ST:PLIEGO">PLIEGO</option>
                        <option value="INH:PULGADAS">PULGADAS</option>
                        <option value="TU:TUBOS">TUBOS</option>
                        <option value="GLL:US GALON (3,7843 L)">US GALON (3,7843 L)</option>
                        <option value="YRD:YARDA">YARDA</option>
                        <option value="YDK:YARDA CUADRADA">YARDA CUADRADA</option>
                      </Form.Select>
                      <div className={cssValidation.invalidFeedback}>{formik.errors.unidad_medida}</div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Form.Group controlId="descripcion">
                      <Form.Label>Descripción</Form.Label>
                      <Form.Control as="textarea"
                        name="descripcion"
                        value={formik.values.descripcion}
                        onChange={formik.handleChange}
                        placeholder="Escriba una descripción" />
                    </Form.Group>
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-11">
          <div className="d-flex justify-content-end">
            <Button size="lg" onClick={() => navigate("/inventarios/codigos-referencia")} variant="secondary" className="me-2">
              <FontAwesomeIcon icon={faCircleXmark} className="me-1" />
              <span className="text-uppercase">Cancelar</span>
            </Button>
            <Button type="submit" form="f_sku" size="lg" variant="primary">
              <FontAwesomeIcon icon={faFloppyDisk} className="me-1" />
              <span className="text-uppercase">Guardar</span>
            </Button>
          </div>
        </div>
      </div>
      {
        skuId && (
          <Fragment>
            <div className="row mb-3">
              <div className="col-2 offset-1">
                <h6>Configuración Stock</h6>
                <p>Asocia tu código de referencia a un almacén.</p>
              </div>
              <div className="col-8">
                <Card>
                  <Card.Body>
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <thead>
                          <tr className="text-uppercase">
                            <th>Almacén</th>
                            <th>Stock Mínimo</th>
                            <th>Punto de Reposición</th>
                            <th>Costo Unitario</th>
                          </tr>
                        </thead>
                        <tbody className="text-uppercase">
                          {
                            configurarStock && configurarStock.map(item => (
                              <tr key={item.almacenId}>
                                <td>
                                  <Form.Check
                                    type="switch"
                                    id={item.almacenId}
                                    label={item.nombreAlmacen}
                                    checked={!item.deshabilitado}
                                    onChange={() => handleSwitchChange(item.almacenId)}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    value={item.stockMinimo}
                                    onChange={(e) => handleInputChange(item.almacenId, 'stockMinimo', e.target.value)}
                                    disabled={item.deshabilitado}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    value={item.puntoReposicion}
                                    onChange={(e) => handleInputChange(item.almacenId, 'puntoReposicion', e.target.value)}
                                    disabled={item.deshabilitado}
                                  />
                                </td>
                                <td>
                                  <input type="number"
                                    value={item.costoUnitario}
                                    onChange={(e) => handleInputChange(item.almacenId, 'costoUnitario', e.target.value)}
                                    disabled={item.deshabilitado}
                                    step="0.1" />
                                </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-11">
                <div className="d-flex justify-content-end">
                  <Button size="lg" onClick={() => navigate("/inventarios/codigos-referencia")} variant="secondary" className="me-2">
                    <FontAwesomeIcon icon={faCircleXmark} className="me-1" />
                    <span className="text-uppercase">Cancelar</span>
                  </Button>
                  <Button type="button" onClick={guardarConfigurarStock} size="lg" variant="primary">
                    <FontAwesomeIcon icon={faFloppyDisk} className="me-1" />
                    <span className="text-uppercase">Guardar</span>
                  </Button>
                </div>
              </div>
            </div>
          </Fragment>
        )
      }
      {/** DEBUG */}
      <div className="alert alert-warning">
        <span className="fw-semibold">Configurar Stock</span>
        <pre>
          {JSON.stringify(configurarStock, null, 2)}
        </pre>
      </div>
    </MainContainer>
  )
}
