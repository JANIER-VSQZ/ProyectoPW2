import { preguntasFrecuentes } from '../siteData/pages/faqData.js';

const contenedor = document.getElementById('faq-lista');
const buscador = document.getElementById('buscador');

// muestra preguntas filtradas
function renderPreguntas(filtradas = preguntasFrecuentes) {
  contenedor.innerHTML = ''; // Limpia contenido actual

  filtradas.forEach((item, index) => {
    const pregunta = document.createElement('div');
    pregunta.classList.add('faq-item');

    // simbolo como boton para desplegar
    const encabezado = document.createElement('button');
    encabezado.classList.add('faq-pregunta');
    encabezado.setAttribute('data-index', index);
    encabezado.innerHTML = `<span class="triangulo">▶</span> ${item.pregunta}`;

    const respuesta = document.createElement('div');
    respuesta.classList.add('faq-respuesta');
    respuesta.innerText = item.respuesta;
    respuesta.style.display = 'none';

    // cambio de simbolo para desplegar 
    encabezado.addEventListener('click', () => {
      const abierto = respuesta.style.display === 'block';
      respuesta.style.display = abierto ? 'none' : 'block';
      const tri = encabezado.querySelector('.triangulo');
      tri.textContent = abierto ? '▶' : '▼';
    });

    pregunta.appendChild(encabezado);
    pregunta.appendChild(respuesta);
    contenedor.appendChild(pregunta);
  });
}

// busqueda
buscador.addEventListener('input', (e) => {
  const texto = e.target.value.toLowerCase();
  const filtradas = preguntasFrecuentes.filter(p =>
    p.pregunta.toLowerCase().includes(texto)
  );
  renderPreguntas(filtradas);
});

// muestra todas las preguntas
renderPreguntas();