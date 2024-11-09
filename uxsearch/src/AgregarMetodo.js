import React, { useState } from 'react';
import HeaderAdmin from "./HeaderAdmin"; 
import { useNavigate } from 'react-router-dom'; 
import { Button, Modal } from 'react-bootstrap';
import ComponenteAyuda from './ComponenteAyuda';
import FooterAdmin from './FooterAdmin';

const AgregarMetodo = () => {
  const navigate = useNavigate();
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

  const [showModal, setShowModal] = useState(false); 

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

        setShowModal(true); //Se muestra el modal de confirmación
  
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

  const handleCloseModal = () => setShowModal(false); 

  return (
    <>
      <HeaderAdmin />
      <br />
      <div className="container my-4">
        <ComponenteAyuda
          titulo="Instructivo para agregar un método"
          contenido={
            <p>
              En esta pantalla encontrarás un formulario que te permitirá agregar nuevos métodos a UxSearch
              <br />
              <br />
              En primer lugar debes ingresar el nombre de método, y un resumen.
              <br />
              <br />
              Para ingresar diferentes ventajas y desventajas, puedes realizarlo por medio de un salto de línea, una coma (,), o un punto y coma (;), lo que sea más comodo para ti.
              <br />
              Por ejemplo: Ventaja1, Ventaja2, Ventaja3.
              <br />
              <br />
              La referencia debe ser ingresada en formato IEEE.
              <br />
              Por ejemplo: 
              <br />
              Libros: Iniciales y Apellido/s del autor, Título del libro en cursiva. Edición. Lugar de publicación: Editorial, Año de publicación.
              <br />
              Revistas: Iniciales y Apellido del autor, "Título del artículo entre comillas", Título abreviado de la revista en cursiva, volumen (abreviado vol.), número abreviado (no.) páginas (abreviado pp.), Mes Año.
              <br />
              Apuntes de clase: "Título de los apuntes o materia", class notes for Código de la asignatura, Departamento, Institución o Universidad, época y año.
              <br />
              Sitio web: Iniciales y Apellido del autor (año, mes y día). Título (edición) [Tipo de medio, generalmente Online]. Available: Url
              <br />
              <br />
              Finalmente debes seleccionar al menos un filtro al que corresponda el método que deseas ingresar, sin importar la categoría del filtro seleccionado.
            </p>
          }
          botonEstilo={{
            color: '#006400',
            borderColor: '#006400',
          }}
          botonCerrarEstilo={{
            borderColor: '#006400',
            backgroundColor: '#006400',
          }}
        />
      </div>
      <div className="position-absolute" style={{ top: '65px', left: '20px' }}>
        <Button variant="outline-primary" style={{ color: '#FFFFFF', borderColor: '#006400', backgroundColor: '#006400'}} onClick={() => navigate('/pantalla-principal-admin')}>
          <span className="material-icons" style={{ verticalAlign: 'middle', marginRight: '8px', color: '#FFFFFF' }}>
            arrow_back
          </span>
          Regresar al listado de métodos
        </Button>
      </div>
      <br />

      <div className="container my-4">
        <div className="alert alert-warning d-flex align-items-center" role="alert">
          <span className="material-icons" style={{ marginRight: '8px' }}>warning</span>
          <span>
            Por favor, haz clic en el ícono de ayuda 
            <span className="material-icons" style={{ marginLeft: '8px', verticalAlign: 'middle' }}>help_outline</span> 
            {/*‎ es para insertar un espacio vacío entre el texto y el icono */}
            ‎  antes de comenzar a llenar el formulario.
          </span>
        </div>
      </div>

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
              <button type="submit" style={{backgroundColor: '#006400'}} className="btn btn-primary">Agregar Método</button>
            </div>
          </form>

          
        </div>
      </div>
      <br />
      <br />
      <FooterAdmin/> 

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>¡Método agregado con éxito!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          El método se ha agregado correctamente. ¿Quieres agregar otro método o regresar al listado de métodos?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
              Cerrar
          </Button>
          <Button
              variant="primary"
              onClick={() => {
                handleCloseModal(); 
                navigate('/pantalla-principal-admin'); 
              }}
          >
            Regresar al listado
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AgregarMetodo;
