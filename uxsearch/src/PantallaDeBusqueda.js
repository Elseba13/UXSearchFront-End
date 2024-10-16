import React from "react";
import Filtros from "./Filtros"; 
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Navbar from "./Header";

function PantallaPrincipal() {

    const navigate = useNavigate(); 

    const handleStart = () => {
        navigate('/info-metodo'); 
    }


    return(
        <>
            <Navbar/>
            <Container fluid>
                <Row>
                 
                    <Col xs={12} md={3} lg={2} className="bg-light">
                         <Filtros />
                    </Col>

                 
                    <Col xs={12} md={9} lg={10}>
                        <div className="d-flex flex-column align-items-center p-3"> 
                         
                            <Form.Control 
                                type="text"
                                placeholder="Ingresar nombre del método de evaluación"
                                className="mb-4"
                                style={{width: '100%'}}
                            />

                         
                            <Row className="justify-content-center" style={{width: '80%'}}>
                                <Col xs={12} md={10} lg={12} className="mb-4">
                                    <Card style={{borderRadius: '15px'}}>
                                        <Card.Body>
                                            <Card.Title>Título</Card.Title>
                                            <Card.Text>Resumen</Card.Text>
                                            <Button variant="primary" onClick={handleStart}>Leer más</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xs={12} md={10} lg={12}  className="mb-4">
                                    <Card style={{borderRadius: '15px'}}>
                                        <Card.Body>
                                            <Card.Title>Título</Card.Title>
                                            <Card.Text>Resumen</Card.Text>
                                            <Button variant="primary" onClick={handleStart}>Leer más</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xs={12} md={10} lg={12} className="mb-4">
                                    <Card style = {{borderRadius: '15px'}}>
                                        <Card.Body>
                                            <Card.Title>Título</Card.Title>
                                            <Card.Text>Resumen</Card.Text>
                                            <Button variant="primary" onClick={handleStart}>Leer más</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xs={12} md={10} lg={12} className="mb-4">
                                    <Card style={{borderRadius: '15px'}}>
                                        <Card.Body>
                                            <Card.Title>Título</Card.Title>
                                            <Card.Text>Resumen</Card.Text>
                                            <Button variant="primary" onClick={handleStart}>Leer más</Button>
                                        </Card.Body>
                                    </Card>
                                 </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PantallaPrincipal; 