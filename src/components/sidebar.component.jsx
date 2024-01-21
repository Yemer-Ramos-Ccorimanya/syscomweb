// Sidebar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="d-flex g-4">
      <nav className="bg-white sidebar d-flex flex-column vh-100" style={{ width: '200px' }}>
        <div className="text-center p-4">
        <img
            src="https://i.pinimg.com/736x/22/d5/82/22d582dc8a3c9696858584478827f602.jpg"
            alt="Logo"
            className="img-fluid rounded-circle" // Añade la clase rounded-circle para hdacerlo redondeado
            style={{ maxWidth: '50px' }} // Establece un ancho máximo para hacerlo más pequeño
          />
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <button className="btn btn-dark btn-block rounded-pill mb-2">Nuevo Alquiler</button>
          </li>
          <li className="nav-item">
            <Link to="/catalogo" className="nav-link text-dark">Catálogo</Link>
          </li>
          <li className="nav-item">
            <Link to="/clientes" className="nav-link text-dark">Clientes</Link>
          </li>
          <li className="nav-item">
            <Link to="/reservas" className="nav-link text-dark">Reservas</Link>
          </li>
          <li className="nav-item">
            <Link to="/alquileres" className="nav-link text-dark">Alquileres</Link>
          </li>
          <li className="nav-item">
            <Link to="/reportes" className="nav-link text-dark">Reportes</Link>
          </li>
          <li className="nav-item">
            <Link to="/configuraciones" className="nav-link text-dark">Configuraciones</Link>
          </li>
        </ul>
      </nav>
      <div className="flex-grow-1">
        {/* Aquí va el contenido principal de tu aplicación */}
      </div>
    </div>
  );
}

export default Sidebar;
