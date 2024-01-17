import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Sing In</h3>
        <div className="mb-3">
          <label>Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Recordar credenciales
            </label>
          </div>
          <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </div>
        <p className="forgot-password text-right">
          No estas registrado? <a href="/sign-up">sign up</a>
        </p>
        
      </form>
    )
  }
}