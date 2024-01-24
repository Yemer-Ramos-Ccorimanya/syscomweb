import {Col, Button, Row, Container, Card, Form} from "react-bootstrap"
import logo from "../../assets/logo.png"
import {Link} from "react-router-dom"
import * as Yup from "yup"
import {useFormik} from "formik"
import {cssValidation} from "../common/css.validation"
import {authLoginHook} from "../../hooks/auth.hook"
import {useState} from "react"

export const Login = () => {
  const [error, setError] = useState(null)
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Campo obligatorio"),
      password: Yup.string().required("Campo obligatorio").min(8, "La contraseña debe tener al menos 8 caracteres"),
    }),
    onSubmit: async (values) => {
      try {
        const result = await authLoginHook(values)
        localStorage.setItem("AuthToken", result.access)
        localStorage.setItem("RefreshToken", result.refresh)
        window.location.href = "/"
      } catch (error) {
        setError("Error al hacer login!")
      }
    },
  })

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow" style={{border: "none", boxShadow: "none", borderRadius: "35px"}}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <img src={logo} className="mx-auto d-block" alt="logo empresa"
                       style={{maxWidth: "100%", height: "auto"}}/>
                  <p className="text-center mt-3" style={{fontSize: "14px"}}>
                    <em>Mejoramos tu experiencia con la gestión de alquiler y la venta de ropa</em>
                  </p>
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3 me-5" controlId="formBasicEmail">
                      <Form.Label className="text-center ms-5">Nombre usuario</Form.Label>
                      <Form.Control type="text" placeholder="Ingrese su usuario"
                                    name="username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    className={(formik.errors.username && formik.touched.username)
                                    && cssValidation.isInvalid + " ms-3"}
                                    style={{
                                      borderRadius: "20px",
                                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                      height: "50px"
                                    }}/>
                      <div className={cssValidation.invalidFeedback}>{formik.errors.username}</div>
                    </Form.Group>
                    <Form.Group className="mb-3 me-5" controlId="formBasicPassword">
                      <Form.Label className="ms-5">Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Ingrese su contraseña de 8 digitos"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    className={(formik.errors.password && formik.touched.password)
                                    && cssValidation.isInvalid + " ms-3"}
                                    style={{
                                      borderRadius: "20px",
                                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                      height: "50px"
                                    }}/>
                      <div className={cssValidation.invalidFeedback}>{formik.errors.password}</div>
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit" className="btn-lg mx-auto">INICIAR SESSIÓN</Button>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <p className="text-muted text-center m-1">
                        <a className="text-primary" href="#!" style={{textDecoration: "none"}}>Haz perdido tu
                          contraseña?</a>
                      </p>
                    </Form.Group>
                  </Form>
                  <div className="d-grid">
                    <Link to="/registro" className="btn btn-success btn-lg mx-auto m-1">Crear una cuenta</Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  )
}