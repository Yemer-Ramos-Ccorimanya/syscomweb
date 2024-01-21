
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <header className="bg-white text-dark p-1">
            <div className="container d-flex justify-content-between align-items-center">
                <h1>Nombre de la tienda</h1>
                <div>
                    <button className="btn btn-outline-dark btn-danger">Cerrar Sesión</button>
                </div>
            </div>
        </header>
    );
}

export default Header;

