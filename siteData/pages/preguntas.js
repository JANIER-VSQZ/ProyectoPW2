import { preguntasFrecuentes } from './faqData.js';

const contenedor = document.getElementById('faq-lista');

preguntasFrecuentes.forEach((item, index) => {
    const pregunta = document.createElement('div');
    pregunta.classList.add('faq-item');

    const encabezado = document.createElement('button');
    encabezado.classList.add('faq-pregunta');
    encabezado.innerText = item.pregunta;
    encabezado.setAttribute('data-index', index);

    const respuesta = document.createElement('div');
    respuesta.classList.add('faq-respuesta');
    respuesta.innerText = item.respuesta;
    respuesta.style.display = 'none';

    encabezado.addEventListener('click', () => {
        const visible = respuesta.style.display === 'block';
        respuesta.style.display = visible ? 'none' : 'block';
    });

    pregunta.appendChild(encabezado);
    pregunta.appendChild(respuesta);
    contenedor.appendChild(pregunta);
});

let todasVisibles = false;

document.getElementById('mostrar-todas').addEventListener('click', (e) => {
  todasVisibles = !todasVisibles;

  document.querySelectorAll('.faq-respuesta').forEach(div => {
    div.style.display = todasVisibles ? 'block' : 'none';
  });

  e.target.textContent = todasVisibles ? 'Ocultar respuestas' : 'Ver respuestas';
});