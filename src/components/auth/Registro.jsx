import {Link} from "react-router-dom"
import {useFormik} from "formik"
import {useState} from "react"
import {Col, Button, Row, Container, Card, Form} from "react-bootstrap"
import logo from "../../assets/logo.png"
import * as Yup from "yup"
import {registerUserHook} from "../../hooks/auth.hook"
import {cssValidation} from "../common/css.validation"

export const Registro = () => {
  const [error, setError] = useState(null)

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      first_name: "",
      last_name: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Campo obligatorio"),
      email: Yup.string().email("Formato de correo inválido").required("Campo obligatorio"),
      password: Yup.string().min(8, "La contraseña debe tener al menos 8 caracteres").required("Campo obligatorio"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
        .required("Campo obligatorio"),
      first_name: Yup.string().required("Campo obligatorio"),
      last_name: Yup.string().required("Campo obligatorio"),
    }),
    onSubmit: async (values) => {
      try {
        const result = await registerUserHook(values)
        localStorage.setItem("AuthToken", result.access)
        localStorage.setItem("RefreshToken", result.refresh)
        window.location.href = "/"
      } catch (error) {
        setError("Error al registrar el usuario!")
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
                    <em>Registrate y mejora tu experiencia con la gestión de alquiler y venta de ropa</em>
                  </p>
                  <Form onSubmit={formik.handleSubmit}>
                    <Row className="mb-3">
                      <Col md={12}>
                        <Form.Label className="text-center">Nombre Usuario</Form.Label>
                        <Form.Control type="text" placeholder="user2024"
                                      name="username"
                                      value={formik.values.username}
                                      onChange={formik.handleChange}
                                      className={(formik.errors.username && formik.touched.username)
                                      && cssValidation.isInvalid}
                                      style={{
                                        borderRadius: "20px",
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                        height: "40px"
                                      }}/>
                        <div className={cssValidation.invalidFeedback}>{formik.errors.username}</div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su nombre"
                                      name="first_name"
                                      value={formik.values.first_name}
                                      onChange={formik.handleChange}
                                      className={(formik.errors.first_name && formik.touched.first_name)
                                      && cssValidation.isInvalid}
                                      style={{
                                        borderRadius: "20px",
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                        height: "40px"
                                      }}/>
                        <div className={cssValidation.invalidFeedback}>{formik.errors.first_name}</div>
                      </Col>
                      <Col md={6}>
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese sus apellidos"
                                      name="last_name"
                                      value={formik.values.last_name}
                                      onChange={formik.handleChange}
                                      className={(formik.errors.last_name && formik.touched.last_name)
                                      && cssValidation.isInvalid}
                                      style={{
                                        borderRadius: "20px",
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                        height: "40px"
                                      }}/>
                        <div className={cssValidation.invalidFeedback}>{formik.errors.last_name}</div>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Correo Electrónico</Form.Label>
                      <Form.Control type="email" placeholder="Ingrese su correo"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    className={(formik.errors.email && formik.touched.email)
                                    && cssValidation.isInvalid}
                                    style={{
                                      borderRadius: "20px",
                                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                      height: "40px"
                                    }}/>
                      <div className={cssValidation.invalidFeedback}>{formik.errors.email}</div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Ingrese su contraseña de 8 dígitos"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    className={(formik.errors.password && formik.touched.password)
                                    && cssValidation.isInvalid}
                                    style={{
                                      borderRadius: "20px",
                                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                      height: "40px"
                                    }}/>
                      <div className={cssValidation.invalidFeedback}>{formik.errors.email}</div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                      <Form.Label>Repetir Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Repetir contraseña"
                                    name="confirmPassword"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    className={(formik.errors.confirmPassword && formik.touched.confirmPassword)
                                    && cssValidation.isInvalid}
                                    style={{
                                      borderRadius: "20px",
                                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                      height: "40px"
                                    }}/>
                      <div className={cssValidation.invalidFeedback}>{formik.errors.confirmPassword}</div>
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit" className="btn-lg mx-auto m-1">CREAR CUENTA</Button>
                    </div>
                  </Form>
                  <p className="text-muted text-center m-1">
                    <Link to="/login" className="text-success" style={{textDecoration: "none"}}>Ingresa si ya tienes
                      cuenta</Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  )
}