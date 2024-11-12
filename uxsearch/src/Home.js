import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";

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
                    margin: '3rem 2rem 2rem auto',
                    textAlign: 'left', 
                    width: '90%' 
                }}
            >
                Introduciendo a UXSearch
            </h2>

            <section className="d-flex flex-row justify-content-around" style={{padding: '3rem 2rem', backgroundColor: '#ff5f5f5'}}>


                <div style={{width: '25%', textAlign: 'center'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/13191/13191289.png" alt="Imagen 1" style={{width: '40%'}}/>
                    <h3 style={{marginTop: '1rem', color: '#0D6EFD'}}>Acerca de nosotros</h3>
                    <p>Somos Sebastián Quiroga y Gonzalo Díaz, estudiantes de la Pontificia Universidad Católica de Valparaíso, realizando nuestro proyecto de título, donde nos enfocamos en trabajar una de las áreas de nuestro interés, que sería la experiencia del usuario (UX).</p>
                </div>

                <div style={{width: '25%', textAlign: 'center'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/12421/12421344.png" alt="Imagen 2" style={{width: '40%'}}/>
                    <h3 style={{marginTop: '1rem', color: '#0D6EFD'}}>¿Cual es nuestro objetivo?</h3>
                    <p>Tras cursar ramos enfocados en UX, e investigar acerca de los métodos de evaluación de la experiencia del usuario, nos dimos cuenta que no existen muchos sitios enfocados a esta temática, o la información es breve, o permiten la busqueda personalizada permitiendo interactuar con un sistema de filtrado, por lo que decidimos enfocarnos en realizar un sitio que les permita a los usuarios una busqueda más rápida y cómoda.</p>                   
                </div>
            </section>
            <Footer/> 
        </>
        
        
    );

}

export default Home; 
