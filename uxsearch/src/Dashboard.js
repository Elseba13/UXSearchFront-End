import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Pie } from 'react-chartjs-2'; 
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';  
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Filtros from "./Filtros";

Chart.register(ArcElement, Tooltip, Legend);

const DashboardCircular = () => {
    const chartRef = useRef(null); 

    const data = {
        labels: ['Filtro 1', 'Filtro 2', 'Filtro 3'],
        datasets: [{
            label: 'Distribución de filtros',
            data: [48, 39, 13],
            backgroundColor: ['#ff6384', '#ffcd56', '#4bc0c0'],
            hoverBackgroundColor: ['#ff6384', '#ffcd56', '#4bc0c0'],
        }],
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (tooltipItem) => {
                        const label = data.labels[tooltipItem.dataIndex] || '';
                        const value = data.datasets[0].data[tooltipItem.dataIndex] || '';
                        return `${label}: ${value}%`;
                    }
                }
            },
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <Container fluid className="mt-4" >
            <Row>
                {/* Filtros */}
                <Col xs={12} md={3} lg={2} className="bg-light">
                    <Filtros />
                </Col>

                {/* Gráfico circular centrado */}
                <Col xs={12} md={9} className="d-flex justify-content-center align-items-center">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '800px', height: '600px', marginTop:'40px' }}>

                        <Pie ref={chartRef} data={data} options={options} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardCircular;
