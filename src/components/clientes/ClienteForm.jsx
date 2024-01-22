import { Button, Card, Form, InputGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark, faFloppyDisk, faMagnifyingGlass, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { MainContainer } from "../common/MainContainer"

export const ClienteForm = () => {
  return (
    <MainContainer>
      <div className="row">
        <div className="col-11 offset-1">
          <h5>Añadir nuevo cliente</h5>
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
              <div className="row mb-3">
                <div className="col-10">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" />
                  <div className="row mt-2">
                    <div className="col-6">
                      <Form.Label>Categoría</Form.Label>
                      <Form.Select />
                    </div>
                    <div className="col-6">
                      <Form.Label>SubCategoría</Form.Label>
                      <Form.Select />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <img src="https://picsum.photos/200/200" className="img-thumbnail" alt="..." />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-10">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control type="text" />
                </div>
                <div className="col-2">
                  <Form.Label>&nbsp;</Form.Label>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Para alquiler"
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <Form.Label>Código de barras</Form.Label>
                  <Form.Control type="text" />
                </div>
                <div className="col-6">
                  <Form.Label>Precio</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="px-3 fw-semibold">S/.</InputGroup.Text>
                    <Form.Control type="number" step="0.1" />
                  </InputGroup>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Form.Label>Unidad de Medida</Form.Label>
                  <Form.Select />
                </div>
                <div className="col-6">
                  <Form.Label>Impuesto</Form.Label>
                  <Form.Select />
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
                  id="producto_normal" name="tipo_producto"
                  className="me-3" defaultChecked />
                <Form.Check
                  type="radio"
                  label="Producto con variantes"
                  id="producto_con_variantes" name="tipo_producto" />
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
                  id="no_usar_inventario" name="control_inventario"
                  className="me-3" defaultChecked />
                <Form.Check
                  type="radio"
                  label="Inventario simple"
                  id="inventario_simple" name="control_inventario" className="me-3" />
                <Form.Check
                  type="radio"
                  label="Inventario compuesto"
                  id="inventario_compuesto" name="control_inventario" />
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
                <div className="col-2"><Form.Control type="number" step="0.1" /></div>
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
            <Button size="lg" variant="secondary" className="me-2">
              <FontAwesomeIcon icon={faCircleXmark} className="me-1" />
              <span className="text-uppercase">Cancelar</span>
            </Button>
            <Button size="lg" variant="primary">
              <FontAwesomeIcon icon={faFloppyDisk} className="me-1" />
              <span className="text-uppercase">Guardar</span>
            </Button>
          </div>
        </div>
      </div>
    </MainContainer>
  )
}