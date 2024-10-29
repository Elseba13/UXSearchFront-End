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

        <div className="accordion mt-4" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Filtro 1: Fase del desarrollo del producto
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Se refiere a la etapa en que se encuentra el producto, y dependiendo de esta misma, se pueden aplicar diferentes métodos.</p>
                <ul>
                  <li><strong>Conceptual:</strong> Métodos aplicados al inicio del proyecto, cuando se generan ideas y conceptos.</li>
                  <li><strong>Prototipo no funcional:</strong> Métodos que prueban maquetas o diseños que aún no funcionan técnicamente.</li>
                  <li><strong>Prototipo funcional:</strong> Métodos para evaluar productos con características operativas.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Filtro 2: Fase de la experiencia del usuario
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Se refiere al momento en que se aplica el método respecto a la interacción del usuario con el producto.</p>
                <ul>
                  <li><strong>Antes de interactuar/usar el producto:</strong> Métodos enfocados en entender las expectativas y percepciones previas del usuario.</li>
                  <li><strong>Durante el uso del producto:</strong> Métodos que observan o evalúan la interacción en tiempo real.</li>
                  <li><strong>Después de usar el producto:</strong> Métodos que se utilizan para recolectar feedback posterior.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Filtro 3: Tiempo disponible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Considera el tiempo que se tiene para aplicar el método.</p>
                <ul>
                  <li><strong>Corto plazo - Pocos días:</strong> Métodos rápidos que ofrecen resultados inmediatos.</li>
                  <li><strong>Mediano plazo - Varios días:</strong> Métodos que requieren más tiempo y profundidad.</li>
                  <li><strong>Largo plazo - Semanas:</strong> Métodos que se extienden durante un periodo prolongado.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Filtro 4: Formato de aplicación
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Se refiere al modo en que se lleva a cabo el método.</p>
                <ul>
                  <li><strong>Presencial:</strong> Métodos que requieren la participación física de los usuarios.</li>
                  <li><strong>Remoto:</strong> Métodos que pueden realizarse a distancia, aprovechando herramientas digitales.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Filtro 5: Tipo de participantes
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Indica quienes participan en la evaluación.</p>
                <ul>
                  <li><strong>Usuarios:</strong> Personas que usan el producto en su vida diaria.</li>
                  <li><strong>Expertos:</strong> Especialistas con conocimientos específicos en el área.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Filtro 6: Cantidad específica de participantes
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Ajusta el método según la cantidad de personas involucradas.</p>
                <ul>
                  <li><strong>Pocos participantes:</strong> Grupos pequeños (5-10 personas).</li>
                  <li><strong>Medianos grupos:</strong> Participación moderada (15-30 personas).</li>
                  <li><strong>Gran cantidad:</strong> Métodos masivos para recolectar datos a gran escala (100+ participantes).</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Filtro 7: Presupuesto/costos
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Este filtro se refiere a los recursos financieros disponibles para aplicar el método.</p>
                <ul>
                  <li><strong>Gratuito:</strong> Métodos que pueden realizarse sin costos financieros.</li>
                  <li><strong>Bajo costo:</strong> Métodos accesibles que requieren una inversión mínima.</li>
                  <li><strong>Mediano costo:</strong> Métodos que implican una inversión moderada.</li>
                  <li><strong>Alto costo:</strong> Métodos con costos elevados por requerir infraestructuras o tecnologías avanzadas.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                Filtro 8: Tipo de estudio
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Define la naturaleza del estudio a realizar.</p>
                <ul>
                  <li><strong>Cualitativo:</strong> Métodos que se centran en obtener información descriptiva y no numérica.</li>
                  <li><strong>Cuantitativo:</strong> Métodos que emplean datos numéricos y estadísticas.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                Filtro 9: Períodos de experiencia
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Permite establecer el tiempo de experiencia que se va a evaluar.</p>
                <ul>
                  <li><strong>Corto plazo - Inmediata:</strong> Métodos que evalúan reacciones inmediatas después de la interacción.</li>
                  <li><strong>Mediano plazo:</strong> Métodos que analizan la experiencia a lo largo de varios días.</li>
                  <li><strong>Largo plazo:</strong> Métodos que examinan el uso del producto durante semanas o meses.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                Filtro 10: Componentes de la experiencia del usuario
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Considera los aspectos que se quieren evaluar en la experiencia del usuario.</p>
                <ul>
                  <li><strong>Emociones:</strong> Sensaciones que experimenta el usuario al interactuar con el producto.</li>
                  <li><strong>Atributos:</strong> Características específicas del producto que se evalúan.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEleven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEleven"
                aria-expanded="false"
                aria-controls="collapseEleven"
              >
                Filtro 11: Popularidad de utilización
              </button>
            </h2>
            <div
              id="collapseEleven"
              className="accordion-collapse collapse"
              aria-labelledby="headingEleven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Se refiere a la frecuencia con la que se utilizan los métodos.</p>
                <ul>
                  <li><strong>Baja popularidad:</strong> Métodos poco conocidos o utilizados raramente.</li>
                  <li><strong>Media popularidad:</strong> Métodos con uso regular en ciertas comunidades.</li>
                  <li><strong>Alta popularidad:</strong> Métodos ampliamente reconocidos y utilizados por profesionales.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplicacionFiltros;
