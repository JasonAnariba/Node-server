import inquirer from "inquirer";

import "colors";

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que desea hacer?",
    choices: [
      {
        value: "1",
        name: `${'1.'.red} Crear tarea`,
      },
      
      {
        value: "2",
        name: `${'2.'.red} Listar tarea completadas`,
      },
      {
        value: "3",
        name: `${'3.'.red} Borrar tarea completadas`,
      },
      {
        value: "4",
        name: `${'4.'.red} Listar tarea pendientes`,
      },
      {
        value: "5",
        name: `${'5.'.red} Borrar tarea pendientes`,
      },
      {
        value: "6",
        name: `${'6.'.red} Completar tarea (s)`,
      },
     
      {
        value: "0",
        name: `${'0.'.red} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  //console.clear();
  console.log("==============================".red);
  console.log("  Seleccion una opcion   ".white);
  console.log("==============================\n".red);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `presione ${"enter".green} para continuar`,
    },
  ];

  await inquirer.prompt(question);
};
const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];

const {desc} = await inquirer.prompt(question);
return desc;

}

export { inquirerMenu };
export { pausa };
export {leerInput};