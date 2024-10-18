import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; 
import Navbar from './Header';

const InfoMetodo = () => {
  const { id } = useParams(); 
  const [metodo, setMetodo] = useState(null);

  useEffect(() => {
    const fetchMetodo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/methods/${id}`);
        const data = await response.json();
        setMetodo(data); 
      } catch (error) {
        console.error('Error al obtener el método:', error);
      }
    };

    fetchMetodo();
  }, [id]); 

  if (!metodo) {
    return <p>Se está cargando la información</p>; 
  }

  return (
    <>
      <Navbar />
      <Container fluid className="mt-5"> 
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Card className="mb-4" style={{ borderRadius: '15px' }}>
              <Card.Body>
                <Card.Title>{metodo.nombre_metodo}</Card.Title>
                <Card.Text>
                  Resumen del Método: {metodo.resumen_metodo}
                </Card.Text>
                <Row>
                  <Col>
                    <div style={{ border: '1px solid #007bff', padding: '15px', borderRadius: '8px' }}>
                      <h5 style={{ color: '#007bff' }}>Ventajas</h5>
                      <ul>
                        {metodo.ventajas_metodo.split(';').map((ventaja, index) => (
                          <li key={index}>{ventaja}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                  <Col>
                    <div style={{ border: '1px solid #007bff', padding: '15px', borderRadius: '8px' }}>
                      <h5 style={{ color: '#007bff' }}>Desventajas</h5>
                      <ul>
                        {metodo.desventajas_metodo.split(';').map((desventaja, index) => (
                          <li key={index}>{desventaja}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
                <Card.Text className="mt-3">
                  Fuente de origen de la información: {metodo.referencia_metodo}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InfoMetodo;
