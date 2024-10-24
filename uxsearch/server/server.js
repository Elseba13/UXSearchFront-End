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

console.log('DB_USER:', process.env.PG_USER);
console.log('DB_PASSWORD:', process.env.PG_PASSWORD);


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
  
app.get('/api/methods/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM métodos WHERE id_metodo = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Método no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener el método:', error);
    res.status(500).json({ error: 'Error al obtener el método' });
  }
});

app.get('/api/methods/:id/filtros', async (req, res) => {
  const { id } = req.params;

  try {
    const metodoResult = await pool.query('SELECT * FROM métodos WHERE id_metodo = $1', [id]);
    if (metodoResult.rows.length === 0) {
      return res.status(404).json({ error: 'Método no encontrado' });
    }
    
    const metodo = metodoResult.rows[0];

    const filtrosResult = await pool.query(
      `SELECT f.nombre AS filtro_nombre, c.nombre AS categoria_nombre
       FROM filtros_metodos fm 
       JOIN filtros f ON fm.id_filtro = f.id_filtro
       JOIN categorias c ON f.id_categoria = c.id_categoria
       WHERE fm.id_metodo = $1`,
      [id]
    );

    const filtros = filtrosResult.rows.map(row => ({
      filtro: row.filtro_nombre,
      categoria: row.categoria_nombre
    }));

    res.json({ ...metodo, filtros });
  } catch (error) {
    console.error('Error al obtener el método:', error);
    res.status(500).json({ error: 'Error al obtener el método' });
  }
});



app.put('/api/methods/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre_metodo, resumen_metodo, ventajas_metodo, desventajas_metodo, referencia_metodo } = req.body;

  try {
      const updateQuery = `
          UPDATE métodos
          SET 
              nombre_metodo = $1,
              resumen_metodo = $2,
              ventajas_metodo = $3,
              desventajas_metodo = $4,
              referencia_metodo = $5
          WHERE id_metodo = $6
          RETURNING *;
      `;

      const values = [
          nombre_metodo, 
          resumen_metodo, 
          ventajas_metodo, 
          desventajas_metodo, 
          referencia_metodo, 
          id
      ];

      const result = await pool.query(updateQuery, values);

      if (result.rows.length > 0) {
          res.status(200).json(result.rows[0]);
      } else {
          res.status(404).json({ error: "Método no encontrado" });
      }
  } catch (error) {
      console.error("Error al actualizar el método:", error);
      res.status(500).json({ error: "Error al actualizar el método" });
  }
});



app.delete('/api/methods/:id', async(req,res) => {
  const {id} = req.params; 

  try {

    await pool.query('DELETE FROM filtros_metodos WHERE id_metodo = $1', [id]); 

    const result = await pool.query('DELETE FROM métodos WHERE id_metodo = $1', [id]); 

    if(result.rowCount === 0){
      return res.status(404).json({error: 'Metodo no encontrado'}); 
    }
    
    res.status(200).json({message: 'Método eliminado correctamente'}); 

  }catch (error){
    console.error('Error al eliminar al método:', error); 
    res.status(500).json({error: 'Error al eliminar el método'}); 
  }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
