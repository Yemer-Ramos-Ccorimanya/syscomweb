import { Button, Form, Modal } from "react-bootstrap"
import { formTypeModal } from "../../../config"
import { createCategoriaHook, updateCategoriaHook } from "../../../hooks/inventarios"
import { useFormik } from "formik"
import * as Yup from "yup"
import { cssValidation } from "../../common/css.validation"

const CategoriaSchema = Yup.object().shape({
  nombre: Yup.string().required("Campo requerido"),
})

export const CategoriaModal = (props) => {
  const {
    title,
    showCategoryModal,
    handleCloseCategory,
    saveChanges,
    categoria,
    type
  } = props

  const formik = useFormik({
    initialValues: {
      nombre: "",
    },
    validationSchema: CategoriaSchema,
    onSubmit: (values) => {
      if (type === formTypeModal.add) {
        createCategoriaHook(values)
          .then(result => {
            saveChanges({ data: result, type })
          })
      }
      if (type === formTypeModal.edit) {
        updateCategoriaHook(categoria.id, values)
          .then(result => {
            saveChanges({ data: result, type })
          })
      }
    },
  })

  return (
    <Modal show={showCategoryModal} onEntering={() => {
      if (type === formTypeModal.add) {
        formik.resetForm()
      }
      if (type === formTypeModal.edit) {
        formik.setValues({ nombre: categoria.nombre })
      }
    }} onHide={handleCloseCategory} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="f_categoria" onSubmit={formik.handleSubmit}>
          <Form.Group controlId="formCategoryName">
            <Form.Label>Nombre de la Categoría</Form.Label>
            <Form.Control type="text"
              name="nombre" value={formik.values.nombre}
              onChange={formik.handleChange}
              className={(formik.errors.nombre && formik.touched.nombre)
                && cssValidation.isInvalid}
              placeholder="Ingrese el nombre de la categoría" />
            <div className={cssValidation.invalidFeedback}>{formik.errors.nombre}</div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="secondary" size="lg" onClick={handleCloseCategory}>
          <span className="text-uppercase">Cancelar</span>
        </Button>
        <Button type="submit" form="f_categoria" variant="primary" size="lg">
          <span className="text-uppercase">Guardar</span>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}