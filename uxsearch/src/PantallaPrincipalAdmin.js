import React, { useEffect, useState } from "react";
import Filtros from "./Filtros"; 
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CardAdmin from "./Card"; 
import HeaderAdmin from "./HeaderAdmin";

function PantallaPrincipalAdmin() {

    const [metodos, setMetodos] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 
    const [filteredMethods, setFilteredMethods] = useState([]); 
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchMethods = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/methods'); // URL de tu backend
                const data = await response.json();
    
                const validMethods = data.filter(metodo => metodo.id_metodo && metodo.nombre_metodo);
    
                setMetodos(validMethods);
                setFilteredMethods(validMethods); // Inicialmente mostrar todos los métodos
            } catch (error) {
                console.error('Error al obtener los métodos:', error);
            }
        };

        fetchMethods();
    }, []);

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm); 

        const filtered = metodos.filter(metodo =>
            metodo.nombre_metodo.toLowerCase().includes(searchTerm)
        ); 
        setFilteredMethods(filtered); 
    }; 

    const handleStart = (id) => {
        navigate(`/info-metodo/${id}`); 
    }

    const handleEdit = () => {
        console.log("editar"); 
    }

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/methods/${id}`, {
                method: 'DELETE',
            }); 

            if(response.ok){
                setMetodos(metodos.filter(metodo => metodo.id_metodo !== id)); 
                setFilteredMethods(filteredMethods.filter(metodo=> metodo.id_metodo !== id));
                console.log("Metodo eliminado correctamente"); 
            }else{
                console.log("Error al eliminar el método"); 
            }

        }catch(error){
            console.error("Error al eliminar el método:",error); 
        }
    }

    return(
        <>
            <HeaderAdmin/>
            
            <Container fluid>
                <Row>
                 
                    <Col xs={12} md={3} lg={2} className="bg-light">
                         <Filtros />
                    </Col>

                 
                    <Col xs={12} md={9} lg={10}>
                        <div className="d-flex flex-column align-items-center p-3"> 
                         
                            <Form.Control 
                                type="text"
                                placeholder="Ingresar nombre del método de evaluación"
                                className="mb-4"
                                style={{width: '100%'}}
                                value={searchTerm}
                                onChange={handleSearchChange} 
                            />
                           
                            <Row className="justify-content-center" style={{width: '80%'}}>
                                {filteredMethods.map((metodo) => (
                                    <Col key={metodo.id_metodo} xs={12} md={10} lg={12} className="mb-4">
                                        <CardAdmin 
                                            nombreMetodo={metodo.nombre_metodo} 
                                            resumenMetodo={metodo.resumen_metodo}
                                            handleStart={() => handleStart(metodo.id_metodo)}
                                            handleEdit={handleEdit}   
                                            handleDelete={() => handleDelete(metodo.id_metodo)}  
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PantallaPrincipalAdmin; 