import http from "http";
import { URL } from "url";
import Tareas from "./models/tareas.js"; // Importa el módulo Tareas

const host = "localhost";
const port = 8000;

const tareas = new Tareas(); // Crea una instancia del módulo Tareas

const requestListener = function (req, res) {
  const url = new URL(req.url, `http://localhost:${port}`);

  if (req.method === "GET" && url.pathname === "/tareas") {
    // Obtener la lista de tareas pendientes y completadas
    const tareasPendientes = tareas.listarPendientes();
    const tareasCompletadas = tareas.listarCompletadas();

    // Crear un objeto con las listas de tareas pendientes y completadas
    const dataTareas = {
      pendientes: tareasPendientes,
      completadas: tareasCompletadas,
    };

    // Convertir el objeto a formato JSON y enviar la respuesta al cliente
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(dataTareas));
  } else if (req.method === "POST" && url.pathname === "/crear-tarea") {
    // Manejar la creación de una nueva tarea
    // Ejemplo: Obtener el cuerpo de la solicitud POST y agregar la tarea a la lista de tareas pendientes
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const { desc } = JSON.parse(body);
      tareas.crearTarea(desc);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Tarea creada exitosamente" }));
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Ruta no encontrada");
  }
};

const server = http.createServer(requestListener);
server.listen(port, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`);
});