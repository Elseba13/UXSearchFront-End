import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Header from './Header'; 
import PantallaPrincipal from './PantallaDeBusqueda'; 
import Home from './Home'; 

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pantalla-principal" element = {<PantallaPrincipal/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App; 

