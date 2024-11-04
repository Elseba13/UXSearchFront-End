import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/Navbar.css'; 

const HeaderAdmin = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: '#006400'}}> 
            <div className="container-fluid">
            
            
                <a className="navbar-brand" href="/home-admin">
                    UXSearch
                </a>

            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <a className="nav-link text-white" href="/pantalla-principal-admin">Listado métodos</a>
                        <a className="nav-link text-white" href="/agregar-metodo">Agregar método</a>            
                    </div>

                
                    <div className="d-flex">
                        <a href="/" className="btn btn-outline-light ms-lg-2" style={{backgroundColor: '#006400'}}>Cerrar sesión</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default HeaderAdmin; 