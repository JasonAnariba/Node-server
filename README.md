# Node-server
/////////////////////////////////////
¿Qué sucedio al usar async y await?
//////////////////////////////////////
Cuando se utiliza async antes de una función, esa función se convierte en una función asíncrona que devuelve una promesa. Dentro de esta función, se puede utilizar la palabra clave await antes de una expresión que devuelve una promesa. Esto hace que la ejecución de la función se detenga hasta que la promesa se resuelva o se rechace.

En el código creado en esta ocasion las funciones main, pausa y leerInput utilizan async y await para esperar las respuestad de las promesas devueltas por las funciones de 'inquirer.prompt.(decidi usar este paguete npm porque me guie por algunos videos y me gusto esta metodologia).....Esto permite que la ejecución se detenga hasta que el usuario proporcione una entrada o seleccione una opción.

///////////////////////////////////////////////////////////////////
¿Qué diferencias encontraste entre async, await y el método then()?
///////////////////////////////////////////////////////////////////
Estos metodos de trabajo son promesas de forma asincrona (async, await,.then())... Sin embargo, async y await brindan una sintaxis más concisa y legible para trabajar con operaciones asíncronas y promesas, lo que hace que el código sea más fácil de entender.

El método then(), por otro lado, es una forma más tradicional que puede resultar menos legible en comparación con el enfoque async/await.