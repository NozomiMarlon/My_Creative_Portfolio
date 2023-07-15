const express = require('express');
const app = express();

// Configurar el middleware para el manejo de solicitudes JSON
app.use(express.json());

// Definir una ruta para manejar la validación del formulario
app.post('/validar-formulario', (req, res) => {
  // Obtener los datos del formulario desde la solicitud
  const { nombre, email, asunto, mensaje } = req.body;

  // Realizar la validación en el servidor
  let errores = {};

  if (!nombre || nombre.trim() === '') {
    errores.nombre = 'Ingrese un nombre válido';
  }

  if (!email || email.trim() === '') {
    errores.email = 'Ingrese un correo electrónico';
  } else {
    // Validar el formato del correo electrónico utilizando una expresión regular, por ejemplo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      errores.email = 'Ingrese un correo electrónico válido';
    }
  }

  if (!asunto || asunto.trim() === '') {
    errores.asunto = 'Ingrese un asunto válido';
  }

  if (!mensaje || mensaje.trim() === '') {
    errores.mensaje = 'Ingrese un mensaje válido';
  }

  // Enviar la respuesta con los errores (si existen)
  if (Object.keys(errores).length > 0) {
    res.status(400).json({ errores });
  } else {
    res.status(200).json({ mensaje: 'Formulario válido' });
  }
});

// Iniciar el servidor en un puerto específico
app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
