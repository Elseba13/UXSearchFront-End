import React, { useState } from 'react';
import Header from "./Header"; 

const AgregarMetodo = () => {
  const [nombreMetodo, setNombreMetodo] = useState('');
  const [resumenMetodo, setResumenMetodo] = useState('');
  const [ventajasMetodo, setVentajasMetodo] = useState('');
  const [desventajasMetodo, setDesventajasMetodo] = useState('');
  const [referenciaMetodo, setReferenciaMetodo] = useState('');
  const [filtros, setFiltros] = useState({
    faseDesarrollo: [],
    faseExperiencia: [],
    tiempoDisponible: [],
    formato: [],
    tipoParticipantes: [],
    cantidadParticipantes: [],
    presupuesto: [],
    tipoEstudio: [],
    periodosExperiencia: [],
    componentesExperiencia: [],
    popularidad: [],
  });

  const handleCheckboxChange = (categoria, valor) => {
    setFiltros((prevFiltros) => {
      const nuevaCategoria = prevFiltros[categoria].includes(valor)
        ? prevFiltros[categoria].filter((v) => v !== valor)
        : [...prevFiltros[categoria], valor];
      return { ...prevFiltros, [categoria]: nuevaCategoria };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const metodo = {
      nombreMetodo,
      resumenMetodo,
      ventajasMetodo,
      desventajasMetodo,
      referenciaMetodo,
      filtros,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/methods', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metodo),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Método agregado:', data);
  
        // Reinicia los estados del formulario para limpiarlo
        setNombreMetodo('');
        setResumenMetodo('');
        setVentajasMetodo('');
        setDesventajasMetodo('');
        setReferenciaMetodo('');
        setFiltros({
          faseDesarrollo: [],
          faseExperiencia: [],
          tiempoDisponible: [],
          formato: [],
          tipoParticipantes: [],
          cantidadParticipantes: [],
          presupuesto: [],
          tipoEstudio: [],
          periodosExperiencia: [],
          componentesExperiencia: [],
          popularidad: [],
        });
      } else {
        console.error('Error al agregar el método');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
    }
  };

  return (
    <>
      <Header />
      <br />
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="border p-4 bg-light rounded">
          <div className="text-center">
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>Formulario para<br/>agregar un método</div>
          </div>
          <br/>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div className="text-center" style={{ fontSize: '1.2rem' }}>Ingrese el nombre del método</div>
              <input
                type="text"
                className="form-control"
                value={nombreMetodo}
                onChange={(e) => setNombreMetodo(e.target.value)}
                placeholder="Nombre del método"
                required
              />
            </div>
            <div className="mb-3">
              <div className="text-center" style={{ fontSize: '1.2rem' }}>Ingrese un resumen del método</div>
              <textarea
                className="form-control"
                value={resumenMetodo}
                onChange={(e) => setResumenMetodo(e.target.value)}
                placeholder="Resumen del Método"
                required
              />
            </div>
            <div className="mb-3">
              <div className="text-center" style={{ fontSize: '1.2rem' }}>Ingrese las ventajas del método</div>
              <textarea
                className="form-control"
                value={ventajasMetodo}
                onChange={(e) => setVentajasMetodo(e.target.value)}
                placeholder="Ventajas del Método"
                required
              />
            </div>
            <div className="mb-3">
              <div className="text-center" style={{ fontSize: '1.2rem' }}>Ingrese las desventajas del método</div>
              <textarea
                className="form-control"
                value={desventajasMetodo}
                onChange={(e) => setDesventajasMetodo(e.target.value)}
                placeholder="Desventajas del Método"
                required
              />
            </div>
            <div className="mb-3">
              <div className="text-center" style={{ fontSize: '1.2rem' }}>Ingrese la referencia del método</div>
              <input
                type="text"
                className="form-control"
                value={referenciaMetodo}
                onChange={(e) => setReferenciaMetodo(e.target.value)}
                placeholder="Referencia del Método"
                required
              />
            </div>
            <br />

            <div className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold' }}>Ingresar filtros<br />del método</div><br />

            <div className="mb-3">
              <div style={{ fontSize: '1.5rem' }}>Fase del desarrollo del producto</div>
              <label>
                <input
                  type="checkbox"
                  checked={filtros.faseDesarrollo.includes('Conceptual')}
                  onChange={() => handleCheckboxChange('faseDesarrollo', 'Conceptual')}
                />
                Conceptual
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.faseDesarrollo.includes('Prototipo no funcional')}
                  onChange={() =>
                    handleCheckboxChange('faseDesarrollo', 'Prototipo no funcional')
                  }
                />
                Prototipo no funcional
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.faseDesarrollo.includes('Prototipo funcional')}
                  onChange={() =>
                    handleCheckboxChange('faseDesarrollo', 'Prototipo funcional')
                  }
                />
                Prototipo funcional
              </label>
            </div>

            <div className="mb-3">
              <div style={{ fontSize: '1.5rem' }}>Fase de la experiencia del usuario</div>
              <label>
                <input
                  type="checkbox"
                  checked={filtros.faseExperiencia.includes('Antes de interactuar/usar el producto')}
                  onChange={() =>
                    handleCheckboxChange('faseExperiencia', 'Antes de interactuar/usar el producto')
                  }
                />
                Antes de interactuar/usar el producto
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.faseExperiencia.includes('Durante el uso del producto')}
                  onChange={() =>
                    handleCheckboxChange('faseExperiencia', 'Durante el uso del producto')
                  }
                />
                Durante el uso del producto
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.faseExperiencia.includes('Después de usar el producto')}
                  onChange={() =>
                    handleCheckboxChange('faseExperiencia', 'Después de usar el producto')
                  }
                />
                Después de usar el producto
              </label>
            </div>

            <div className="mb-3">
              <div style={{ fontSize: '1.5rem' }}>Tiempo disponible</div>
              <label>
                <input
                  type="checkbox"
                  checked={filtros.tiempoDisponible.includes('Corto plazo - Pocos días')}
                  onChange={() => handleCheckboxChange('tiempoDisponible', 'Corto plazo - Pocos días')}
                />
                Corto plazo - Pocos días
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.tiempoDisponible.includes('Mediano plazo - Varios días')}
                  onChange={() =>
                    handleCheckboxChange('tiempoDisponible', 'Mediano plazo - Varios días')
                  }
                />
                Mediano plazo - Varios días
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.tiempoDisponible.includes('Largo plazo - Semanas')}
                  onChange={() => handleCheckboxChange('tiempoDisponible', 'Largo plazo - Semanas')}
                />
                Largo plazo - Semanas
              </label>
            </div>

            <div className="mb-3">
              <div style={{ fontSize: '1.5rem' }}>Formato</div>
              <label>
                <input
                  type="checkbox"
                  checked={filtros.formato.includes('Presencial')}
                  onChange={() => handleCheckboxChange('formato', 'Presencial')}
                />
                Presencial
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.formato.includes('Remoto')}
                  onChange={() => handleCheckboxChange('formato', 'Remoto')}
                />
                Remoto
              </label>
            </div>

            <div className="mb-3">
              <div style={{ fontSize: '1.5rem' }}>Tipo de participantes</div>
              <label>
                <input
                  type="checkbox"
                  checked={filtros.tipoParticipantes.includes('Usuarios finales')}
                  onChange={() => handleCheckboxChange('tipoParticipantes', 'Usuarios finales')}
                />
                Usuarios finales
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.tipoParticipantes.includes('Expertos')}
                  onChange={() => handleCheckboxChange('tipoParticipantes', 'Expertos')}
                />
                Expertos
              </label>
            </div>

            <div className="mb-3">
              <div style={{ fontSize: '1.5rem' }}>Cantidad específica de participantes</div>
              <label>
                <input
                  type="checkbox"
                  checked={filtros.cantidadParticipantes.includes('Pocos participantes')}
                  onChange={() =>
                    handleCheckboxChange('cantidadParticipantes', 'Pocos participantes')
                  }
                />
                Pocos participantes
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.cantidadParticipantes.includes('Medianos grupos')}
                  onChange={() =>
                    handleCheckboxChange('cantidadParticipantes', 'Medianos grupos')
                  }
                />
                Medianos grupos
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.cantidadParticipantes.includes('Gran cantidad')}
                  onChange={() =>
                    handleCheckboxChange('cantidadParticipantes', 'Gran cantidad')
                  }
                />
                Gran cantidad
              </label>
            </div>

            <div className="mb-3">
              <div style={{ fontSize: '1.5rem' }}>Presupuesto/costos</div>
              <label>
                <input
                  type="checkbox"
                  checked={filtros.presupuesto.includes('Gratuito')}
                  onChange={() => handleCheckboxChange('presupuesto', 'Gratuito')}
                />
                Gratuito
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.presupuesto.includes('Bajo costo')}
                  onChange={() => handleCheckboxChange('presupuesto', 'Bajo costo')}
                />
                Bajo costo
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.presupuesto.includes('Mediano costo')}
                  onChange={() => handleCheckboxChange('presupuesto', 'Mediano costo')}
                />
                Mediano costo
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.presupuesto.includes('Alto costo')}
                  onChange={() => handleCheckboxChange('presupuesto', 'Alto costo')}
                />
                Alto costo
              </label>
            </div>

            <div className="mb-3">
              <div style={{ fontSize: '1.5rem' }}>Tipo de estudio</div>
              <label>
                <input
                  type="checkbox"
                  checked={filtros.tipoEstudio.includes('Cualitativo')}
                  onChange={() => handleCheckboxChange('tipoEstudio', 'Cualitativo')}
                />
                Cualitativo
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.tipoEstudio.includes('Cuantitativo')}
                  onChange={() => handleCheckboxChange('tipoEstudio', 'Cuantitativo')}
                />
                Cuantitativo
              </label>
            </div>

            <div className="mb-3">
              <div style={{ fontSize: '1.5rem' }}>Períodos de experiencia</div>
              <label>
                <input
                  type="checkbox"
                  checked={filtros.periodosExperiencia.includes('Corto plazo - Inmediata')}
                  onChange={() =>
                    handleCheckboxChange('periodosExperiencia', 'Corto plazo - Inmediata')
                  }
                />
                Corto plazo - Inmediata
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.periodosExperiencia.includes('Mediano plazo')}
                  onChange={() =>
                    handleCheckboxChange('periodosExperiencia', 'Mediano plazo')
                  }
                />
                Mediano plazo
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.periodosExperiencia.includes('Largo plazo')}
                  onChange={() =>
                    handleCheckboxChange('periodosExperiencia', 'Largo plazo')
                  }
                />
                Largo plazo
              </label>
            </div>

            <div className="mb-3">
              <div style={{ fontSize: '1.5rem' }}>Componentes de la experiencia del usuario</div>
              <label>
                <input
                  type="checkbox"
                  checked={filtros.componentesExperiencia.includes('Emociones')}
                  onChange={() => handleCheckboxChange('componentesExperiencia', 'Emociones')}
                />
                Emociones
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.componentesExperiencia.includes('Atributos')}
                  onChange={() => handleCheckboxChange('componentesExperiencia', 'Atributos')}
                />
                Atributos
              </label>
            </div>

            <div className="mb-3">
              <div style={{ fontSize: '1.5rem' }}>Popularidad de utilización</div>
              <label>
                <input
                  type="checkbox"
                  checked={filtros.popularidad.includes('Baja popularidad')}
                  onChange={() => handleCheckboxChange('popularidad', 'Baja popularidad')}
                />
                Baja popularidad
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.popularidad.includes('Media popularidad')}
                  onChange={() => handleCheckboxChange('popularidad', 'Media popularidad')}
                />
                Media popularidad
              </label><br />
              <label>
                <input
                  type="checkbox"
                  checked={filtros.popularidad.includes('Alta popularidad')}
                  onChange={() => handleCheckboxChange('popularidad', 'Alta popularidad')}
                />
                Alta popularidad
              </label>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">Agregar Método</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AgregarMetodo;
