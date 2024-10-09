import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const InfoMetodo = () => {
  return (
    <Container fluid className="mt-5"> {/* Aumento de margen superior */}
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Card className="mb-4" style={{ borderRadius: '15px' }}>
            <Card.Body>
              <Card.Title>Nombre del Método</Card.Title>
              <Card.Text>
                Resumen del Método: Resumen explicativo del método.
              </Card.Text>
              <Row>
                <Col>
                  <div style={{ border: '1px solid #007bff', padding: '15px', borderRadius: '8px' }}>
                    <h5 style={{ color: '#007bff' }}>Ventajas</h5>
                    <ul>
                      <li>Ventaja 1</li>
                      <li>Ventaja 2</li>
                      <li>Ventaja 3</li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div style={{ border: '1px solid #007bff', padding: '15px', borderRadius: '8px' }}>
                    <h5 style={{ color: '#007bff' }}>Desventajas</h5>
                    <ul>
                      <li>Desventaja 1</li>
                      <li>Desventaja 2</li>
                      <li>Desventaja 3</li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Card.Text className="mt-3">Fuente de origen de la información del método</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoMetodo;
