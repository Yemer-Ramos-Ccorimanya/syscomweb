import React from 'react';
import { Card, Form, InputGroup, Button, Pagination } from 'react-bootstrap';
import { MainContainer } from '../../common/MainContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleMinus, faChevronLeft, faChevronRight, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const BuscarSku = () => {
  return (
    <MainContainer>
      <Card>
        <h3>Agregar Uno o mas códigos SKU existentes</h3>
        <Card.Body>
          <div>
            <Form className="d-flex">
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
                </InputGroup.Text>
                <Form.Control placeholder="Buscar por nombre o código SKU" />
              </InputGroup>
            </Form>
          </div>
         
        </Card.Body>
        
        {/* Card footer */}
        <Card.Footer>
          <div className="d-flex justify-content-between align-items-center">
            <div className="m-2">
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
              <Pagination>
                <Pagination.Prev disabled>
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <span className="visually-hidden">Anterior</span>
                </Pagination.Prev>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Next>
                  <FontAwesomeIcon icon={faChevronRight} />
                  <span className="visually-hidden">Siguiente</span>
                </Pagination.Next>
              </Pagination>
            </nav>
          </div>
        </Card.Footer>
      </Card>
     <div className="d-flex justify-content-end">
    <Button variant="success" className="me-2">
      <FontAwesomeIcon icon={faCirclePlus} className="mx-2" />
      Agregar
    </Button>
    <Button variant="secondary">
      Cancelar
    </Button>
  </div>
    </MainContainer>
  );
}
