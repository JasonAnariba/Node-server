import "colors";
import { inquirerMenu, pausa, leerInput } from "./helpers/inquirer.js";
import Tareas from "./models/tareas.js";

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  let tareasPendientes = [];
  let tareaEncontrada;

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    switch (opt) {
      //codigo para poder crear una tarea
      case "1":
        const desc = await leerInput("Descripcion: ");
        tareas.crearTarea(desc);
        break;

      //codigo para mostrar lista de tareas completadas
      case "2":
        const completadas = tareas.listarCompletadas();
        const completadasFormateadas = completadas.map((tarea) => ({
          id: tarea.id,
          isCompleted: true,
          description: tarea.desc,
        }));

        console.log("\nTareas Completadas:".green);
        completadasFormateadas.forEach((tarea) => {
          console.log(JSON.stringify(tarea,null,2));
        });
        break;

      //cogigo para Borrar tareas completadas
      case "3":
        const tareasCompletadas2 = tareas.listarCompletadas();
        const tareasCompletadasFormateadas2 = tareasCompletadas2.map(
          (tarea, index) => ({
            id: tarea.id,
            isCompleted: true,
            description: tarea.desc,
            index: index + 1, // Agregar el índice para mostrar al usuario
          })
        );

        console.log("\nTareas Completadas:".green);
        tareasCompletadasFormateadas2.forEach((tarea) => {
          console.log(JSON.stringify(tarea, null, 2));
        });

        const tareaEliminarCompletadaIndex = await leerInput(
          "Seleccione el índice de la tarea completada que desea eliminar: "
        );

        const indexEliminarCompletada =
          parseInt(tareaEliminarCompletadaIndex) - 1;

        if (
          indexEliminarCompletada >= 0 &&
          indexEliminarCompletada < tareasCompletadas2.length
        ) {
          const tareaEliminarCompletada =
            tareasCompletadas2[indexEliminarCompletada];
          tareas.borrarTarea(tareaEliminarCompletada.id);
          console.log(
            `Tarea completada "${tareaEliminarCompletada.desc}" eliminada.\n`
              .yellow
          );
        } else {
          console.log("El índice seleccionado no es válido.\n".red);
        }
        break;

      //codigo para mostrar lista de pendientes
      case "4":
        const pendientes = tareas.listarPendientes();
        const pendientesFormateadas = pendientes.map((tarea) => ({
          id: tarea.id,
          isCompleted: false,
          description: tarea.desc,
        }));
        console.log(JSON.stringify(pendientesFormateadas,null, 2));
        break;

      //Borrar tareas pendientes
      case "5":
        const tareasPendientes3 = tareas.listarPendientes();
        const tareasPendientesFormateadas3 = tareasPendientes3.map(
          (tarea, index) => ({
            id: tarea.id,
            isCompleted: false,
            description: tarea.desc,
            index: index + 1, // Agregar el índice para mostrar al usuario
          })
        );

        console.log("\nTareas Pendientes:".red);
        tareasPendientesFormateadas3.forEach((tarea) => {
          console.log(JSON.stringify(tarea, null, 2));
        });

        const tareaEliminarPendienteIndex = await leerInput(
          "Seleccione el índice de la tarea pendiente que desea eliminar: "
        );

        const indexEliminarPendiente =
          parseInt(tareaEliminarPendienteIndex) - 1;

        if (
          indexEliminarPendiente >= 0 &&
          indexEliminarPendiente < tareasPendientes3.length
        ) {
          const tareaEliminarPendiente =
            tareasPendientes3[indexEliminarPendiente];
          tareas.borrarTarea(tareaEliminarPendiente.id);
          console.log(
            `Tarea pendiente "${tareaEliminarPendiente.desc}" eliminada.\n`
              .yellow
          );
        } else {
          console.log("El índice seleccionado no es válido.\n".red);
        }
        break;

      case "6":
        const tareasPendientes2 = tareas.listarPendientes();
        const tareasPendientesFormateadas2 = tareasPendientes2.map(
          (tarea, index) => ({
            id: tarea.id,
            isCompleted: false,
            description: tarea.desc,
            index: index + 1, // Agregar el índice para mostrar al usuario
          })
        );
        console.log(JSON.stringify(tareasPendientesFormateadas2, null, 2));

        console.log("\nTareas Pendientes:".red);
        tareasPendientesFormateadas2.forEach((tarea) => {
          console.log(`${tarea.index}. ${tarea.description}`);
        });

        const tareaSeleccionadaIndex = await leerInput(
          "Seleccione el índice de la tarea que desea marcar como completada: "
        );

        const indexSeleccionado = parseInt(tareaSeleccionadaIndex) - 1;

        if (
          indexSeleccionado >= 0 &&
          indexSeleccionado < tareasPendientes2.length
        ) {
          const tareaEncontrada2 = tareasPendientes2[indexSeleccionado];
          tareas.marcarCompletada(tareaEncontrada2.id);
          console.log(
            `Tarea "${tareaEncontrada2.desc}" marcada como completada.\n`.green
          );
        } else {
          console.log("El índice seleccionado no es válido.\n".red);
        }
        break;

      case "0":
        console.log("Saliendo de la aplicación...\n");
        opt = "0"; // Para salir del bucle y finalizar la aplicación
        break;
    }

    console.log("\n");
    await pausa();
  } while (opt !== "0");
};

main();

