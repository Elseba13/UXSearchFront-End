import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { Form, Button, Container } from "react-bootstrap";

function EditarMetodo() {
    const { id } = useParams(); 
    const navigate = useNavigate();  
    const [metodo, setMetodo] = useState(null); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchMetodo = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/methods/${id}`); 
                
                if (!response.ok) {
                    throw new Error('Error al obtener el método');
                }
                
                const data = await response.json();
                setMetodo(data); 
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/methods/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(metodo),  
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
        <Container>
            <h2>Editar Método</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNombreMetodo">
                    <Form.Label>Nombre del Método</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre_metodo"
                        value={metodo.nombre_metodo || ''} 
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formResumenMetodo">
                    <Form.Label>Resumen</Form.Label>
                    <Form.Control
                        type="text"
                        name="resumen_metodo"
                        value={metodo.resumen_metodo || ''} 
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formVentajasMetodo">
                    <Form.Label>Ventajas</Form.Label>
                    <Form.Control
                        type="text"
                        name="ventajas_metodo"
                        value={metodo.ventajas_metodo || ''} 
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDesventajasMetodo">
                    <Form.Label>Desventajas</Form.Label>
                    <Form.Control
                        type="text"
                        name="desventajas_metodo"
                        value={metodo.desventajas_metodo || ''} 
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formReferenciaMetodo">
                    <Form.Label>Referencia</Form.Label>
                    <Form.Control
                        type="text"
                        name="referencia_metodo"
                        value={metodo.referencia_metodo || ''} 
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar Cambios
                </Button>
            </Form>
        </Container>
    );
}

export default EditarMetodo;
