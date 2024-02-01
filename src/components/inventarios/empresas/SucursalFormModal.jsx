import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export const SucursalFormModal = ({ showModal, handleCloseModal }) => {
  const [codigoSUNAT, setCodigoSUNAT] = useState('');
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSave = () => {

    handleCloseModal();
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} size="lg" dialogClassName="modal-lg">
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Agregar Sucursal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="row">
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Codigo SUNAT</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Codigo SUNAT"
                  value={codigoSUNAT}
                  onChange={(e) => setCodigoSUNAT(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
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
          </div>
          <Form.Group>
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="lg" onClick={handleCloseModal}>CANCELAR</Button>
        <Button variant="primary" type="submit" onClick={handleSave} size="lg">GUARDAR</Button>
    </Modal.Footer>
    </Modal >
  );
};
