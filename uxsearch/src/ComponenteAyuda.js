import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ComponenteAyuda = ({ titulo, contenido, botonEstilo, botonCerrarEstilo }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
        <Button variant="outline-primary" onClick={handleShow}
        style={{ position: 'absolute', top: '65px', right: '10px',  ...botonEstilo }}>
            <span className="material-icons" style={{ verticalAlign: 'middle' }}>help_outline</span>
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{contenido}</Modal.Body>
        <Modal.Footer>
            <Button variant="primary" style={botonCerrarEstilo} onClick={handleClose}>
            Cerrar
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
};

export default ComponenteAyuda;
