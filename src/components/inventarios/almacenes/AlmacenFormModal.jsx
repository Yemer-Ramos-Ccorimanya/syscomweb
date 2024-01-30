import { useFormik } from "formik"
import { Button, Form, Modal } from "react-bootstrap"
import * as Yup from "yup"
import { formTypeModal } from "../../../config"
import { createAlmacenHook, updateAlmacenHook } from "../../../hooks/inventarios"
import { cssValidation } from "../../common/css.validation"
import { toastSuccess } from "../../common/helpers"

const AlmacenSchema = Yup.object().shape({
  nombre: Yup.string().required("Campo requerido"),
  direccion: Yup.string().required("Campo requerido"),
  telefono: Yup.string(),
  descripcion: Yup.string(),
})

export const AlmacenFormModal = (props) => {
  const {
    showModal,
    handleCloseModal,
    almacen,
    type,
    saveChanges
  } = props

  const formik = useFormik({
    initialValues: {
      nombre: "",
      direccion: "",
      telefono: "",
      descripcion: "",
    },
    validationSchema: AlmacenSchema,
    onSubmit: (values) => {
      if (type === formTypeModal.add) {
        createAlmacenHook(values)
          .then(result => {
            saveChanges({ data: result, type })
            toastSuccess("Almacén registrado!")
          })
      }
      if (type === formTypeModal.edit) {
        updateAlmacenHook(almacen.id, values)
          .then(result => {
            saveChanges({ data: result, type })
            toastSuccess("Almacén actualizado!")
          })
      }
    },
  })

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      keyboard={false}
      onEntering={() => {
        if (type === formTypeModal.add) {
          formik.resetForm()
        }
        if (type === formTypeModal.edit) {
          formik.setValues({
            nombre: almacen.nombre,
            direccion: almacen.direccion,
            telefono: almacen.telefono,
            descripcion: almacen.descripcion,
          })
        }
      }}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-uppercase">{type === formTypeModal.add ? "Agregar" : "Editar"} Almacén</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="f_almacen" onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="inputPassword5">Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre" value={formik.values.nombre}
              onChange={formik.handleChange}
              className={(formik.errors.nombre && formik.touched.nombre)
                && cssValidation.isInvalid}
            />
            <div className={cssValidation.invalidFeedback}>{formik.errors.nombre}</div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="inputPassword5">Dirección</Form.Label>
            <Form.Control
              type="text"
              name="direccion" value={formik.values.direccion}
              onChange={formik.handleChange}
              className={(formik.errors.direccion && formik.touched.direccion)
                && cssValidation.isInvalid}
            />
            <div className={cssValidation.invalidFeedback}>{formik.errors.direccion}</div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="inputPassword5">Teléfono</Form.Label>
            <Form.Control
              type="text"
              name="telefono" value={formik.values.telefono}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="inputPassword5">Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="descripcion" value={formik.values.descripcion}
              onChange={formik.handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="secondary" size="lg" onClick={handleCloseModal}>CANCELAR</Button>
        <Button variant="primary" type="submit" form="f_almacen" size="lg">GUARDAR</Button>
      </Modal.Footer>
    </Modal>
  )
}