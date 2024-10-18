import React, { useEffect, useState } from "react";
import Filtros from "./Filtros";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Navbar from "./Header";

function PantallaPrincipal() {
    const navigate = useNavigate();
    const [metodos, setMetodos] = useState([]); // Estado para métodos desde la base de datos
    const [searchTerm, setSearchTerm] = useState(''); // Estado para la barra de búsqueda
    const [filteredMethods, setFilteredMethods] = useState([]); // Estado para métodos filtrados

    useEffect(() => {
        const fetchMethods = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/methods');
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

    // Manejar el cambio de la barra de búsqueda
    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);
        
        // Filtrar métodos en función del término de búsqueda
        const filtered = metodos.filter(metodo =>
            metodo.nombre_metodo.toLowerCase().includes(searchTerm)
        );
        setFilteredMethods(filtered);
    };

    const handleStart = (id) => {
        navigate(`/info-metodo/${id}`);
    };

    return (
        <>
            <Navbar />
            <Container fluid>
                <Row>
                    <Col xs={12} md={3} lg={2} className="bg-light">
                        <Filtros />
                    </Col>

                    <Col xs={12} md={9} lg={10}>
                        <div className="d-flex flex-column align-items-center p-3">
                            {/* Barra de búsqueda */}
                            <Form.Control
                                type="text"
                                placeholder="Ingresar nombre del método de evaluación"
                                className="mb-4"
                                style={{ width: '100%' }}
                                value={searchTerm}
                                onChange={handleSearchChange} // Llamar al manejar cambio
                            />

                            <Row className="justify-content-center" style={{ width: '80%' }}>
                                {/* Mostrar métodos filtrados */}
                                {filteredMethods.map((metodo) => (
                                    <Col key={metodo.id_metodo} xs={12} md={10} lg={12} className="mb-4">
                                        <Card style={{ borderRadius: '15px' }}>
                                            <Card.Body>
                                                <Card.Title>{metodo.nombre_metodo}</Card.Title>
                                                <Card.Text>{metodo.resumen_metodo}</Card.Text>
                                                <Button 
                                                    variant="primary" 
                                                    onClick={() => handleStart(metodo.id_metodo)}>
                                                    Leer más
                                                </Button>
                                            </Card.Body>
                                        </Card>
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

export default PantallaPrincipal;
