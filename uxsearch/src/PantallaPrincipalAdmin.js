import React from "react";
import Filtros from "./Filtros"; 
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CardAdmin from "./Card"; 
import HeaderAdmin from "./HeaderAdmin";

function PantallaPrincipalAdmin() {

    const navigate = useNavigate(); 

    const handleStart = () => {
        navigate('/info-metodo'); 
    }

    const handleEdit = () => {
        console.log("editar"); 
    }

    const handleDelete = () => {
        console.log("eliminar"); 
    }


    return(
        <>
            <HeaderAdmin/>
            
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
                                    <CardAdmin handleStart={handleStart} handleEdit={handleEdit} handleDelete={handleDelete}/> 
                                </Col>

                                <Col xs={12} md={10} lg={12}  className="mb-4">
                                    <CardAdmin handleStart={handleStart} handleEdit={handleEdit} handleDelete={handleDelete}/>
                                </Col>

                                <Col xs={12} md={10} lg={12} className="mb-4">
                                    <CardAdmin handleStart={handleStart} handleEdit={handleEdit} handleDelete={handleDelete}/>
                                </Col>

                                <Col xs={12} md={10} lg={12} className="mb-4">
                                    <CardAdmin handleStart={handleStart} handleEdit={handleEdit} handleDelete={handleDelete}/>
                                 </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PantallaPrincipalAdmin; 