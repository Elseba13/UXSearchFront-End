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
  
  
app.get('/api/metodos', async (req, res) => {
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


/*
app.put('/editar-metodo/:id', async (req, res) => {
  const client = await pool.connect();
  try {
      const metodoId = req.params.id;
      const { nombre_metodo, resumen_metodo, ventajas_metodo, desventajas_metodo, referencia_metodo, filtros_seleccionados } = req.body;

      const updateMetodoQuery = `
          UPDATE Métodos 
          SET nombre_metodo = $1, resumen_metodo = $2, ventajas_metodo = $3, desventajas_metodo = $4, referencia_metodo = $5
          WHERE ID_Metodo = $6;
      `;
      await client.query(updateMetodoQuery, [nombre_metodo, resumen_metodo, ventajas_metodo, desventajas_metodo, referencia_metodo, metodoId]);

      const filtrosActualesQuery = `
          SELECT ID_Filtro FROM Filtros_Metodos 
          WHERE ID_Metodo = $1;
      `;
      const { rows: filtrosActuales } = await client.query(filtrosActualesQuery, [metodoId]);

      const filtrosActualesIds = filtrosActuales.map(f => f.id_filtro); 

      const filtrosAgregar = filtros_seleccionados.filter(filtro => !filtrosActualesIds.includes(filtro)); // Nuevos filtros
      const filtrosEliminar = filtrosActualesIds.filter(filtro => !filtros_seleccionados.includes(filtro)); // Filtros desmarcados

      if (filtrosAgregar.length > 0) {
          const insertFiltrosQuery = `
              INSERT INTO Filtros_Metodos (ID_Metodo, ID_Filtro)
              VALUES ${filtrosAgregar.map((_, i) => `($1, $${i + 2})`).join(', ')};
          `;
          await client.query(insertFiltrosQuery, [metodoId, ...filtrosAgregar]);
      }

      if (filtrosEliminar.length > 0) {
          const deleteFiltrosQuery = `
              DELETE FROM Filtros_Metodos 
              WHERE ID_Metodo = $1 AND ID_Filtro = ANY($2::int[]);
          `;
          await client.query(deleteFiltrosQuery, [metodoId, filtrosEliminar]);
      }

      res.json({ message: 'Método actualizado con éxito' });
  } catch (error) {
      console.error('Error al actualizar el método y los filtros:', error);
      res.status(500).json({ message: 'Error al actualizar el método' });
  } finally {
      client.release();
  }
});

*/


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




/* probando */

app.get('/api/filtros', async(req, res) => {
  try {
    const query = `
        SELECT c.nombre AS categoria, f.nombre AS filtro
        FROM categorias c
        JOIN filtros f ON c.id_categoria = f.id_categoria; 
  `;
    const result = await pool.query(query); 
    res.json(result.rows); 
  }catch(err){
      console.error(err); 
      res.status(500).send('Error obteniendo los filtros');
  }

});

app.get('/api/filtros_metodos', async (req, res) => {
  let filtros = req.query.filtros;

  if (!filtros) {
      return res.status(400).json({ error: 'Debe proporcionar al menos un filtro' });
  }

  try {
      filtros = JSON.parse(filtros);
  } catch (error) {
      console.error('Error al parsear los filtros:', error);
      return res.status(400).json({ error: 'Formato de filtros inválido' });
  }

  if (!Array.isArray(filtros)) {
      filtros = [filtros]; // Convertir a un arreglo si solo hay un filtro
  }

  console.log('Filtros recibidos:', filtros);

  try {
      const query = `
          SELECT m.*
          FROM métodos m
          JOIN filtros_metodos fm ON m.id_metodo = fm.id_metodo
          JOIN filtros f ON fm.id_filtro = f.id_filtro
          WHERE f.nombre = ANY($1::text[])
          GROUP BY m.id_metodo
          HAVING COUNT(DISTINCT f.id_filtro) = $2
      `;

      const result = await pool.query(query, [filtros, filtros.length]);

      if (result.rows.length === 0) {
          return res.json([]); // Devuelve un arreglo vacío si no hay resultados
      }

      res.json(result.rows);
  } catch (error) {
      console.error('Error al obtener los métodos filtrados:', error.message);
      res.status(500).json({ error: 'Error al obtener los métodos filtrados' });
  }
});

app.get('/api/filtros-metodo/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const result = await pool.query(`
          SELECT F.id_filtro, F.nombre
          FROM Filtros AS F
          JOIN Filtros_Metodos AS FM ON F.id_filtro = FM.id_filtro
          WHERE FM.id_metodo = $1
      `, [id]);
      res.json(result.rows);
  } catch (error) {
      console.error('Error al obtener filtros del método:', error);
      res.status(500).json({ error: 'Error al obtener filtros del método' });
  }
});


app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await pool.query(
      'SELECT * FROM "administrador" WHERE "correo_electronico" = $1',
      [email]
    );

    if (user.rows.length > 0) {
      const isValidPassword = user.rows[0].contraseña === password; 
      if (isValidPassword) {
        return res.status(200).json({ message: 'Authenticated', user: user.rows[0] });
      } else {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }
    } else {
      return res.status(401).json({ message: 'Correo electrónico incorrecto' });
    }
  } catch (err) {
    console.error(err); 
    res.status(500).json({ message: 'Server error', error: err });
  }
});



/* Nuevos endpoints para la edición de un método */

app.get('/api/filtrosEdicion', async (req, res) => {
  try {
      const result = await pool.query(`
          SELECT f.id_filtro, f.nombre, c.nombre AS nombre_categoria
          FROM Filtros f
          JOIN Categorias c ON f.ID_Categoria = c.ID_Categoria
      `);
      res.json(result.rows);
  } catch (error) {
      console.error('Error al obtener filtros:', error);
      res.status(500).json({ error: 'Error al obtener filtros' });
  }
});

app.get('/api/filtrosMetodo/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const result = await pool.query(`
          SELECT f.id_filtro
          FROM Filtros_Metodos fm
          JOIN Filtros f ON fm.ID_Filtro = f.ID_Filtro
          WHERE fm.ID_Metodo = $1
      `, [id]);
      res.json(result.rows);
  } catch (error) {
      console.error('Error al obtener filtros de método:', error);
      res.status(500).json({ error: 'Error al obtener filtros de método' });
  }
});

/*
app.put('/edicion-metodo/:id', async (req, res) => {
  const { id } = req.params;
  const { filtros_seleccionados } = req.body;

  try {
      await pool.query(`
          DELETE FROM Filtros_Metodos WHERE ID_Metodo = $1
      `, [id]);

      const insertQuery = `
          INSERT INTO Filtros_Metodos (ID_Metodo, ID_Filtro) VALUES ($1, $2)
      `;
      const insertPromises = filtros_seleccionados.map(filtroId =>
          pool.query(insertQuery, [id, filtroId])
      );
      await Promise.all(insertPromises);

      res.status(200).json({ message: 'Método actualizado correctamente' });
  } catch (error) {
      console.error('Error al actualizar el método:', error);
      res.status(500).json({ error: 'Error al actualizar el método' });
  }
});

*/

/* Nuevo endpoint para la edición de un método */

app.put('/editar-metodo-new/:id', async (req, res) => {
  const client = await pool.connect();
  try {
      const metodoId = req.params.id;
      const {
          nombre_metodo,
          resumen_metodo,
          ventajas_metodo,
          desventajas_metodo,
          referencia_metodo,
          filtros_seleccionados
      } = req.body;

      // Actualizar los campos del método
      const updateMetodoQuery = `
          UPDATE Métodos 
          SET nombre_metodo = $1, resumen_metodo = $2, ventajas_metodo = $3, desventajas_metodo = $4, referencia_metodo = $5
          WHERE ID_Metodo = $6;
      `;
      await client.query(updateMetodoQuery, [nombre_metodo, resumen_metodo, ventajas_metodo, desventajas_metodo, referencia_metodo, metodoId]);

      // Obtener filtros actuales
      const filtrosActualesQuery = `
          SELECT ID_Filtro FROM Filtros_Metodos 
          WHERE ID_Metodo = $1;
      `;
      const { rows: filtrosActuales } = await client.query(filtrosActualesQuery, [metodoId]);

      const filtrosActualesIds = filtrosActuales.map(f => f.id_filtro); 

      // Determinar nuevos filtros y filtros a eliminar
      const filtrosAgregar = filtros_seleccionados.filter(filtro => !filtrosActualesIds.includes(filtro)); // Nuevos filtros
      const filtrosEliminar = filtrosActualesIds.filter(filtro => !filtros_seleccionados.includes(filtro)); // Filtros desmarcados

      // Eliminar filtros no seleccionados
      if (filtrosEliminar.length > 0) {
          const deleteFiltrosQuery = `
              DELETE FROM Filtros_Metodos 
              WHERE ID_Metodo = $1 AND ID_Filtro = ANY($2::int[]);
          `;
          await client.query(deleteFiltrosQuery, [metodoId, filtrosEliminar]);
      }

      // Agregar nuevos filtros
      if (filtrosAgregar.length > 0) {
          const insertFiltrosQuery = `
              INSERT INTO Filtros_Metodos (ID_Metodo, ID_Filtro)
              VALUES ${filtrosAgregar.map((_, i) => `($1, $${i + 2})`).join(', ')}; 
          `;
          await client.query(insertFiltrosQuery, [metodoId, ...filtrosAgregar]);
      }

      res.json({ message: 'Método y filtros actualizados con éxito' });
  } catch (error) {
      console.error('Error al actualizar el método y los filtros:', error);
      res.status(500).json({ message: 'Error al actualizar el método' });
  } finally {
      client.release();
  }
});
