import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    
    const navigate = useNavigate(); 

    const handleStart = () => {
        navigate('/pantalla-principal'); 
    }; 

    return(
        <main className='d-flex flex-column justify-content-center align-items-center text-center'
            style={{
                backgroundImage: 'url("https://www.itdo.com/blog/content/images/2020/12/ITDO-diseno.jpg")',
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundAttachment: 'fixed',
                height: 'calc(100vh - 56px)', 
                color: 'white',
             }}
        > 
        <div 
            style={{
                width: '80%',
                height: '40%',
                backgroundColor:'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '20px',
                overflow: 'hidden',
                textAlign: 'center',
                marginBottom: '5%'
            }}
        >
            <p style={{fontSize: '1.2rem', margin: '10%', flexGrow: 1, color: 'black', textAlign: 'center'}}>
                En UX Search podras encontrar información acerca de diferentes métodos de evaluación UX, en conjunto a sus fuentes de origen, y un apartado para la selección de filtros de búsqueda los cuales permitirán encontrar el método acertado para tu proyecto.
            </p>
        </div>

        <div> 
            <button 
                type='button' 
                className='btn btn-primary btn-lg' 
                onClick={handleStart}  
        >
            Comenzar
            </button>
        </div>
        </main>
    );

}

export default Home; 
