import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Header from './Header'; 
import PantallaPrincipal from './PantallaDeBusqueda'; 
import Home from './Home'; 
import InfoMetodo from './InfoMetodo';

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pantalla-principal" element = {<PantallaPrincipal/>} /> 
          <Route path="/info-metodo" element ={<InfoMetodo/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 

