import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import HeaderAdmin from './HeaderAdmin';

const EditarMetodo = () => {
  const [nombreMetodo, setNombreMetodo] = useState('Nombre del Método');
  const [resumenMetodo, setResumenMetodo] = useState('Resumen explicativo del método.');
  const [ventajas, setVentajas] = useState(['Ventaja 1', 'Ventaja 2', 'Ventaja 3']);
  const [desventajas, setDesventajas] = useState(['Desventaja 1', 'Desventaja 2', 'Desventaja 3']);
  const [fuente, setFuente] = useState('Fuente de origen de la información del método');

  const handleSave = () => {
    console.log('Datos guardados:', { nombreMetodo, resumenMetodo, ventajas, desventajas, fuente });
  };

  return (

    <>
    <HeaderAdmin /> 
    <Container fluid className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          {/* Título de la página */}
          <div className="bg-secondary-subtle text-dark p-3 rounded mb-4 text-center">
            <h4 className="m-0 font-weight-bold">Edición del Método</h4>
          </div>
          <Card className="mb-4" style={{ borderRadius: '15px' }}>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Nombre del Método</Form.Label>
                  <Form.Control
                    type="text"
                    value={nombreMetodo}
                    onChange={(e) => setNombreMetodo(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Resumen del Método</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={resumenMetodo}
                    onChange={(e) => setResumenMetodo(e.target.value)}
                  />
                </Form.Group>

                <Row className="mt-3">
                  <Col>
                    <div style={{ border: '1px solid #007bff', padding: '15px', borderRadius: '8px' }}>
                      <h5 style={{ color: '#007bff' }}>Ventajas</h5>
                      <ul>
                        {ventajas.map((ventaja, index) => (
                          <li key={index}>
                            <Form.Control
                              type="text"
                              value={ventaja}
                              onChange={(e) => {
                                const updatedVentajas = [...ventajas];
                                updatedVentajas[index] = e.target.value;
                                setVentajas(updatedVentajas);
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                  <Col>
                    <div style={{ border: '1px solid #007bff', padding: '15px', borderRadius: '8px' }}>
                      <h5 style={{ color: '#007bff' }}>Desventajas</h5>
                      <ul>
                        {desventajas.map((desventaja, index) => (
                          <li key={index}>
                            <Form.Control
                              type="text"
                              value={desventaja}
                              onChange={(e) => {
                                const updatedDesventajas = [...desventajas];
                                updatedDesventajas[index] = e.target.value;
                                setDesventajas(updatedDesventajas);
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>

                <Form.Group className="mt-3">
                  <Form.Label>Fuente</Form.Label>
                  <Form.Control
                    type="text"
                    value={fuente}
                    onChange={(e) => setFuente(e.target.value)}
                  />
                </Form.Group>

                <div className="text-center mt-4 mb-5">
                  <Button onClick={handleSave}>Guardar Cambios</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
    
  );
};

export default EditarMetodo;
