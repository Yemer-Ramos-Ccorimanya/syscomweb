import { Button, Card, Form } from "react-bootstrap";
import { MainContainer } from "../../common/MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { SucursalFormModal } from "./SucursalFormModal";
import { formTypeModal } from "../../../config";
import { useFormik } from "formik";
import { deleteSucursalHook, getUserEmpresaHook, createUserEmpresaHook, updateUserEmpresaHook } from "../../../hooks/account";
import { deleteConfirm } from "../../common/sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup"
import { toastSuccess } from "../../common/helpers";

const EmpresaSchema = Yup.object().shape({
  ruc: Yup.string().required('El RUC es obligatorio'),
  rzn_social: Yup.string().required('La Razón Social es obligatoria'),
  direccion: Yup.string().required('La Dirección es obligatoria'),
  celular: Yup.string().required('El Número de Celular es obligatorio'),
})

export const FormEmpresa = () => {
  const { empresaId } = useParams()
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const [typeModal, setTypeModal] = useState(formTypeModal.add)
  const [sucursales, setSucursales] = useState([])
  const [sucursalActual, setSucursalActual] = useState({})


  useEffect(() => {
    if (empresaId) {
      getUserEmpresaHook(empresaId).then(result => {
        formik.setValues({
          ruc: result.ruc,
          rzn_social: result.rzn_social,
          direccion: result.direccion,
          celular: result.celular,
        })
      })
    }
  }, [empresaId])


  const formik = useFormik({
    initialValues: {
      ruc: '',
      rzn_social: '',
      direccion: '',
      celular: '',
    },
    validationSchema: EmpresaSchema,
    onSubmit: async (values) => {
      console.log(values)
      if (!empresaId) {
        // agregar
        createUserEmpresaHook(values).then(result => {
          navigate(`/account/empresas/${result.id}/editar`)
          toastSuccess("Empresa registrada!")
        })
      } else {
        // editar
        updateUserEmpresaHook(empresaId, values).then(() => {
          navigate("/account/empresas")
          toastSuccess("Datos de empresa actualizada!")
        })
      }
    }
  });


  const handleCloseModal = () => setShowModal(false);

  const handleAddModal = () => {
    console.log("Abriendo modal...");
    setTypeModal(formTypeModal.add)
    setShowModal(true);
  };
  const handleEditarSucursalModal = (item) => {
    setTypeModal(formTypeModal.edit);
    setSucursalActual(item);
    setShowModal(true);
  };

  const saveChanges = ({ data, type }) => {
    if (type === formTypeModal.add) {
      setSucursales([data, ...sucursales])
      setShowModal(false)
    }
    if (type === formTypeModal.edit) {
      const newSucursales = sucursales.map(item => {
        if (item.id === data.id) item = data;
        return item;
      });
      setSucursales(newSucursales)
      setShowModal(false)
    }
  }

  const handleDeleteSucursal = (id) => {
    deleteConfirm().then(result => {
      if (result.isConfirmed && empresaId) {
        deleteSucursalHook(empresaId, id).then(() => {
          const newSucursales = sucursales.filter(item => item.id !== id)
          setSucursales(newSucursales)
        })
      }
    })
  }

  return (
    <MainContainer>
      <div className="row">
        <div className="col-11 ms-2">
          <h5>Informacion de empresa</h5>
        </div>
        <div className="row mb-3">
          <div className="col-2 offset-1">
            <h6>Datos Empresa</h6>
            <p>Completa la informacion de tu empresa</p>
          </div>
          <div className="col-8">
            <Card>
              <Card.Body>
                <Form id="f_empresa" onSubmit={formik.handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ruc</Form.Label>
                    <Form.Control type="text"
                      name="ruc"
                      value={formik.values.ruc}
                      onChange={formik.handleChange}
                      isInvalid={formik.errors.ruc && formik.touched.ruc}
                      placeholder="Ruc" />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.ruc}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de la empresa</Form.Label>
                    <Form.Control type="text"
                      name="rzn_social"
                      value={formik.values.rzn_social}
                      onChange={formik.handleChange}
                      isInvalid={formik.errors.rzn_social && formik.touched.rzn_social}
                      placeholder="Nombre de la empresa" />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.rzn_social}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* <div className="row">
                    <div className="col-4">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Departamento</Form.Label>
                        <Form.Control type="text" placeholder="Departamento" />
                      </Form.Group>
                    </div>
                    <div className="col-4">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Provincia</Form.Label>
                        <Form.Control type="text" placeholder="Provincia" />
                      </Form.Group>
                    </div>
                    <div className="col-4">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Distrito</Form.Label>
                        <Form.Control type="text" placeholder="Distrito" />
                      </Form.Group>
                    </div>
                  </div> */}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Direccion de facturacion</Form.Label>
                    <Form.Control type="text"
                      name="direccion"
                      value={formik.values.direccion}
                      onChange={formik.handleChange}
                      isInvalid={formik.errors.direccion && formik.touched.direccion}
                      placeholder="Direccion de facturacion" />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.direccion}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="text"
                      name="celular"
                      value={formik.values.celular}
                      onChange={formik.handleChange}
                      isInvalid={formik.errors.celular && formik.touched.celular}
                      placeholder="Celular" />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.celular}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
            <div className="d-flex justify-content-end mt-3">
              <Button type="submit" form="f_empresa" variant="primary" className="text-uppercase">
                <FontAwesomeIcon icon={faFloppyDisk} className="me-2" />
                Guardar
              </Button>
            </div>
          </div>
        </div>
        {
          empresaId && (
            <div className="row mb-3">
              <div className="col-2 offset-1">
                <h6 className="ms-2">Sucursales</h6>
              </div>
              <div className="col-8">
                <Card>
                  <Card.Header>
                    <div className="d-flex justify-content-between">
                      <span className="text-uppercase fw-semibold">Sucursales</span>
                      <Button className="text-uppercase" onClick={handleAddModal} variant="success" >Nueva Sucursal</Button>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr className="text-uppercase">
                            <th>Sucursal</th>
                            <th>Dirección</th>
                            <th>Descripción</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            sucursales && sucursales?.map(item => {
                              return (
                                <tr key={item.id}>
                                  <td>{item.nombre}</td>
                                  <td>{item.direccion}</td>
                                  <td>{item.descripcion}</td>
                                  <td>
                                    <div className="d-flex justify-content-end">
                                      <Button variant={"secondary"}
                                        onClick={() => handleEditarSucursalModal(item)}
                                        size={"sm"} className="me-2">
                                        <FontAwesomeIcon icon={faEdit} />
                                      </Button>
                                      <Button variant={"danger"} size={"sm"}
                                        onClick={() => handleDeleteSucursal(item.id)}>
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
              </div>
            </div>
          )
        }
      </div>
      <SucursalFormModal
        empresaId={empresaId}
        type={typeModal}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        sucursal={sucursalActual}
        saveChanges={saveChanges}
      />
      {/** DEBUG */}
      <div className="alert alert-warning mt-2">
        <span className="fw-semibold">Configurar Stock</span>
        <pre>
          {JSON.stringify(formik.values, null, 2)}
        </pre>
      </div>
    </MainContainer>
  );
};
