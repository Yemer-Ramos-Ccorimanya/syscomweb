import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import logo from "../../assets/logo.png"
export const Registro = () => {
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow" style={{ border: 'none', boxShadow: 'none', borderRadius: '35px' }}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <img src={logo} className="mx-auto d-block" alt="logo empresa" style={{ maxWidth: '100%', height: 'auto' }} />
                  <p className="text-center mt-3" style={{ fontSize: '14px' }}>
                    <em>Registrate y mejora tu experiencia con la gestión de alquiler y venta de ropa</em>
                  </p>
                  <Form>
                    {/* Fila 1: Nombres y Apellidos */}
                    <Row className="mb-3">
                      <Col md={12}>
                        <Form.Label className="text-center">Nombres y Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese sus nombres y apellidos" style={{ borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', height: '40px' }} />
                      </Col>
                    </Row>

                    {/* Fila 2: Número de Celular y DNI */}
                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Label>Número de Celular</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su número de celular" style={{ borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', height: '40px' }} />
                      </Col>
                      <Col md={6}>
                        <Form.Label>DNI</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su DNI" style={{ borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', height: '40px' }} />
                      </Col>
                    </Row>

                    {/* Fila 3: Correo Electrónico */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Correo Electrónico</Form.Label>
                      <Form.Control type="email" placeholder="Ingrese su correo" style={{ borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', height: '40px' }} />
                    </Form.Group>

                    {/* Fila 4: Contraseña */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Ingrese su contraseña de 8 dígitos" style={{ borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', height: '40px' }} />
                    </Form.Group>

                    {/* Fila 5: Repetir Contraseña */}
                    <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                      <Form.Label>Repetir Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Repetir contraseña" style={{ borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', height: '40px' }} />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit" className="btn-lg mx-auto m-1">CREAR CUENTA</Button>
                    </div>
                  </Form>
                  <p className="text-muted text-center m-1">
                    <a className="text-success" href="#!" style={{ textDecoration: 'none' }}>Ingresa si ya tienes cuenta</a>
                  </p>

                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  );
}