import express from 'express';
import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import Tareas from './models/tareas.js';

const app = express();
const port = 3000; // Puedes cambiar el puerto si es necesario

// Configura middleware para procesar solicitudes JSON
app.use(express.json());

// Crea una instancia de Tareas
const tareas = new Tareas();

// Define rutas para tu API
app.get('/tareas-pendientes', (req, res) => {
  const tareasPendientes = tareas.listarPendientes();
  res.json(tareasPendientes);
});

app.post('/tareas', (req, res) => {
  // Crea una nueva tarea utilizando la solicitud JSON recibida
  const { desc } = req.body;
  tareas.crearTarea(desc);
  res.status(201).json({ message: 'Tarea creada con éxito' });
});

// Define otras rutas según tus necesidades (marcar como completada, borrar, etc.)

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});