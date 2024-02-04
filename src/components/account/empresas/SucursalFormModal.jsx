import { useFormik } from 'formik';
import { Button, Form, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { formTypeModal } from '../../../config';
import { cssValidation } from '../../common/css.validation';
import { toastSuccess } from '../../common/helpers';
import { createSucursalHook,updateSucursalHook } from '../../../hooks/account';

const SucursalSchema = Yup.object().shape({
  cod_sunat: Yup.string().required('Campo requerido'),
  nombre: Yup.string().required('Campo requerido'),
  direccion: Yup.string().required('Campo requerido'),
  descripcion: Yup.string(),
});

export const SucursalFormModal = (props) => {
  const {
    showModal,
    handleCloseModal,
    sucursal,
    type,
    saveChanges
  } = props;

  const formik = useFormik({
    initialValues: {
      cod_sunat: "",
      nombre: "",
      direccion: "",
      descripcion: "",
    },
    validationSchema: SucursalSchema,
    onSubmit: (values) => {
      if (type === formTypeModal.add) {
        createSucursalHook(values)
          .then(result => {
            saveChanges({ data: result, type });
            toastSuccess('Sucursal registrada!');
          });
      }
      if (type === formTypeModal.edit) {
        updateSucursalHook(sucursal.id, values)
        .then(result => {
          saveChanges({ data: result, type });
          toastSuccess('Sucursal actualizada!');
        });
      }
    },
  });

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      size="lg"
      dialogClassName="modal-lg"
      keyboard={false}
      onEntering={() => {
        if (type === formTypeModal.add) {
          formik.resetForm()
        }
        if (type === formTypeModal.edit) {
          formik.setValues({
            cod_sunat: sucursal.cod_sunat,
            nombre: sucursal.nombre,
            direccion: sucursal.direccion,
            descripcion: sucursal.descripcion,
          })
        }
      }}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-uppercase"> {type === formTypeModal.add ? "Agregar" : "Editar"}Agregar Sucursal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="f_sucursal" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Codigo SUNAT</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Codigo SUNAT"
                  value={formik.values.cod_sunat}
                  onChange={formik.handleChange}
                  name="cod_sunat"
                  className={(formik.errors.cod_sunat && formik.touched.cod_sunat) && cssValidation.isInvalid}
                />
                <div className={cssValidation.invalidFeedback}>{formik.errors.cod_sunat}</div>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  value={formik.values.nombre}
                  name='nombre'
                  onChange={formik.handleChange}
                  className={(formik.errors.nombre && formik.touched.nombre) && cssValidation.isInvalid}
                />
                <div className={cssValidation.invalidFeedback}>{formik.errors.nombre}</div>
              </Form.Group>
            </div>
          </div>
          <Form.Group>
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Direccion"
              value={formik.values.direccion}
              name="direccion"
              onChange={formik.handleChange}
              className={(formik.errors.direccion && formik.touched.direccion) && cssValidation.isInvalid}
            />
            <div className={cssValidation.invalidFeedback}>{formik.errors.direccion}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Descripcion"
              value={formik.values.descripcion}
              name="descripcion"
              onChange={formik.handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="lg" onClick={handleCloseModal}>CANCELAR</Button>
        <Button variant="primary" type="submit" form="f_sucursal" size="lg">GUARDAR</Button>
      </Modal.Footer>
    </Modal>
  );
};
