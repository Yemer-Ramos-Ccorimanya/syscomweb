import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { MainContainer } from "../../common/MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faFloppyDisk, faMagnifyingGlass, faPlus, faShuffle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const FormSku = () => {
  return (
    <MainContainer>
      <div className="row">
        <div className="col-11 offset-1">
          <h5>Nuevo Código de Referencia</h5>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-2 offset-1">
          <h6>Datos básicos</h6>
          <p>Asocia tu código de referencia con un almacén para poder realizar tu gestión de inventarios.</p>
        </div>
        <div className="col-8">
          <Card>
            <Card.Body>
              <div className="row mb-3">
                <div className="col-12">
                  <Form.Group controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre del código de referencia" />
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <Form.Group>
                    <Form.Label>Código de Rerencia</Form.Label>
                    <InputGroup className="mb-3">
                      <Button variant="success" id="button-addon1">
                        <FontAwesomeIcon icon={faShuffle} className="me-1" />
                        <span>Generar Código</span>
                      </Button>
                      <Form.Control
                        type="text"
                      />
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group controlId="tipoUnidad">
                    <Form.Label>Tipo de Unidad de Médida</Form.Label>
                    <Form.Select>
                      <option value="BX:CAJA">CAJA</option>
                      <option value="NIU:UNIDAD">UNIDAD (BIENES)</option>
                      <option value="ZZ:UNIDAD">UNIDAD (SERVICIOS)</option>
                      <option value="4A:BOBINAS">BOBINAS</option>
                      <option value="BJ:BALDE">BALDE</option>
                      <option value="BLL:BARRILES">BARRILES</option>
                      <option value="BG:BOLSA">BOLSA</option>
                      <option value="BO:BOTELLAS">BOTELLAS</option>
                      <option value="CT:CARTONES">CARTONES</option>
                      <option value="CY:CILINDRO">CILINDRO</option>
                      <option value="CJ:CONOS">CONOS</option>
                      <option value="DZN:DOCENA">DOCENA</option>
                      <option value="BE:FARDO">FARDO</option>
                      <option value="GLI:GALÓN INGLES (4,545956L)">GALÓN INGLES (4,545956L)</option>
                      <option value="GRM:GRAMO">GRAMO</option>
                      <option value="LEF:HOJA">HOJA</option>
                      <option value="SET:JUEGO">JUEGO</option>
                      <option value="KGM:KILOGRAMO">KILOGRAMO</option>
                      <option value="KT:KIT">KIT</option>
                      <option value="CA:LATAS">LATAS</option>
                      <option value="LBR:LIBRAS">LIBRAS</option>
                      <option value="LTR:LITRO">LITRO</option>
                      <option value="MTR:METRO">METRO</option>
                      <option value="MGM:MILIGRAMOS">MILIGRAMOS</option>
                      <option value="MLT:MILILITRO">MILILITRO</option>
                      <option value="MMT:MILIMETRO">MILIMETRO</option>
                      <option value="MIL:MILLARES">MILLARES</option>
                      <option value="ONZ:ONZAS">ONZAS</option>
                      <option value="PF:PALETAS">PALETAS</option>
                      <option value="PK:PAQUETE">PAQUETE</option>
                      <option value="PR:PAR">PAR</option>
                      <option value="C62:PIEZAS">PIEZAS</option>
                      <option value="PG:PLACAS">PLACAS</option>
                      <option value="ST:PLIEGO">PLIEGO</option>
                      <option value="INH:PULGADAS">PULGADAS</option>
                      <option value="TU:TUBOS">TUBOS</option>
                      <option value="GLL:US GALON (3,7843 L)">US GALON (3,7843 L)</option>
                      <option value="YRD:YARDA">YARDA</option>
                      <option value="YDK:YARDA CUADRADA">YARDA CUADRADA</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Form.Group controlId="descripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" placeholder="Escriba una descripción" />
                  </Form.Group>
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
  );
};
