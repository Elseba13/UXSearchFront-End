import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 

const HeaderAdmin = () => {

    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/pantalla-principal-admin">UXSearch</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link text-white" href="/pantalla-principal-admin">Inicio</a>
                        <a className="nav-link text-white" href="/editar-metodo">Editar Metodo</a>
                        <a className="nav-link text-white" href="/">Cerrar sesión</a>
                    </div>
                </div>
            </div>
        </nav>
    ); 
}

export default HeaderAdmin; 