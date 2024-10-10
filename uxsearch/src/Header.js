import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">UXSearch</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link text-white" href="/pantalla-principal">Metodos de evaluación UX</a>
                        <a className="nav-link text-white" href="/explicacion-filtros">Explicación filtros</a>
                        <a className="nav-link text-white" href="/login-admin">Iniciar Sesión como administrador</a>
                    </div>
                </div>
            </div>
        </nav>
    ); 
}

export default Navbar; 