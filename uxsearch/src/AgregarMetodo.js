import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const AgregarMetodo = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Form className="p-4 w-100" style={{ maxWidth: '600px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        
        {/* Espacio entre título y formulario */}
        <div className="bg-secondary-subtle text-dark p-3 rounded mb-4 text-center">
          <h4 className="m-0 font-weight-bold">Formulario para<br />Agregar Método</h4>
        </div>

        {/* Espacio adicional en la parte superior del formulario */}
        <div className="mt-4">

          {/* Campo: Nombre del Método */}
          <Form.Group controlId="nombreMetodo" className="mb-3 text-center">
            <Form.Label>Ingresar nombre del método</Form.Label>
            <Form.Control type="text" placeholder="Nombre del método" className="text-center" />
          </Form.Group>

          {/* Campo: Resumen */}
          <Form.Group controlId="resumen" className="mb-3 text-center">
            <Form.Label>Ingresar resumen</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Resumen del método" className="text-center" />
          </Form.Group>

          {/* Campo: Ventajas */}
          <Form.Group controlId="ventajas" className="mb-3 text-center">
            <Form.Label>Ingresar ventajas</Form.Label>
            <Form.Control as="textarea" rows={2} placeholder="Ventajas del método" className="text-center" />
          </Form.Group>

          {/* Campo: Desventajas */}
          <Form.Group controlId="desventajas" className="mb-3 text-center">
            <Form.Label>Ingresar desventajas</Form.Label>
            <Form.Control as="textarea" rows={2} placeholder="Desventajas del método" className="text-center" />
          </Form.Group>

          {/* Campo: Referencia en formato IEEE */}
          <Form.Group controlId="referencia" className="mb-3 text-center">
            <Form.Label>Ingresar referencia en formato IEEE</Form.Label>
            <Form.Control type="text" placeholder="Referencia en formato IEEE" className="text-center" />
          </Form.Group>

          {/* Filtros con Checkboxes */}
          <div className="p-3 bg-light rounded mb-4 text-center">
            <h5 className="mb-3">Filtros</h5>
            <Row>
              {['Filtro 1', 'Filtro 2', 'Filtro 3'].map((filtro, index) => (
                <Col key={index} md={4} className="mb-3">
                  <Form.Group controlId={`filtro${index}`}>
                    <Form.Label>{filtro}</Form.Label>
                    <div className="text-start"> {/* Alínea a la izquierda los checkboxes */}
                      {['Opción 1', 'Opción 2', 'Opción 3'].map((opcion, i) => (
                        <Form.Check 
                          key={i} 
                          type="checkbox" 
                          label={opcion} 
                          name={filtro.toLowerCase().replace(" ", "")} 
                        />
                      ))}
                    </div>
                  </Form.Group>
                </Col>
              ))}
            </Row>
          </div>

          {/* Botón de Agregar Método */}
          <Button variant="primary" type="submit" className="d-block mx-auto mb-4">
            Agregar método
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AgregarMetodo;
