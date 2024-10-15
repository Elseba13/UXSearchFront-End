import React, { useState, useEffect, useRef } from "react";
import { Col, Card as BootstrapCard, Button, Modal } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Asegúrate de instalar react-icons

const CardAdmin = ({ handleStart, handleEdit, handleDelete }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false); 
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    const handleDeleteClick = () => {
        setShowModal(true); 
    }

    const confirmDelete = () => {
        setShowModal(false); 
        handleDelete(); 
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (

        <>
            <Col xs={12} md={10} lg={12} className="mb-4">
            <BootstrapCard style={{ borderRadius: '15px' }}>
                <BootstrapCard.Body>
                    <BootstrapCard.Title>Título</BootstrapCard.Title>
                    <BootstrapCard.Text>Resumen</BootstrapCard.Text>
                    <div style={{ position: 'absolute', top: '10px', right: '10px' }} ref={menuRef}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            fill="currentColor" 
                            className="bi bi-three-dots-vertical" 
                            viewBox="0 0 16 16" 
                            onClick={toggleMenu} 
                            style={{ cursor: 'pointer' }}
                        >
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                        </svg>
                        {showMenu && (
                            <div className="dropdown-menu show" style={{ position: 'absolute', top: '20px', right: '0', minWidth: '150px' }}>
                                <Button variant="link" onClick={handleEdit} style={{ display: 'flex', alignItems: 'center' }} href="/editar-metodo">
                                    <FaEdit style={{ marginRight: '5px' }} /> Editar
                                </Button>  
                                <Button variant="link" onClick={handleDeleteClick} style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaTrash style={{ marginRight: '5px' }} /> Eliminar
                                </Button>
                            </div>
                        )}
                    </div>
                    <Button variant="primary" onClick={handleStart}>Leer más</Button>
                </BootstrapCard.Body>
            </BootstrapCard>
            </Col>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                        <Modal.Title>Confirmar eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Estás seguro de que deseas eliminar este método?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>   
    );
}; 

export default CardAdmin;
