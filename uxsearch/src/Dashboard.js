import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Pie } from 'react-chartjs-2'; 
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';  // Agregamos Tooltip y Legend
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Filtros from "./Filtros";

// Registramos ArcElement, Tooltip y Legend en Chart.js
Chart.register(ArcElement, Tooltip, Legend);

const DashboardCircular = () => {
    const chartRef = useRef(null); // Referencia al gráfico

    const data = {
        labels: ['Filtro 1', 'Filtro 2', 'Filtro 3'],
        datasets: [
            {
                label: 'Distribución de filtros',
                data: [48, 39, 13],
                backgroundColor: ['#ff6384', '#ffcd56', '#4bc0c0'],
                hoverBackgroundColor: ['#ff6384', '#ffcd56', '#4bc0c0'],
            },
        ],
    };

    // Opciones para personalizar tooltips y otros aspectos del gráfico
    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,  // Activa las tooltips
                callbacks: {
                    label: function(tooltipItem) {
                        // Personaliza el contenido de la tooltip
                        let label = data.labels[tooltipItem.dataIndex] || '';
                        let value = data.datasets[0].data[tooltipItem.dataIndex] || '';
                        return `${label}: ${value}%`;
                    }
                }
            },
            legend: {
                display: true,  // Muestra la leyenda
                position: 'top', // Posición de la leyenda
            },
        },
    };

    useEffect(() => {
        // Destruimos el gráfico anterior si existe cuando el componente se desmonta
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <Container fluid className="mt-4">
            <Row>
                {/* Filtros */}
                <Col xs={12} md={3}>
                    <Filtros />
                </Col>

                {/* Gráfico circular centrado */}
                <Col xs={12} md={9} className="d-flex justify-content-center align-items-center">
                    <div className="chart-container">
                        <Pie ref={chartRef} data={data} options={options} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardCircular;
