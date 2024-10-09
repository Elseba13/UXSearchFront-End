import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Header from './Header'; 
import PantallaPrincipal from './PantallaDeBusqueda'; 
import Home from './Home'; 
import InfoMetodo from './InfoMetodo';
import Login from './LoginAdmin'

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pantalla-principal" element = {<PantallaPrincipal/>} /> 
          <Route path="/info-metodo" element ={<InfoMetodo/>} />
          <Route path="/login-admin" element ={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 

