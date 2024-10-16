import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Header';

const ExplicacionFiltros = () => {
  return (
    <>
    <Navbar /> 
    <div className="container my-4">
      
      <div className="bg-secondary-subtle text-dark p-3 rounded">
        <p className="lead">
          En esta página encontrarás información acerca de los filtros de búsqueda de los métodos de evaluación, los cuales te permitirán seleccionar la mejor opción según tus necesidades y los distintos filtros disponibles.
        </p>
      </div>

      <div className="mt-4">
        <div className="card mb-4">
          <div className="card-header">
            <h5>Filtro 1: Fase del desarrollo del producto</h5>
          </div>
          <div className="card-body">
            <p>Se refiere a la etapa en que se encuentra el producto, y dependiendo de esta misma, se pueden aplicar diferentes métodos.</p>
            <ul>
              <li><strong>Conceptual:</strong> Métodos aplicados al inicio del proyecto, cuando se generan ideas y conceptos.</li>
              <li><strong>Prototipo no funcional:</strong> Métodos que prueban maquetas o diseños que aún no funcionan técnicamente.</li>
              <li><strong>Prototipo funcional:</strong> Métodos para evaluar productos con características operativas.</li>
            </ul>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <h5>Filtro 2: Fase de la experiencia del usuario</h5>
          </div>
          <div className="card-body">
            <p>Se refiere al momento en que se aplica el método respecto a la interacción del usuario con el producto.</p>
            <ul>
              <li><strong>Antes de interactuar/usar el producto:</strong> Métodos enfocados en entender las expectativas y percepciones previas del usuario.</li>
              <li><strong>Durante el uso del producto:</strong> Métodos que observan o evalúan la interacción en tiempo real.</li>
              <li><strong>Después de usar el producto:</strong> Métodos que se utilizan para recolectar feedback posterior.</li>
            </ul>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <h5>Filtro 3: Tiempo disponible</h5>
          </div>
          <div className="card-body">
            <p>Considera el tiempo que se tiene para aplicar el método.</p>
            <ul>
              <li><strong>Corto plazo - Pocos días:</strong> Métodos rápidos que ofrecen resultados inmediatos.</li>
              <li><strong>Mediano plazo - Varios días:</strong> Métodos que requieren más tiempo y profundidad.</li>
              <li><strong>Largo plazo - Semanas:</strong> Métodos que se extienden durante un periodo prolongado.</li>
            </ul>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <h5>Filtro 4: Formato de aplicación</h5>
          </div>
          <div className="card-body">
            <p>Se refiere al modo en que se lleva a cabo el método.</p>
            <ul>
              <li><strong>Presencial:</strong> Métodos que requieren la participación física de los usuarios.</li>
              <li><strong>Remoto:</strong> Métodos que pueden realizarse a distancia, aprovechando herramientas digitales.</li>
            </ul>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <h5>Filtro 5: Tipo de participantes</h5>
          </div>
          <div className="card-body">
            <p>Indica quienes participan en la evaluación.</p>
            <ul>
              <li><strong>Usuarios:</strong> Personas que usan el producto en su vida diaria.</li>
              <li><strong>Expertos:</strong> Especialistas con conocimientos específicos en el área.</li>
            </ul>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <h5>Filtro 6: Cantidad específica de participantes</h5>
          </div>
          <div className="card-body">
            <p>Ajusta el método según la cantidad de personas involucradas.</p>
            <ul>
              <li><strong>Pocos participantes:</strong> Grupos pequeños (5-10 personas).</li>
              <li><strong>Medianos grupos:</strong> Participación moderada (15-30 personas).</li>
              <li><strong>Gran cantidad:</strong> Métodos masivos para recolectar datos a gran escala (100+ participantes).</li>
            </ul>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <h5>Filtro 7: Presupuesto/costos</h5>
          </div>
          <div className="card-body">
            <p>Este filtro se refiere a los recursos financieros disponibles para aplicar el método.</p>
            <ul>
              <li><strong>Gratuito:</strong> Métodos que pueden realizarse sin costos financieros.</li>
              <li><strong>Bajo costo:</strong> Métodos accesibles que requieren una inversión mínima.</li>
              <li><strong>Mediano costo:</strong> Métodos que implican una inversión moderada.</li>
              <li><strong>Alto costo:</strong> Métodos con costos elevados por requerir infraestructuras o tecnologías avanzadas.</li>
            </ul>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <h5>Filtro 8: Tipo de estudio</h5>
          </div>
          <div className="card-body">
            <p>Determina los datos o características que se desean explorar u obtener.</p>
            <ul>
              <li><strong>Cualitativo:</strong> Métodos que buscan explorar en profundidad las experiencias y opiniones de los usuarios.</li>
              <li><strong>Cuantitativo:</strong> Métodos que buscan obtener datos numéricos y medibles para analizar patrones de uso.</li>
            </ul>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <h5>Filtro 9: Períodos de experiencia</h5>
          </div>
          <div className="card-body">
            <p>Evalúa la experiencia del usuario en diferentes momentos tras el uso del producto.</p>
            <ul>
              <li><strong>Corto plazo:</strong> Inmediato: Métodos que recogen impresiones inmediatamente después del uso.</li>
              <li><strong>Mediano plazo:</strong> Métodos que evalúan la experiencia a lo largo de varias semanas hasta los 6 meses tras haber utilizado el producto.</li>
              <li><strong>Largo plazo:</strong> Métodos que estudian la experiencia del usuario durante un periodo prolongado.</li>
            </ul>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <h5>Filtro 10: Componentes de la experiencia del usuario</h5>
          </div>
          <div className="card-body">
            <p>Examina qué aspectos específicos de la experiencia se están evaluando.</p>
            <ul>
              <li><strong>Emociones:</strong> Métodos que se enfocan en el impacto emocional que tiene el producto en los usuarios.</li>
              <li><strong>Atributos:</strong> Métodos que examinan características del producto como funcionalidad, estética o usabilidad.</li>
            </ul>
          </div>
        </div>

        <div className="card mb-5">
          <div className="card-header">
            <h5>Filtro 11: Popularidad de utilización</h5>
          </div>
          <div className="card-body">
            <p>Este filtro indica qué tan común o frecuente es el uso de un método en la industria.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ExplicacionFiltros;