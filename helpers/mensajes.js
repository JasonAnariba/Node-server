import 'colors'
import readline, { createInterface } from 'readline';
export const mostrarMenu =() => {

    return new Promise(resolve =>{
        


console.log(`${'1.'.red} Crear Tarea`);
console.log(`${'2.'.red} Listar Tarea`);
console.log(`${'3.'.red} Listar Tareas completadas`);
console.log(`${'4.'.red} Listar Tareas pendientes`);
console.log(`${'5.'.red} Completar Tarea`);
console.log(`${'6.'.red} Borrar Tarea`);
console.log(`${'0.'.red} Salir\n`);

const readline = createInterface({
    input:process.stdin,
    output:process.stdout
});

readline.question('Seleccione una opcion:',(opt) => {
    readline.close();
    resolve(opt);
})

});


}
export const pausa = () =>{

  return new Promise(resolve =>{
    const readline = require('readline').createInterface({
        input:process.stdin,
        output:process.stdout
    });
    readline.question(`\nPresione ${'ENTER'.red} para continuar\n`,(opt) => {
        readline.close();
        resolve();
    })
    
  }) 
    

}

