import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import HeaderAdmin from "./HeaderAdmin";

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

                const filtersResponse = await fetch('http://localhost:5000/api/filtros'); 
                const fetchedFilters = await filtersResponse.json();
                setFilters(fetchedFilters);

                const selectedResponse = await fetch(`http://localhost:5000/api/filtros-metodo/${id}`); 
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

            const response = await fetch(`http://localhost:5000/editar-metodo/${id}`, {

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

                                    <Row className="mt-3">
                                        <Col>
                                            <Form.Group controlId="formVentajasMetodo">
                                                <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Ingresar nuevas ventajas del método</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="ventajas_metodo"
                                                    value={metodo.ventajas_metodo || ''} 
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="formDesventajasMetodo">
                                                <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Ingresar nuevas desventajas del método</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="desventajas_metodo"
                                                    value={metodo.desventajas_metodo || ''} 
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group controlId="formReferenciaMetodo" className="mt-3">
                                        <Form.Label style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Ingresar nueva referencia del método</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="referencia_metodo"
                                            value={metodo.referencia_metodo || ''} 
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <br />
                                    <h4>Seleccionar Filtros</h4>
                                    {filters.map((filter) => (
                                        <div className="form-check" key={filter.id_filtro}>
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id={`filtro-${filter.id_filtro}`}
                                                checked={selectedFilters.includes(filter.id_filtro)}
                                                onChange={() => handleCheckboxChange(filter.id_filtro)}
                                            />
                                            <label className="form-check-label" htmlFor={`filtro-${filter.id_filtro}`}>
                                                {filter.nombre}
                                            </label>
                                        </div>
                                    ))}

                                    <div className="d-flex justify-content-center">
                                        <Button onClick={handleSubmit} variant="primary" type="submit" className="mt-3">
                                            Guardar Cambios
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default EditarMetodo;
