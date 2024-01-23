import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import logo from "../../assets/logo.png"
export const Login = () => {
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow" style={{ border: 'none', boxShadow: 'none', borderRadius: '35px'}}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <img src={logo} className="mx-auto d-block" alt="logo empresa" style={{ maxWidth: '100%', height: 'auto' }} />
                  <p className="text-center mt-3" style={{ fontSize: '14px' }}>
                    <em>Mejoramos tu experiencia con la gestión de alquiler y la venta de ropa</em>
                  </p>
                  <Form>
                    <Form.Group className="mb-3 me-5" controlId="formBasicEmail">
                      <Form.Label className="text-center ms-5">Ingrese su correo</Form.Label>
                      <Form.Control className="ms-3" type="email" placeholder="Ingrese su correo" style={{ borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', height: '50px' }} />
                    </Form.Group>
                    <Form.Group className="mb-3 me-5" controlId="formBasicPassword">
                      <Form.Label className="ms-5">Contraseña</Form.Label>
                      <Form.Control className="ms-3" type="password" placeholder="Ingrese su contraseña de 8 digitos" style={{ borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', height: '50px' }} />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit" className="btn-lg mx-auto">INICIAR SESSIÓN</Button>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <p className="text-muted text-center m-1">
                        <a className="text-primary" href="#!" style={{ textDecoration: 'none' }}>Haz perdido tu contraseña?</a>
                      </p>
                    </Form.Group>
                  </Form>
                  <div className="d-grid">
                    <Button variant="success" type="submit" className="btn-lg mx-auto m-1">Crear una cuenta</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  );
}