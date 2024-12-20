import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom'; 
import Navbar from './HeaderAdmin';
import FooterAdmin from './FooterAdmin';

const InfoMetodoAdmin = () => {
  const { id } = useParams(); 
  const [metodo, setMetodo] = useState(null);
  const navigate = useNavigate(); // Hook para manejar la navegación

  useEffect(() => {
    const fetchMetodo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/methods/${id}/filtros`);
        const data = await response.json();
        setMetodo(data); 
      } catch (error) {
        console.error('Error al obtener el método:', error);
      }
    };

    fetchMetodo();
  }, [id]); 

  if (!metodo) {
    return <p>Se está cargando la información...</p>; 
  }

  /*
  const parseList = (input) => {
    const normalizedInput = input.replace(/\n/g, ';').replace(/,/g, ';');
    return normalizedInput.split(';').map(item => item.trim()).filter(item => item); 
  };
  */
  /*
  const parseList = (input) => {
    // Divide el texto solo cuando encuentre "1)", "2)", etc.
    return input.split(/(?=\d+\))/).map(item => item.trim()).filter(item => item);
  };
  */
  const parseList = (input) => {
    // Dividir el texto usando la enumeración manual y eliminar el número y paréntesis de cada elemento
    return input.split(/(?=\d+\))/).map(item => item.replace(/^\d+\)\s*/, '').trim()).filter(item => item);
  };

  // Agrupar filtros por categoría
  const groupedFilters = metodo.filtros.reduce((acc, filtroObj) => {
    const { categoria, filtro } = filtroObj;
    if (!acc[categoria]) {
      acc[categoria] = []; 
    }
    acc[categoria].push(filtro); 
    return acc;
  }, {});

  return (
    <>
      <Navbar />
      <Container fluid className="mt-3">
        <Button variant="outline-primary" style={{ color: '#FFFFFF', borderColor: '#006400', backgroundColor: '#006400'}} onClick={() => navigate('/pantalla-principal-admin')}>
          <span className="material-icons" style={{ verticalAlign: 'middle', marginRight: '8px', color: '#FFFFFF' }}>
            arrow_back
          </span>
          Regresar al listado de métodos
        </Button>

        <Row className="justify-content-center mt-4">
          <Col xs={12} md={10} lg={8}>
            <Card className="mb-4" style={{ borderRadius: '15px' }}>
              <Card.Body>
                <Card.Title>{metodo.nombre_metodo}</Card.Title>
                <Card.Text>
                  Resumen del Método: {metodo.resumen_metodo}
                </Card.Text>

                <Row>
                  <Col>
                    <div style={{ border: '1px solid #006400', padding: '15px', borderRadius: '8px' }}>
                      <h5 style={{ color: '#006400' }}>Ventajas</h5>
                      <ul>
                        {parseList(metodo.ventajas_metodo).map((ventaja, index) => (
                          <li key={index}>{ventaja}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                  <Col>
                    <div style={{ border: '1px solid #006400', padding: '15px', borderRadius: '8px' }}>
                      <h5 style={{ color: '#006400' }}>Desventajas</h5>
                      <ul>
                        {parseList(metodo.desventajas_metodo).map((desventaja, index) => (
                          <li key={index}>{desventaja}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>

                {/*
                <Card.Text className="mt-3">
                  Fuente de origen de la información: {metodo.referencia_metodo}
                </Card.Text>
                */}
                <div style={{ border: '1px solid #006400', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
                  <h5 style={{ color: '#006400' }}>Referencias</h5>
                  <ul>
                    {parseList(metodo.referencia_metodo).map((referencia, index) => (
                      <li key={index}>{referencia}</li>
                    ))}
                  </ul>
                </div>

                <Card.Text className="mt-3">
                  <strong>Filtros asociados:</strong>
                  {Object.keys(groupedFilters).length > 0 ? (
                    <ul>
                      {Object.entries(groupedFilters).map(([categoria, filtros], index) => (
                        <li key={index}>
                          {categoria}: {filtros.join(' - ')}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No hay filtros asociados a este método.</p>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterAdmin/>
    </>
  );
};

export default InfoMetodoAdmin;
