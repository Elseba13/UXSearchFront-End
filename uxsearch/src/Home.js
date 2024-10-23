import React from "react";
import Navbar from "./Header";

const Home = () => {

    return(
        <>
           <Navbar /> 
           <section 
                className='d-flex flex-column justify-content-center align-items-start text-start'
                style={{
                    backgroundImage: 'linear-gradient(135deg, #00FF7F 0%, #00BFFF 50%, #FFFFFF 100%)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    height: '70vh', 
                    color: 'white',
                    padding: '2rem' // Ajusta el padding según lo que necesites
                }}
            >
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2d2d2d' }}>
                    Bienvenido a <span style={{ color: '#0D6EFD' }}>UXSearch</span>
                </h1>
                <p style={{ fontSize: '1.25rem', marginTop: '1rem', color: '#2d2d2d' }}>
                    Una plataforma donde podrás encontrar una gran cantidad de métodos de evaluación UX.
                </p>
               
            </section>


            <h2 
                style={{
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: "#0D6EFD", 
                    margin: '3rem 2rem 2rem auto', // Ajustar márgenes: top, right, bottom, left
                    textAlign: 'left', // Alinear el texto a la derecha
                    width: '90%' // Darle ancho para que se desplace a la derecha
                }}
            >
                Introduciendo a UXSearch
            </h2>

            <section className="d-flex flex-row justify-content-around" style={{padding: '3rem 2rem', backgroundColor: '#ff5f5f5'}}>


                <div style={{width: '20%', textAlign: 'center'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/13191/13191289.png" alt="Imagen 1" style={{width: '100%'}}/>
                    <h3 style={{marginTop: '1rem'}}>Acerca de nosotros</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div style={{width: '20%', textAlign: 'center'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/12421/12421344.png" alt="Imagen 2" style={{width: '100%'}}/>
                    <h3 style={{marginTop: '1rem'}}>¿Cual es nuestro objetivo?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                   
                </div>
            </section>
        </>
        
        
    );

}

export default Home; 
