import React, { useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { cssValidation } from "../common/css.validation";
import { MainContainer } from "../common/MainContainer";

const ClienteSchema = Yup.object().shape({
  tipo_doc: Yup.string().required("Campo requerido"),
  dni: Yup.string().required("Campo requerido"),
  nombre_completo: Yup.string().required("Campo requerido"),
  address: Yup.string().required("Campo requerido"),
  cod_ubigeo: Yup.string(),
  celular: Yup.string(),
});

export const EditarAlmacen = () => {
  const { clienteId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (clienteId) {

      const result = {
        tipo_doc: "DNI",
        dni: "12345678",
        nombre_completo: "John Doe",
        address: "Calle 123",
        cod_ubigeo: "LIM",
        celular: "987654321",
      };
      formik.setValues({
        tipo_doc: result.tipo_doc,
        dni: result.dni,
        nombre_completo: result.nombre_completo,
        address: result.address,
        cod_ubigeo: result.cod_ubigeo,
        celular: result.celular,
      });
    }
  }, [clienteId]);

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
    onSubmit: (values) => {

      console.log("Formulario enviado:", values);
    },
  });

  return (
    <MainContainer>
      <div className="row">
        <div className="col-11 offset-1">
          <h5>Editar almacén</h5>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-2 offset-1">
          <h6>Datos generales</h6>
          <p>Aquí puedes agregar o editar los datos principales de tu almacén</p>
        </div>
        <div className="col-8">
          <Card>
            <Card.Body>
              <Form id="f_cliente" onSubmit={formik.handleSubmit}>
                <Form.Group controlId="direccion" className="mb-3">
                  <Form.Label>Nombre de almacén</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    className={(formik.errors.address && formik.touched.address) && cssValidation.isInvalid}
                  />
                  <div className={cssValidation.invalidFeedback}>{formik.errors.address}</div>
                </Form.Group>
                <div className="row mb-3">
                  <div className="col-6">
                    <Form.Group controlId="celular">
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control
                        type="text"
                        name="cod_ubigeo"
                        value={formik.values.cod_ubigeo}
                        onChange={formik.handleChange}
                        className={(formik.errors.cod_ubigeo && formik.touched.cod_ubigeo) && cssValidation.isInvalid}
                      />
                      <div className={cssValidation.invalidFeedback}>{formik.errors.cod_ubigeo}</div>
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="dni">
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control
                        type="text"
                        name="celular"
                        value={formik.values.celular}
                        onChange={formik.handleChange}
                        className={(formik.errors.celular && formik.touched.celular) && cssValidation.isInvalid}
                      />
                      <div className={cssValidation.invalidFeedback}>{formik.errors.celular}</div>
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="dni">
                      <Form.Label>Descripción</Form.Label>
                      <Form.Control
                        type="text"
                        name="celular"
                        value={formik.values.celular}
                        onChange={formik.handleChange}
                        className={(formik.errors.celular && formik.touched.celular) && cssValidation.isInvalid}
                      />
                      <div className={cssValidation.invalidFeedback}>{formik.errors.celular}</div>
                    </Form.Group>
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-2 offset-1">
          <h6>Sucursales asociadas</h6>
          <p>Aquí puedes agregar o remover sucursales asociadas a este almacén</p>
        </div>
        <div className="col-8">
          <Card>
            <Card.Body>
              <div className="table-responsive">
                <Button variant="outline-success" className="me-2"> Agregar Sucursal</Button>
                <table className="table mb-0">
                  <thead>
                    <tr className="text-uppercase">
                      <th>Sucursal</th>
                      <th>Dirección</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-end">
                <div className="m-2">
                  <span>Filas por página: </span>
                  <select className="rounded">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </select>
                </div>
                <div className="m-2">
                  <span>1-10 de 1</span>
                </div>
                <nav aria-label="...">
                </nav>
              </div>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </MainContainer>
  );
};
