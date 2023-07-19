import "colors";
import { inquirerMenu, pausa, leerInput } from "./helpers/inquirer.js";
import Tareas from "./models/tareas.js";

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  let tareasPendientes = [];

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    switch (opt) {
        //crear tarea
      case "1":
        const desc = await leerInput("Descripcion: ");
        tareas.crearTarea(desc);
        break;
        

        //lista de tareas completadas
      case "2":
        console.log("\nTareas Completadas:\n".green);
        const completadas = tareas.listarCompletadas();
        if (completadas.length === 0) {
          console.log("No hay tareas completadas.\n".green);
        } else {
          completadas.forEach((tarea, index) => {
            console.log(`${(index + 1 + ".").green} ${tarea.desc}`);
          });
        }
        break;
      

        //Borrar tareas completadas
        case "3":
            console.log("\nTareas Completadas:\n".green);
            const Tcompletadas = tareas.listarCompletadas();
            if (Tcompletadas.length === 0) {
              console.log("No hay tareas completadas.\n".green);
            } else {
              Tcompletadas.forEach((tarea, index) => {
                console.log(`${(index + 1 + ".").green} ${tarea.desc}`);
              });
          
              const tareaSeleccionada = await leerInput(
                "Seleccione la tarea que desea borrar: "
              );
              const indexTareaSeleccionada = parseInt(tareaSeleccionada) - 1;
              if (
                indexTareaSeleccionada >= 0 &&
                indexTareaSeleccionada < Tcompletadas.length
              ) {
                const tareaBorrar = Tcompletadas[indexTareaSeleccionada];
                tareas.borrarTarea(tareaBorrar.id);
                console.log(
                  `La tarea "${tareaBorrar.desc}" ha sido borrada de la lista de tareas completadas.\n`
                    .yellow
                );
          
                // Actualizar la lista de tareas completadas después de borrar la tarea
                Tcompletadas.splice(indexTareaSeleccionada, 1);
              } else {
                console.log("La opción seleccionada no es válida.\n".red);
              }
            }
            break;



    //Mostrar lista de pendientes
      case "4":
        console.log("\nTareas Pendientes:\n".red);
        const pendientes = tareas.listarPendientes();
        if (pendientes.length === 0) {
          console.log("No hay tareas pendientes.\n".red);
        } else {
          pendientes.forEach((tarea, index) => {
            console.log(`${(index + 1 + ".").red} ${tarea.desc}`);
          });
        }
        break;

     //Borrar tareas pendientes
        case "5":
  const tareasPendientes = tareas.listarPendientes();
  if (tareasPendientes.length === 0) {
    console.log("No hay tareas pendientes.\n".red);
  } else {
    console.log("\nTareas Pendientes:\n".red);
    tareasPendientes.forEach((tarea, index) => {
      console.log(`${(index + 1 + ".").red} ${tarea.desc}`);
    });

    const tareaSeleccionada = await leerInput(
      "Seleccione la tarea que desea borrar: "
    );
    const indexTareaSeleccionada = parseInt(tareaSeleccionada) - 1;
    if (
      indexTareaSeleccionada >= 0 &&
      indexTareaSeleccionada < tareasPendientes.length
    ) {
      const tareaBorrar = tareasPendientes[indexTareaSeleccionada];
      tareas.borrarTarea(tareaBorrar.id);
      console.log(
        `La tarea "${tareaBorrar.desc}" ha sido borrada de la lista de tareas pendientes.\n`
          .yellow
      );

      // Actualizar la lista de tareas pendientes después de borrar la tarea
      tareasPendientes.splice(indexTareaSeleccionada, 1);
    } else {
      console.log("La opción seleccionada no es válida.\n".red);
    }
  }
  break;

      case "6":
        console.log("\nTareas Pendientes:\n".red);
        const tareasPendientes4 = tareas.listarPendientes();
        if (tareasPendientes4.length === 0) {
          console.log("No hay tareas pendientes.\n".red);
        } else {
          tareasPendientes4.forEach((tarea, index) => {
            console.log(`${(index + 1 + ".").red} ${tarea.desc}`);
          });

          const tareaSeleccionada = await leerInput(
            "Seleccione la tarea que desea marcar como completada: "
          );
          const indexTareaSeleccionada = parseInt(tareaSeleccionada) - 1;
          if (
            indexTareaSeleccionada >= 0 &&
            indexTareaSeleccionada < tareasPendientes4.length
          ) {
            const tareaCompletada = tareasPendientes4[indexTareaSeleccionada];
            tareas.marcarCompletada(tareaCompletada.id);
            console.log(
              `La tarea "${tareaCompletada.desc}" ha sido marcada como completada.\n`
                .green
            );
          } else {
            console.log("La opción seleccionada no es válida.\n".red);
          }

          // No es necesario actualizar la lista de tareas pendientes ya que la tarea se marca directamente en la lista
        }
        break;
       
        case "5":
  const tareasPendientesCompletadas = tareas.listadoArr;
  if (tareasPendientesCompletadas.length === 0) {
    console.log("No hay tareas pendientes o completadas.\n".red);
  } else {
    console.log("\nTareas Pendientes y Completadas:\n".red);
    tareasPendientesCompletadas.forEach((tarea, index) => {
      console.log(`${(index + 1 + ".").red} ${tarea.desc} - ${
        tarea.completada ? "Completada" : "Pendiente"
      }`);
    });

    const tareaSeleccionada = await leerInput(
      "Seleccione la tarea que desea borrar: "
    );
    const indexTareaSeleccionada = parseInt(tareaSeleccionada) - 1;
    if (
      indexTareaSeleccionada >= 0 &&
      indexTareaSeleccionada < tareasPendientesCompletadas.length
    ) {
      const tareaBorrar = tareasPendientesCompletadas[indexTareaSeleccionada];
      tareas.borrarTarea(tareaBorrar.id);
      console.log(
        `La tarea "${tareaBorrar.desc}" ha sido borrada de la lista.\n`.yellow
      );

      // Actualizar la lista de tareas pendientes y completadas después de borrar la tarea
      tareasPendientesCompletadas.splice(indexTareaSeleccionada, 1);
    } else {
      console.log("La opción seleccionada no es válida.\n".red);
    }
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
