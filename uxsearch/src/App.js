import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import PantallaPrincipal from './PantallaDeBusqueda'; 
import Home from './Home'; 
import InfoMetodo from './InfoMetodo';
import Login from './LoginAdmin';
import Footer from './Footer';
import ExplicacionFiltros from './ExplicacionFiltros';
import DashboardCircular from "./Dashboard";
import AgregarMetodo from "./AgregarMetodo";
import EditarMetodo from "./EditarMetodo";
import PantallaPrincipalAdmin from "./PantallaPrincipalAdmin";
import InfoMetodoAdmin from "./InfoMetodoAdmin";
import HomeAdmin from "./HomeAdmin";


//"importación" para poder utilizar los iconos de google
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
link.rel = 'stylesheet';
document.head.appendChild(link);


const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pantalla-principal" element = {<PantallaPrincipal/>} /> 
            <Route path="/info-metodo/:id" element={<InfoMetodo />} /> 
            <Route path="/login-admin" element ={<Login/>} />
            <Route path="/explicacion-filtros" element ={<ExplicacionFiltros/>} />
            <Route path="/dashboard" element = {<DashboardCircular/>} />
            <Route path="/agregar-metodo" element = {<AgregarMetodo/>} />
            <Route path="/editar-metodo/:id" element = {<EditarMetodo/>} />
            <Route path="/pantalla-principal-admin" element = {< PantallaPrincipalAdmin/>} /> 
            <Route path="/info-metodo-admin/:id" element = {< InfoMetodoAdmin/>} /> 
            <Route path="/home-admin" element={< HomeAdmin />}/>
          </Routes>
        </div>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App; 

