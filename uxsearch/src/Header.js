import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
            
            
                <a className="navbar-brand" href="/">
                    UXMethodsSearcher
                </a>

            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <a className="nav-link text-white" href="/pantalla-principal">Listado métodos</a>
                        <a className="nav-link text-white" href="/explicacion-filtros">Explicación filtros</a>         
                    </div>

                
                    <div className="d-flex">
                        <a href="/login-admin" className="btn btn-outline-light ms-lg-2">Login</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
