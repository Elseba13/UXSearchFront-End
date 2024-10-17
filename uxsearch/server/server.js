require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

app.use(cors());
app.use(express.json());


app.post('/api/methods', async (req, res) => {
    const { nombreMetodo, resumenMetodo, ventajasMetodo, desventajasMetodo, referenciaMetodo, filtros } = req.body;
  
    try {
      const result = await pool.query(
        'INSERT INTO métodos (nombre_metodo, resumen_metodo, ventajas_metodo, desventajas_metodo, referencia_metodo) VALUES ($1, $2, $3, $4, $5) RETURNING id_metodo',
        [nombreMetodo, resumenMetodo, ventajasMetodo, desventajasMetodo, referenciaMetodo]
      );
      const metodoId = result.rows[0].id_metodo;
  
      if (filtros && typeof filtros === 'object') {
        for (const [categoriaFiltro, valoresSeleccionados] of Object.entries(filtros)) {
          if (Array.isArray(valoresSeleccionados)) {
            for (const valor of valoresSeleccionados) {
              const filtroResult = await pool.query(
                'SELECT id_filtro FROM filtros WHERE nombre = $1',
                [valor]
              );
              if (filtroResult.rows.length > 0) {
                const idFiltro = filtroResult.rows[0].id_filtro;
                await pool.query(
                  'INSERT INTO filtros_metodos (id_metodo, id_filtro) VALUES ($1, $2)',
                  [metodoId, idFiltro]
                );
              } else {
                //console.warn(`Filtro no encontrado: ${valor}`);
              }
            }
          }
        }
      }
  
      res.status(201).json({ message: 'Método y filtros agregados correctamente' });
    } catch (error) {
      console.error('Error al insertar método y filtros:', error);
      res.status(500).json({ error: 'Error al insertar método y filtros' });
    }
  });
  
  
app.get('/api/methods', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM métodos');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener los métodos:', error);
    res.status(500).json({ error: 'Error al obtener los métodos' });
  }
});
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
