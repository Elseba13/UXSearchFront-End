import React, { useEffect, useState } from "react";
import Filtros from "./Filtros";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card, InputGroup } from "react-bootstrap";
import Navbar from "./Header";
import ComponenteAyuda from './ComponenteAyuda';
import Footer from "./Footer";

function PantallaPrincipal() {
    const navigate = useNavigate();
    const [metodos, setMetodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMethods, setFilteredMethods] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]); 
    const [isAscending, setIsAscending] = useState(true);

    useEffect(() => {
        fetchMethods([]);
    }, []);

    const fetchMethods = async (filters) => {
        try {
            let response;
            if (filters.length === 0) {
                response = await fetch(`http://localhost:5000/api/metodos`);
            } else {
                const filtersToSend = filters.flat();
                const filterParams = new URLSearchParams();
                filterParams.append('filtros', JSON.stringify(filtersToSend));

                response = await fetch(`http://localhost:5000/api/filtros_metodos?${filterParams}`);
            }

            const data = await response.json();
            if (Array.isArray(data)) {
                setFilteredMethods(data);
                setMetodos(data);
            } else {
                console.error('La respuesta no es un arreglo:', data);
                setFilteredMethods([]);
            }
        } catch (error) {
            console.error('Error al obtener los métodos:', error);
            setFilteredMethods([]);
        }
    };

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
    };

    
    const handleApplyFilters = (updatedFilters) => {
        setSelectedFilters(updatedFilters);
        fetchMethods(updatedFilters);
    };
    
    const handleSortMethods = () => {
        const sorted = [...filteredMethods].sort((a, b) => {
            if (isAscending) {
                return a.nombre_metodo.localeCompare(b.nombre_metodo);
            } else {
                return b.nombre_metodo.localeCompare(a.nombre_metodo);
            }
        });
        setFilteredMethods(sorted);
        setIsAscending(!isAscending); // Cambia el orden para la próxima vez
    };

    return (
        <>
            <Navbar />
<<<<<<< HEAD
=======
            <div className="container my-4">
                <ComponenteAyuda
                titulo="Ayuda: Explicación de Filtros"
                contenido={
                    <p>
                    En esta pantalla encontrarás todos los métodos de evaluación disponibles en el sitio UxSearch
                    <br />
                    <br />
                    En el costado izquierdo puedes utilizar el sistema de filtrado, permitiendo seleccionar los filtros que se adecuen a lo que buscas.
                    <br />
                    <br />
                    En la parte superior encontrarás la barra de búsqueda predictiva, por lo que funcionará independiente ingreses una letra, un nombre de un método incompleto o completo.
                    <br />
                    <br />
                    Es importante que ingreses correctamente el nombre del método buscado, respetando tíldes y ortografía, si no lo haces, podrías no encontrar el método.
                    <br />
                    <br />
                    Finalmente en la parte inferior a la barra de búsqueda podrás visualizar el listado de métodos, donde se presentará el nombre, resúmen, y el botón "Leer más", que te permitirá obtener la información completa del método de evaluación.
                    </p>
                }
                />
            </div>
>>>>>>> cc6c4ea0e56385d8d3ca03db0c6b1e2259a6605b

            <Container fluid>
                <Row>
                    <Col xs={12} md={3} lg={2} className="bg-light">
                        <Filtros onApplyFilters={fetchMethods} />
                    </Col>

                    {/* 
                    <Col xs={12} md={3} lg={2} className="bg-light">
                        <Filtros onApplyFilters={handleApplyFilters} />
                    </Col>
                    }*/}
                    

                    <Col xs={12} md={9} lg={10}>
                        <br />
                        <div className="d-flex flex-column align-items-center p-3">
<<<<<<< HEAD
                            <div className="container my-4">
                                <ComponenteAyuda
                                    titulo="Ayuda: Explicación de Filtros"
                                    contenido={
                                        <p>
                                        En esta pantalla encontrarás todos los métodos de evaluación disponibles en el sitio UxSearch
                                        <br />
                                        <br />
                                        En el costado izquierdo puedes utilizar el sistema de filtrado, permitiendo seleccionar los filtros que se adecuen a lo que buscas.
                                        <br />
                                        <br />
                                        En la parte superior encontrarás la barra de búsqueda predictiva, por lo que funcionará independiente ingreses una letra, un nombre de un método incompleto o completo.
                                        <br />
                                        <br />
                                        Es importante que ingreses correctamente el nombre del método buscado, respetando tíldes y ortografía, si no lo haces, podrías no encontrar el método.
                                        <br />
                                        <br />
                                        Finalmente en la parte inferior a la barra de búsqueda podrás visualizar el listado de métodos, donde se presentará el nombre, resúmen, y el botón "Leer más", que te permitirá obtener la información completa del método de evaluación.
                                        </p>
                                    }   
                                />
                            </div>
                            <Form.Control
                                type="text"
                                placeholder="Ingresar nombre del método de evaluación"
                                className="mb-4"
                                style={{ width: '100%' }}
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
=======
                        <Row className="align-items-center mb-4" style={{ width: '100%' }}>
                        <Col xs={9} md={10}>
                            <InputGroup>
                                <InputGroup.Text>
                                    <span className="material-icons">search</span>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar nombre del método de evaluación"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={3} md={2}>
                            <Button 
                                variant="secondary" 
                                onClick={handleSortMethods} 
                                style={{ width: '100%' }}>
                                Ordenar {isAscending ? 'A-Z' : 'Z-A'}
                            </Button>
                        </Col>
                    </Row>

>>>>>>> cc6c4ea0e56385d8d3ca03db0c6b1e2259a6605b

                            <Row className="justify-content-center" style={{ width: '100%' }}>
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
            <Footer/> 
        </>
    );
}

export default PantallaPrincipal;
