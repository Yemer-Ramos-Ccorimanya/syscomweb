import { Button, Card, Form} from "react-bootstrap";
import { MainContainer } from "../../common/MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { SucursalFormModal } from "./SucursalFormModal";
import { formTypeModal } from "../../../config";
import { useFormik } from "formik";
import { getSucursalesHook, deleteSucursalHook} from "../../../hooks/account";
import { deleteConfirm } from "../../common/sweetalert";

export const FormEmpresa = () => {
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState(formTypeModal.add);
  const [sucursales, setSucursales] = useState([]);
  const [sucursalActual, setSucursalActual] = useState({});

const [empresaId, setEmpresaId] = useState("");

useEffect(() => {

  setEmpresaId("2f184d54-d9ca-46a2-a4cb-2253e31c30dd");

  getSucursalesHook(empresaId).then(result => {
    console.log(result);
    setSucursales(result);
  });
}, [empresaId]);


const formik = useFormik({
  initialValues: {
    query: ""
  },
  onSubmit: async (values) => {
    try {
      const result = await getSucursalesHook(values.query);
      setSucursales(result);
    } catch (error) {
      console.error("Error al obtener sucursales:", error);
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
      const results = [data, ...sucursales.results];
      setSucursales({ ...sucursales, results });
      setShowModal(false);
    }
    if (type === formTypeModal.edit) {
      const results = sucursales.results.map(item => {
        if (item.id === data.id) item = data;
        return item;
      });
      setSucursales({ ...sucursales, results });
      setShowModal(false);
    }
  }
  const handleDeleteSucursal = (id) => {
    deleteConfirm().then(result => {
      if (result.isConfirmed) {
        deleteSucursalHook(id).then(() => {
          const results = sucursales.results.filter(item => item.id !== id);
          setSucursales({ ...sucursales, results });
        });
      }
    });
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
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de la empresa</Form.Label>
                    <Form.Control type="text" placeholder="Nombre de la empresa" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ruc</Form.Label>
                    <Form.Control type="text" placeholder="Ruc" />
                  </Form.Group>

                  <div className="row">
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
                  </div>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Direccion de facturacion</Form.Label>
                    <Form.Control type="text" placeholder="Direccion de facturacion" />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="primary" className="text-uppercase">
                <FontAwesomeIcon icon={faFloppyDisk} className="me-2" />
                Guardar
              </Button>
            </div>
          </div>
        </div>
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
      </div>
      <SucursalFormModal
        type={typeModal}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        sucursal= {sucursalActual}
        saveChanges={saveChanges}
      />
    </MainContainer>
  );
};
