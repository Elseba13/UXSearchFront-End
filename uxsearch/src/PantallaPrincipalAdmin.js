import React, { useEffect, useState } from "react";
import Filtros from "./Filtros"; 
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import CardAdmin from "./Card"; 
import ComponenteAyuda from './ComponenteAyuda';
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";

function PantallaPrincipalAdmin() {
    const navigate = useNavigate();
    const [metodos, setMetodos] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 
    const [filteredMethods, setFilteredMethods] = useState([]); 
    const [selectedFilters, setSelectedFilters] = useState([]); 
    const [isAscending, setIsAscending] = useState(true);
    const [loading, setLoading] = useState(true); 
    const [currentPage, setCurrentPage] = useState(1); 
    const methodsPerPage = 5; 

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
                setMetodos(data);
                setFilteredMethods(data);
            } else {
                console.error('La respuesta no es un arreglo:', data);
                setFilteredMethods([]);
            }
        } catch (error) {
            console.error('Error al obtener los métodos:', error);
            setFilteredMethods([]);
        } finally {
            setLoading(false);
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

    const handleStart = (id) => {
        navigate(`/info-metodo-admin/${id}`); 
    };

    const handleEdit = (id) => {
        navigate(`/editar-metodo/${id}`); 
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/methods/${id}`, {
                method: 'DELETE',
            }); 

            if(response.ok){
                setMetodos(metodos.filter(metodo => metodo.id_metodo !== id)); 
                setFilteredMethods(filteredMethods.filter(metodo => metodo.id_metodo !== id));
                console.log("Método eliminado correctamente"); 
            } else {
                console.log("Error al eliminar el método"); 
            }

        } catch(error) {
            console.error("Error al eliminar el método:", error); 
        }
    };

    const indexOfLastMethod = currentPage * methodsPerPage; 
    const indexOffFirstMethod = indexOfLastMethod - methodsPerPage; 
    const currentMethods = filteredMethods.slice(indexOffFirstMethod, indexOfLastMethod); 

    const goToPreviusPage = () => {
        if(currentPage > 1) setCurrentPage(currentPage - 1);
    }; 

    const goToNextPage = () => {
        if(currentPage < Math.ceil(filteredMethods.length / methodsPerPage)){
            setCurrentPage(currentPage + 1); 
        }
    };

    if (loading) {
        return <div>Cargando...</div>; 
    }

    return (
        <>
        <HeaderAdmin/>
        <Row className="my-4">
            <Col xs={8} md={8} className="d-flex justify-content-center mx-auto">
                <div className="alert alert-warning d-flex align-items-center" role="alert" style={{ width: '100%' }}>
                    <span className="material-icons" style={{ marginRight: '8px' }}>warning</span>
                    <span>
                        Por favor, haz clic en el ícono de ayuda 
                        <span className="material-icons" style={{ marginLeft: '8px', verticalAlign: 'middle' }}>help_outline </span>  
                        si deseas obtener información sobre el listado de métodos.
                    </span>
                </div>
            </Col>

            <Col xs={12} md="auto" className="d-flex justify-content-end align-items-center" style={{ marginRight: '20px' }}>
                <ComponenteAyuda
                    titulo="Instructivo para agregar un método"
                    contenido={
                        <p>
                        Bienvenido a la pantalla de administrador y listado de métodos.
                        <br />
                        <br />
                        Con las funciones de administrador en el listado de métodos, podrás visualizar los métodos disponibles de UXMethodsSearcher, modificar su información, o simplemente eliminarlos.
                        <br />
                        <br />
                        En el costado izquierdo puedes utilizar el sistema de filtrado, te permitirá seleccionar los filtros que se adecuen a lo que buscas.
                        <br />
                                <br />
                                En la parte superior encontrarás la barra de búsqueda predictiva, por lo que funcionará independiente ingreses una letra, un nombre de un método incompleto o completo.
                                <br />
                                <br />
                                Es importante que ingreses correctamente el nombre del método buscado, respetando tíldes y ortografía, si no lo haces, podrías no encontrar el método.
                                <br />
                                <br />
                                En la parte inferior a la barra de búsqueda podrás visualizar el listado de métodos, donde se presentará el nombre, resúmen, y el botón "Leer más", que te permitirá obtener la información completa del método de evaluación.
                                <br />
                                <br />
                                Gracias a las funciones de administrador, se agregó un nuevo botón <span className="material-icons" style={{ verticalAlign: 'middle', marginRight: '8px', color: '#006400' }}> more_vert </span>
                                que te permitirá acceder a las funciones Editar y Eliminar.
                        </p>
                    }
                    botonEstilo={{
                        color: '#006400',
                        borderColor: '#006400',
                    }}
                    botonCerrarEstilo={{
                        borderColor: '#006400',
                        backgroundColor: '#006400',
                    }}
                    />
                </Col>
            </Row>

            <Container fluid>
                <Row>
                    <Col xs={12} md={3} lg={2} className="bg-light">
                        <Filtros onApplyFilters={handleApplyFilters} />
                    </Col>
                    <Col xs={12} md={9} lg={10}>
                        <div className="d-flex flex-column align-items-center p-3">
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



                            <Row className="justify-content-center" style={{ width: '100%' }}>
                                {currentMethods.map((metodo) => (
                                    <Col key={metodo.id_metodo} xs={12} md={10} lg={12} className="mb-4">
                                        <CardAdmin 
                                            nombreMetodo={metodo.nombre_metodo} 
                                            resumenMetodo={metodo.resumen_metodo}
                                            handleStart={() => handleStart(metodo.id_metodo)}
                                            handleEdit={() => handleEdit(metodo.id_metodo)}   
                                            handleDelete={() => handleDelete(metodo.id_metodo)}  
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <div className="d-flex justify-content-center mt-3" style={{marginBottom: '20px'}}>
                <Button
                    onClick={goToPreviusPage}
                    disabled={currentPage === 1}
                    style={{backgroundColor: '#006400', borderColor: '#006400', color: 'white', marginRight: '10px'}}
                >
                    Anterior
                </Button>
                <span>Pagina {currentPage} de {Math.ceil(filteredMethods.length / methodsPerPage)}</span>
                <Button
                    onClick={goToNextPage}
                    disabled={currentPage === Math.ceil(filteredMethods.length / methodsPerPage)}
                    style={{backgroundColor: '#006400', borderColor: '#006400', color: 'white', marginLeft: '10px'}}
                >
                    Siguiente
                </Button>
             </div>

            <FooterAdmin/> 
        </>
    );
}

export default PantallaPrincipalAdmin;