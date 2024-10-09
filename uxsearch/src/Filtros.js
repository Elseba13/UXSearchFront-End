import React from "react";
import {Accordion, Button, Form} from 'react-bootstrap'; 

const Filtros = () => {
    return (
        <div className="d-flex flex-column p-3 bg-light" style={{height: '100&'}}>
            <h5>Filtros</h5>
            <Accordion defaultActiveKey="0" className="mb-3">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Tipo de filtro</Accordion.Header>
                    <Accordion.Body>
                        <Form.Check 
                            type="checkbox"
                            id="filter1-option1"
                            label="Opción 1"
                        />
                        <Form.Check
                            type="checkbox"
                            id="filter1-option2"
                            label="Opción 2"
                        /> 
                        <Form.Check
                            type="checkbox"
                            id="filter1-option3"
                            label="Opción 3"
                        />

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Tipo de filtro</Accordion.Header> 
                    <Accordion.Body>
                        <Form.Check
                            type="checkbox"
                            id="filter2-option1"
                            label="Opción 1"
                        />
                        <Form.Check 
                            type="checkbox"
                            id="filter2-option2"
                            label="Opción 2"
                        />
                        <Form.Check
                            type="checkbox"
                            id="filter2-option3"
                            label="Opción 3"
                        />
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Tipo de filtro</Accordion.Header> 
                    <Accordion.Body>
                        <Form.Check
                            type="checkbox"
                            id="filter3-option1"
                            label="Opción 1"
                        />
                        <Form.Check 
                            type="checkbox"
                            id="filter3-option2"
                            label="Opción 2"
                        />
                        <Form.Check
                            type="checkbox"
                            id="filter3-option3"
                            label="Opción 3"
                        />
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>


            <Button variant="primary" className="mt-auto">Limpiar Filtros</Button>
        </div>
    );
}

export default Filtros; 