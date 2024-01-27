import { useFormik } from "formik"
import { Button, Form, Modal } from "react-bootstrap"
import Select from "react-select"
import * as Yup from "yup"
import { formTypeModal } from "../../../config"
import { createSubCategoriaHook, getCategoriaHook, getCategoriasSelectHook, getSubCategoriaHook, updateSubCategoriaHook } from "../../../hooks/inventarios"
import { useEffect, useState } from "react"
import { cssValidation } from "../../common/css.validation"

const SubCategoriaSchema = Yup.object().shape({
  categoria: Yup.string().required("Campo requerido"),
  nombre: Yup.string().required("Campo requerido"),
})

export const SubCategoriaModal = (props) => {
  const {
    title,
    showSubcategoryModal,
    handleCloseSubcategory,
    saveChanges,
    subCategoria,
    type
  } = props
  const [selectedOptionCategorias, setSelectedOptionCategorias] = useState(null)
  const [inputValueCategorias, setInputValueCategorias] = useState("")
  const [categoriasOptions, setCategoriasOptions] = useState([])

  useEffect(() => {
    getCategoriasSelectHook(inputValueCategorias)
      .then(result => setCategoriasOptions(result))
  }, [inputValueCategorias])

  const handleChangeCategorias = (selectedOption) => {
    formik.setFieldValue("categoria", selectedOption.value)
    setSelectedOptionCategorias(selectedOption)
  }

  const handleInputChangeCategorias = (inputValue) => {
    setInputValueCategorias(inputValue)
  }

  const formik = useFormik({
    initialValues: {
      categoria: "",
      nombre: "",
    },
    validationSchema: SubCategoriaSchema,
    onSubmit: (values) => {
      if (type === formTypeModal.add) {
        createSubCategoriaHook(values)
          .then(result => {
            saveChanges({ data: result, type })
          })
      }
      if (type === formTypeModal.edit) {
        updateSubCategoriaHook(subCategoria.id, values)
          .then(result => {
            saveChanges({ data: result, type })
          })
      }
    },
  })

  return (
    <Modal show={showSubcategoryModal} onEntering={() => {
      if (type === formTypeModal.add) {
        formik.resetForm()
        setSelectedOptionCategorias(null)
      }
      if (type === formTypeModal.edit) {
        formik.setValues({
          categoria: subCategoria.categoria,
          nombre: subCategoria.nombre
        })
        if (subCategoria.categoria) {
          getCategoriaHook(subCategoria.categoria)
            .then(result => {
              const item = {
                value: result.id,
                label: result.nombre
              }
              setSelectedOptionCategorias(item)
            })
        }
      }
    }} onHide={handleCloseSubcategory} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="f_sub_categoria" onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formCategoryName">
            <Form.Label>Seleccionar Categoría</Form.Label>
            <Select
              onChange={handleChangeCategorias}
              inputValue={inputValueCategorias}
              value={selectedOptionCategorias}
              onInputChange={handleInputChangeCategorias}
              options={categoriasOptions} placeholder="buscar categoría"
              className={formik.errors.categoria ? cssValidation.isInvalid : ""}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderColor: formik.errors.categoria ? "#dc3545" : "grey",
                }),
              }} />
            <div className={cssValidation.invalidFeedback}>{formik.errors.categoria}</div>
          </Form.Group>
          <Form.Group controlId="formSubcategoryName">
            <Form.Label>Nombre de la Subcategoría</Form.Label>
            <Form.Control type="text"
              name="nombre" value={formik.values.nombre}
              onChange={formik.handleChange}
              className={(formik.errors.nombre && formik.touched.nombre)
                && cssValidation.isInvalid}
              placeholder="Ingrese el nombre de la subcategoría" />
            <div className={cssValidation.invalidFeedback}>{formik.errors.nombre}</div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="secondary" size="lg" onClick={handleCloseSubcategory}>
          <span className="text-uppercase">Cancelar</span>
        </Button>
        <Button type="submit" form="f_sub_categoria" variant="primary" size="lg">
          <span className="text-uppercase">Guardar</span>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}