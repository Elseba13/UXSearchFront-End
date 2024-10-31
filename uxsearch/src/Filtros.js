import React, { useEffect, useState } from "react"; 
import { Accordion, Form, Button } from "react-bootstrap";

const Filtros = ({ onApplyFilters }) => {
    const [filtros, setFiltros] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]); 

    useEffect(() => {
        fetch('http://localhost:5000/api/filtros')
            .then(response => response.json())
            .then(data => setFiltros(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const filtrosPorCategoria = filtros.reduce((acc, filtro) => {
        if (!acc[filtro.categoria]) {
            acc[filtro.categoria] = [];
        }
        acc[filtro.categoria].push(filtro.filtro);
        return acc;
    }, {});

    const handleCheckboxChange = (filtro) => {
        setSelectedFilters(prevSelectedFilters => {
            const updatedFilters = prevSelectedFilters.includes(filtro)
                ? prevSelectedFilters.filter(f => f !== filtro)
                : [...prevSelectedFilters, filtro];
            
            onApplyFilters(updatedFilters); // Llama a onApplyFilters inmediatamente
            return updatedFilters;
        });
    }; 

    const handleClearFilters = () => {
        setSelectedFilters([]);
        onApplyFilters([]); 
    };

    return (
        <div className="d-flex flex-column p-3 bg-light" style={{ height: '100%' }}>
            <h5>Filtros</h5>
            <Accordion defaultActiveKey="0" className="mb-3">
                {Object.entries(filtrosPorCategoria).map(([categoria, filtros], index) => (
                    <Accordion.Item eventKey={index.toString()} key={categoria}>
                        <Accordion.Header>{categoria}</Accordion.Header>
                        <Accordion.Body>
                            {filtros.map((filtro, filtroIndex) => (
                                <Form.Check 
                                    key={`${categoria}-${filtroIndex}`} 
                                    type="checkbox"
                                    id={`filter-${categoria}-option-${filtroIndex}`}
                                    label={filtro} 
                                    checked={selectedFilters.includes(filtro)}
                                    onChange={() => handleCheckboxChange(filtro)}
                                />
                            ))}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            <Button variant="secondary" onClick={handleClearFilters} className="mt-auto">Limpiar Filtros</Button>
        </div>
    );
}

export default Filtros;
