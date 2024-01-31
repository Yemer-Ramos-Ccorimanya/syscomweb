import { Button, Card, Form, InputGroup } from "react-bootstrap"
import { MainContainer } from "../../common/MainContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark, faFloppyDisk, faMagnifyingGlass, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { createProductoHook } from "../../../hooks/inventarios"
import { getCategoriasHook } from "../../../hooks/inventarios"
import { getSubCategoriaHook } from "../../../hooks/inventarios"
import { getSubCategoriasByCategoriaHook } from "../../../hooks/inventarios"
import { useFormik } from "formik"
import * as Yup from "yup"
import { cssValidation } from "../../common/css.validation"
import { useEffect, useState } from "react"

const ProductoSchema = Yup.object().shape({
  tipo_item: Yup.string().required("Campo requerido"),
  nombre: Yup.string().required("Campo requerido"),
  categoria: Yup.string().required("Campo requerido"),
  sub_categoria: Yup.string(),
  descripcion: Yup.string().required("Campo requerido"),
  codigo_barra: Yup.string().required("Campo requerido"),
  precio_unitario: Yup.string().required("Campo requerido"),
  unidad_medida: Yup.string().required("Campo requerido"),
  impuesto: Yup.string().required("Campo requerido"),
})

export const ProductoForm = () => {
  useEffect(() => {
    getCategoriasHook().then(result => setCategorias(result));
  }, [])
  useEffect(() => {
    getSubCategoriasByCategoriaHook().then(result => setSubcategorias(result));
  }, [])

  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);

  const formik = useFormik({
    initialValues: {
      tipo_item: "",
      nombre: "",
      categoria: "",
      sub_categoria: "",
      descripcion: "",
      codigo_barra: "",
      precio_unitario: "",
      unidad_medida: "",
      impuesto: "",
    },
    validationSchema: ProductoSchema,
    onSubmit:  (values) => {
      console.log(values);
      try {
        //const result = await createProductoHook(values);
        saveChanges({ data: result, type });
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  })
  useEffect(() => {
    getCategoriasHook().then((result) => {
      setCategorias(result);
    });
  }, []);

  
  useEffect(() => {
    if (formik.values.categoria) {
      getSubCategoriasByCategoriaHook(formik.values.categoria).then(result => {
        setSubcategorias(result);
      });
    }
  }, [formik.values.categoria]);

  // recuperar las subcategorias de la categoria seleccionada.
  const handleCancel = () => {
    formik.resetForm()
  }
  return (
    <MainContainer>
      <Form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-11 offset-1">
            <h5>Añadir nuevo producto</h5>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2 offset-1">
            <h6 className="mb-0">Tipo Item</h6>
          </div>
          <div className="col-8">
            <Card>
              <Card.Body className="fw-semibold">
                <div className="d-flex justify-content-center">
                  <Form.Check
                    type="radio"
                    label="Producto"
                    id="item_producto"
                    name="tipo_item"
                    value="Producto"
                    onChange={formik.handleChange}
                    className="me-3"
                    defaultChecked
                  />
                  <Form.Check
                    type="radio"
                    label="Servicio"
                    id="item_servicio"
                    name="tipo_item"
                    value="Servicio"
                    onChange={formik.handleChange}
                    className="me-3"
                  />
                  <Form.Check
                    type="radio"
                    label="Para alquilar"
                    id="item_para_alquilar"
                    name="tipo_item"
                    value="Para alquilar"
                    onChange={formik.handleChange}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2 offset-1">
            <h6>Información de producto</h6>
            <p>Por favor, ingrese todos los detalles requeridos para que sus productos puedan ser exhibidos en sus canales de venta.</p>
          </div>
          <div className="col-8">
            <Card>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.errors.nombre && formik.touched.nombre}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.nombre}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="row mb-3">
                  <div className="col-6">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select
                      name="categoria"
                      value={formik.values.categoria}
                      onChange={formik.handleChange}
                    >
                      {categorias.results?.map((item, index) => (
                        <option key={item.id} value={item.id}>{item.nombre}</option>
                      ))}
                    </Form.Select>
                  </div>
                  <div className="col-6">
                    <Form.Label>SubCategoría</Form.Label>
                    <Form.Select
                      name="sub_categoria"
                      value={formik.values.sub_categoria}
                      onChange={formik.handleChange}
                    >
                      {subcategorias.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.nombre}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                </div>
                <Form.Group className="mb-3">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    name="descripcion"
                    value={formik.values.descripcion}
                    onChange={formik.handleChange}
                    className={(formik.errors.descripcion && formik.touched.descripcion)
                      && cssValidation.isInvalid}
                    as="textarea"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.descripcion}
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="row mb-3">
                  <div className="col-6">
                    <Form.Label>Código de barras</Form.Label>
                    <Form.Control
                      name="codigo_barra"
                      value={formik.values.codigo_barra}
                      onChange={formik.handleChange}
                      className={(formik.errors.codigo_barra && formik.touched.codigo_barra)
                        && cssValidation.isInvalid}
                      type="text"
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.codigo_barra}
                    </Form.Control.Feedback>
                  </div>
                  <div className="col-6">
                    <Form.Label>Precio</Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="px-3 fw-semibold">S/.</InputGroup.Text>
                      <Form.Control
                        type="number"
                        step="0.1"
                        name="precio_unitario"
                        value={formik.values.precio_unitario}
                        onChange={formik.handleChange}
                        className={(formik.errors.precio_unitario && formik.touched.precio_unitario)
                          && cssValidation.isInvalid}
                      />
                    </InputGroup>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.precio_unitario}
                    </Form.Control.Feedback>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <Form.Label>Unidad de Medida</Form.Label>
                    <Form.Select
                      name="unidad_medida"
                      value={formik.values.unidad_medida}
                      onChange={formik.handleChange}
                      className={(formik.errors.unidad_medida && formik.touched.unidad_medida)
                        && cssValidation.isInvalid}
                    >
                      <option value="1">Unidad</option>
                      <option value="2">Kilogramo</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.unidad_medida}
                    </Form.Control.Feedback>
                  </div>
                  <div className="col-6">
                    <Form.Label>Impuesto</Form.Label>
                    <Form.Select
                      name="impuesto"
                      value={formik.values.impuesto}
                      onChange={formik.handleChange}
                      className={(formik.errors.impuesto && formik.touched.impuesto)
                        && cssValidation.isInvalid}
                    >
                      <option value="1">IGV</option>
                      <option value="2">Gravado</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.impuesto}
                    </Form.Control.Feedback>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2 offset-1">
            <h6>Precio por punto de venta</h6>
            <p>Escoge la sucursal donde tu producto estará disponible para su venta.</p>
          </div>
          <div className="col-8">
            <Card>
              <Card.Body>
                <div className="row">
                  <div className="col-6">
                    <Form.Label>Punto de venta</Form.Label>
                    <Form.Check
                      type="switch"
                      id="punto-de-venta-switch"
                      label="Sucursal Punto de Venta - 20273057090"
                      className="mt-1"
                    />
                  </div>
                  <div className="col-6">
                    <Form.Label>Precio</Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="px-3 fw-semibold">S/.</InputGroup.Text>
                      <Form.Control type="number" step="0.1" />
                    </InputGroup>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2 offset-1">
            <h6 className="mb-0">Tipo Producto</h6>
          </div>
          <div className="col-8">
            <Card>
              <Card.Body className="fw-semibold">
                <div className="d-flex justify-content-center">
                  <Form.Check
                    type="radio"
                    label="Producto normal"
                    id="producto_normal"
                    className="me-3"
                    defaultChecked
                  />
                  <Form.Check
                    type="radio"
                    label="Producto con variantes"
                    id="producto_con_variantes"
                    
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2 offset-1">
            <h6 className="mb-0">Control de Inventario</h6>
          </div>
          <div className="col-8">
            <Card>
              <Card.Body className="fw-semibold">
                <div className="d-flex justify-content-center">
                  <Form.Check
                    type="radio"
                    label="No usar inventario"
                    id="no_usar_inventario"
                    className="me-3"
                    defaultChecked
                  />
                  <Form.Check
                    type="radio"
                    label="Inventario simple"
                    id="inventario_simple"
                    
                    className="me-3"
                  />
                  <Form.Check
                    type="radio"
                    label="Inventario compuesto"
                    id="inventario_compuesto"
               
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-8 offset-3">
            <Card>
              <Card.Body>
                <div className="row">
                  <div className="col-3 offset-1">Zapatillas adidas</div>
                  <div className="col-1">
                    <label className="col-form-label">Cant.</label>
                  </div>
                  <div className="col-2">
                    <Form.Control type="number" step="0.1" />
                  </div>
                  <div className="col-2">
                    <label className="col-form-label">Unidad</label>
                  </div>
                  <div className="col-2">
                    <a href="#" className="text-danger fs-4">
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-8 offset-3">
            <Card>
              <Card.Body>
                <div className="row row-cols-auto g-2">
                  <div className="col-auto offset-1">
                    <label className="col-form-label">Puedes remplazar este SKU por uno existente o nuevo</label>
                  </div>
                  <div className="col-auto">
                    <Button variant="secondary">
                      <FontAwesomeIcon icon={faMagnifyingGlass} className="me-1" />
                      <span>Buscar SKU</span>
                    </Button>
                  </div>
                  <div className="col-auto">
                    <Button variant="success">
                      <FontAwesomeIcon icon={faPlus} className="me-1" />
                      <span>Agregar SKU</span>
                    </Button>
                  </div>
                </div>
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
              <Button type="submit" size="lg" variant="primary">
                <FontAwesomeIcon icon={faFloppyDisk} className="me-1" />
                <span className="text-uppercase">Guardar</span>
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </MainContainer>
  )
}