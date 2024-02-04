import { useFormik } from "formik"
import { Button, Dropdown, Form, Modal } from "react-bootstrap"
import * as Yup from "yup"
import { formTypeModal } from "../../config"
import { createAlmacenHook, updateAlmacenHook } from "../../hooks/inventarios"
import { cssValidation } from "../common/css.validation"
import { toastSuccess } from "../common/helpers"

const AlmacenSchema = Yup.object().shape({
    nombre: Yup.string().required("Campo requerido"),
    direccion: Yup.string().required("Campo requerido"),
    telefono: Yup.string(),
    descripcion: Yup.string(),
})


export const ModalSerieComprobante = (props) => {

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
                <Modal.Title className="text-uppercase">{type === formTypeModal.add ? "Agregar" : "Editar"} Serial</Modal.Title>
            </Modal.Header>
            <Modal.Body>


                <Form id="f_almacen" onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="inputPassword5">Serie</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre" value={formik.values.nombre}
                                    onChange={formik.handleChange}
                                    className={(formik.errors.nombre && formik.touched.nombre)
                                        && cssValidation.isInvalid}
                                />
                                <div className={cssValidation.invalidFeedback}>{formik.errors.nombre}</div>

                            </Form.Group>
                        </div>
                        <div className="col-6">
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="inputPassword5">Tipo Comprobante</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="direccion" 
                                    value={formik.values.direccion}
                                    onChange={formik.handleChange}
                                    
                                >
                                    <option value="activo">Factura</option>
                                    <option value="inactivo">Recibo</option>

                                </Form.Select>
                                <div className={cssValidation.invalidFeedback}>{formik.errors.direccion}</div>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="inputPassword5">Correlativo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="telefono" value={formik.values.telefono}
                                    onChange={formik.handleChange}
                                />
                            </Form.Group>
                        </div>
                        <div className="col-6">
                            <Form.Group>
                                <Form.Label  htmlFor="inputPassword5">Estado</Form.Label>
                                <Form.Select
                                    as="select"
                                    name="descripcion"
                                    value={formik.values.descripcion}
                                    onChange={formik.handleChange}
                                >
                                    <option value="activo">Activo</option>
                                    <option value="inactivo">Inactivo</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>
                </Form>
            </Modal.Body>
            <div className="d-flex justify-content-end">
                <Modal.Footer className="justify-content-center">
                    <Button variant="dark" type="submit" form="f_almacen" size="lg">GUARDAR</Button>
                </Modal.Footer>
            </div>
        </Modal>
    )
}