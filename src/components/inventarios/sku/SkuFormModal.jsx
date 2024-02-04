import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export const SkuFormModal = ({ showModal, handleCloseModal }) => {
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('automático');
  const [direccion, setDireccion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const handleSave = () => {

    handleCloseModal();
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} size='xl' dialogClassName="modal-xl">
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Crear nuevo SKU</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="row">
            <div className="col-6">
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}

                />
              </Form.Group>
            </div>
            <div className="col-3">
              <Form.Group>
                <Form.Label>Codigo SKU*</Form.Label>
                <Form.Control
                  as="select"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                >
                  <option value="automático">Automático</option>
                  <option value="manual">Manual</option>
                </Form.Control>

              </Form.Group>
            </div>
          </div>
          <div className="row">
            {/* moneda y tipo de unidad con option en cada columna */}

            <div className="col-6">
              <Form.Group>
                <Form.Label>Moneda*</Form.Label>
                <Form.Control as="select">
                  <option value="1">Soles</option>
                  <option value="2">Dolar</option>

                </Form.Control>
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group>
                <Form.Label>Tipo de Unidad</Form.Label>
                <Form.Control as="select">
                  <option value="1">Pieza</option>
                  <option value="2">Caja</option>
                  <option value="3">Paquete</option>
                  <option value="4">Kilogramo</option>
                </Form.Control>
              </Form.Group>
            </div>
          </div>
          {/* agregar un switch para mostrar/ocultar opciones avanzadas */}
          <Form.Group className="d-flex justify-content-start m-3">
            <Form.Check type="switch" size="lg" id="custom-switch" label="" />
            <Form.Label >Mostrar/Ocultar opciones avanzadas</Form.Label>
          </Form.Group>
          <div>Inventario inicial en tus almacenes</div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-uppercase">
                  <th>Estado</th>
                  <th>Almacén</th>
                  <th>Stock Inicial</th>
                  <th>Costo unitario</th>
                  <th>Stock Minimo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Check type="switch" id="custom-switch" label="" />
                  </td>
                  <td className='text-uppercase'>TIENDA PRINCIPAL</td>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="Stock Inicial"
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="0.00"
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="Stock Minimo"
                    />
                  </td>
                </tr>
              </tbody>
              
            </table>
          </div>
          
        </Form>   
      </Modal.Body>
      <Modal.Footer>
        
        <Button variant="secondary" size="lg" onClick={handleCloseModal}>CANCELAR</Button>
        <Button variant="primary" type="submit" onClick={handleSave} size="lg">GUARDAR</Button>
      </Modal.Footer>
    </Modal >
  );
};
