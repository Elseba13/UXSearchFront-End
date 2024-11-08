import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import HeaderAdmin from "./HeaderAdmin";
import ComponenteAyuda from './ComponenteAyuda';

function EditarMetodo() {
    const { id } = useParams(); 
    const navigate = useNavigate();  
    const [metodo, setMetodo] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [nombreOriginal, setNombreOriginal] = useState('');
    const [filters, setFilters] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        const fetchMetodo = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/methods/${id}`);
                if (!response.ok) {
                    throw new Error('Error al obtener el método');
                }
                const data = await response.json();
                setMetodo(data);
                setNombreOriginal(data.nombre_metodo);
    
                const filtersResponse = await fetch('http://localhost:5000/api/filtrosEdicion');
                const fetchedFilters = await filtersResponse.json();
                setFilters(fetchedFilters);
    
                const selectedResponse = await fetch(`http://localhost:5000/api/filtrosMetodo/${id}`);
                const selected = await selectedResponse.json();
                setSelectedFilters(selected.map(f => f.id_filtro));
    
            } catch (error) {
                console.error("Error al obtener el método:", error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchMetodo();
    }, [id]);
    
    // Agrupar filtros por categoría
    const groupedFilters = filters.reduce((acc, filter) => {
        const { nombre_categoria, id_filtro, nombre } = filter;
        if (!acc[nombre_categoria]) {
            acc[nombre_categoria] = []; 
        }
        acc[nombre_categoria].push({ id_filtro, nombre }); 
        return acc;
    }, {});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMetodo(prevMetodo => ({
            ...prevMetodo,
            [name]: value
        }));
    };

    const handleCheckboxChange = (filterId) => {
        if (selectedFilters.includes(filterId)) {
            setSelectedFilters(selectedFilters.filter(f => f !== filterId));
        } else {
            setSelectedFilters([...selectedFilters, filterId]);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedData = {
                ...metodo,
                filtros_seleccionados: selectedFilters,
            };
    
            console.log("Datos enviados al backend:", updatedData); // Verifica los datos antes de enviarlos
    
            const response = await fetch(`http://localhost:5000/editar-metodo-new/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
    
            if (response.ok) {
                console.log("Método actualizado correctamente");
                navigate('/pantalla-principal-admin');
            } else {
                console.log("Error al actualizar el método");
            }
        } catch (error) {
            console.error("Error al actualizar el método:", error);
        }
    };
    

    if (loading) {
        return <div>Cargando...</div>; 
    }

    if (!metodo) {
        return <div>No se encontró el método.</div>; 
    }

    return (
        <>
            <HeaderAdmin />
            <div className="container my-4">
                <ComponenteAyuda
                titulo="Instructivo para agregar un método"
                contenido={
                    <p>
                    En esta pantalla encontrarás un formulario que te permitirá editar los campos de un método de UxSearch
                    <br />
                    <br />
                    No es necesario que modifiques todos los campos, solo los que tu encuentres necesarios.
                    <br />
                    <br />
                    Para realizar la modificación, simplemente debes cambiar el texto en los campos de texto, ingresando la nueva información que te gustaría mostrar.
                    <br />
                    <br />
                    Para modificar ventajas y desventajas se mantiene el formato del formulario para agregar nuevos métodos, por medio de un salto de línea, una coma (,), o un punto y coma (;), lo que sea más comodo para ti.
                    <br />
                    Por ejemplo: Ventaja1, Ventaja2, Ventaja3.
                    <br />
                    <br />
                    La referencia debe ser ingresada en formato IEEE.
                    <br />
                    Por ejemplo: 
                    <br />
                    Libros: Iniciales y Apellido/s del autor, Título del libro en cursiva. Edición. Lugar de publicación: Editorial, Año de publicación.
                    <br />
                    Revistas: Iniciales y Apellido del autor, "Título del artículo entre comillas", Título abreviado de la revista en cursiva, volumen (abreviado vol.), número abreviado (no.) páginas (abreviado pp.), Mes Año.
                    <br />
                    Apuntes de clase: "Título de los apuntes o materia", class notes for Código de la asignatura, Departamento, Institución o Universidad, época y año.
                    <br />
                    Sitio web: Iniciales y Apellido del autor (año, mes y día). Título (edición) [Tipo de medio, generalmente Online]. Available: Url
                    <br />
                    <br />
                    Finalmente puedes editar los filtros del método, desmarcando filtros antiguos, y marcando los nuevos.
                    <br />
                    <br />
                    Recuerda dejar al menos un filtro para el método.
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
            </div>

            <div className="position-absolute" style={{ top: '65px', left: '20px' }}>
                <Button variant="outline-primary" style={{ color: '#FFFFFF', borderColor: '#006400', backgroundColor: '#006400'}} onClick={() => navigate('/pantalla-principal-admin')}>
                <span className="material-icons" style={{ verticalAlign: 'middle', marginRight: '8px', color: '#FFFFFF' }}>
                    arrow_back
                </span>
                Regresar al listado de métodos
                </Button>
            </div>
            <br />
            <br />

            <div className="container my-4">
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="alert alert-warning d-flex align-items-center" role="alert">
                        <span className="material-icons" style={{ marginRight: '8px' }}>warning</span>
                        <span>
                            Por favor, haz clic en el ícono de ayuda 
                            <span className="material-icons" style={{ marginLeft: '8px', verticalAlign: 'middle' }}>help_outline</span> 
                            antes de comenzar a llenar el formulario.
                        </span>
                        </div>
                    </Col>
                </Row>
            </div>

            <Container fluid className="mt-5"> 
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8}>
                        <div className="bg-secondary-subtle text-dark p-3 rounded mb-4">
                            <p className="lead mb-0">
                                En esta página podrás editar la información del método que has seleccionado.
                                <br />
                                Recuerda, no es necesario que edites todos los campos.
                            </p>
                        </div>
                        <Card className="mb-4" style={{ borderRadius: '15px' }}>
                            <Card.Body>
                                <div className="bg-secondary-subtle text-dark p-3 rounded text-center mb-4">
                                    <h2 className="mb-0" style={{ fontWeight: '800', fontSize: '2rem' }}>Edición del Método</h2>
                                    <h5 className="text-muted">"{nombreOriginal}"</h5>
                                </div>

                                <br />

                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formNombreMetodo">
                                        <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Ingresar nuevo nombre del método</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="nombre_metodo"
                                            value={metodo.nombre_metodo || ''} 
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formResumenMetodo" className="mt-3">
                                        <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Ingresar nuevo resumen del método</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="resumen_metodo"
                                            value={metodo.resumen_metodo || ''} 
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formVentajasMetodo" className="mt-3">
                                        <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Ingresar nuevas ventajas del método</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="ventajas_metodo"
                                            value={metodo.ventajas_metodo || ''} 
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formDesventajasMetodo" className="mt-3">
                                        <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Ingresar nuevas desventajas del método</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="desventajas_metodo"
                                            value={metodo.desventajas_metodo || ''} 
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formReferenciaMetodo" className="mt-3">
                                        <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Ingresar nueva referencia del método</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="referencia_metodo"
                                            value={metodo.referencia_metodo || ''} 
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formFiltrosMetodo" className="mt-3">
                                        <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                                            Seleccionar filtros del método
                                        </Form.Label>
                                        {Object.entries(groupedFilters).map(([categoria, filtros]) => (
                                            <div key={categoria}>
                                                <h6 className="fw-bold">{categoria}</h6> 
                                                {filtros.map(filtro => (
                                                    <Form.Check
                                                        key={filtro.id_filtro}
                                                        type="checkbox"
                                                        label={filtro.nombre}
                                                        checked={selectedFilters.includes(filtro.id_filtro)}
                                                        onChange={() => handleCheckboxChange(filtro.id_filtro)}
                                                    />
                                                ))}
                                                <hr />
                                            </div>
                                        ))}
                                    </Form.Group>


                                    <Button variant="primary" type="submit" style={{backgroundColor: '#006400'}} className="mt-3 mx-auto d-block">
                                        Guardar Cambios
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default EditarMetodo;