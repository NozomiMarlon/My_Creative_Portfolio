// Función para validar el campo de correo electrónico
function validarEmail() {
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValue.match(emailRegex)) {
    emailInput.classList.add('input-container--invalid');
    emailInput.nextElementSibling.textContent = 'Ingrese un correo electrónico válido';
  } else {
    emailInput.classList.remove('input-container--invalid');
    emailInput.nextElementSibling.textContent = '';
  }
}

// Función para validar el formulario antes de enviarlo
function validarFormulario(event) {
  const nombreInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const asuntoInput = document.getElementById('subject');
  const mensajeInput = document.getElementById('message');

  // Validar nombre
  if (nombreInput.value.trim() === '') {
    nombreInput.classList.add('input-container--invalid');
    nombreInput.nextElementSibling.textContent = 'Ingrese un nombre válido';
    event.preventDefault();
  } else {
    nombreInput.classList.remove('input-container--invalid');
    nombreInput.nextElementSibling.textContent = '';
  }

  // Validar correo electrónico
  if (emailInput.value.trim() === '') {
    emailInput.classList.add('input-container--invalid');
    emailInput.nextElementSibling.textContent = 'Ingrese un correo electrónico';
    event.preventDefault();
  } else {
    emailInput.classList.remove('input-container--invalid');
    emailInput.nextElementSibling.textContent = '';
  }

  // Validar asunto
  if (asuntoInput.value.trim() === '') {
    asuntoInput.classList.add('input-container--invalid');
    asuntoInput.nextElementSibling.textContent = 'Ingrese un asunto válido';
    event.preventDefault();
  } else {
    asuntoInput.classList.remove('input-container--invalid');
    asuntoInput.nextElementSibling.textContent = '';
  }

  // Validar mensaje
  const mensajeValue = mensajeInput.value;
  const limiteCaracteres = 200; // Establecer el límite de caracteres deseado

  if (mensajeValue.trim() === '') {
    mensajeInput.classList.add('input-container--invalid');
    mensajeInput.nextElementSibling.textContent = 'Ingrese un mensaje válido';
    event.preventDefault();
  } else if (mensajeValue.length > limiteCaracteres) {
    mensajeInput.classList.add('input-container--invalid');
    mensajeInput.nextElementSibling.textContent = `El mensaje debe tener hasta ${limiteCaracteres} caracteres`;
    event.preventDefault();
  } else {
    mensajeInput.classList.remove('input-container--invalid');
    mensajeInput.nextElementSibling.textContent = '';
  }
}

// Asociar las funciones a los eventos correspondientes

// Validar el campo de correo electrónico en tiempo real
document.getElementById('email').addEventListener('input', validarEmail);

// Validar el formulario antes de enviarlo
document.querySelector('.contact__form').addEventListener('submit', validarFormulario);
