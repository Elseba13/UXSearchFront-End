import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom"; 

const Login = () => {

  const navigate = useNavigate(); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [errors, setErrors] = useState({ email: '', password: '' }); 

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); 
  };

  const validateForm = () => {
    let valid = true; 
    let newErrors = { email: '', password: '' }; 

    if (!email) {
      newErrors.email = 'El correo es obligatorio'; 
      valid = false; 
    } else if (!validateEmail(email)) {
      newErrors.email = 'Ingrese un correo electrónico válido'; 
      valid = false; 
    }

    if (!password) {
      newErrors.password = 'La contraseña es obligatoria.'; 
      valid = false; 
    }

    setErrors(newErrors);
    return valid; 
  };

  const handleStart = (e) => {
    e.preventDefault(); 
    if (validateForm()) {
      navigate('/pantalla-principal-admin');
    }
  };

  return (
    <section className="vh-60">
      <div className="container py-5 h-60">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-primary text-white" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Iniciar Sesión</h2>
                  <p className="text-white-50 mb-5">
                    Ingresa tu correo y contraseña
                  </p>

                  <div className="mb-4 text-start">
                    <label className="form-label" htmlFor="typeEmailX" style={{ fontWeight: 'bold' }}>
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <small className="text-warning">{errors.email}</small>}
                  </div>

                  <div className="mb-4 text-start">
                    <label className="form-label" htmlFor="typePasswordX" style={{ fontWeight: 'bold' }}>
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <small className="text-warning">{errors.password}</small>}
                  </div>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={handleStart}
                  >
                    Ingresar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;