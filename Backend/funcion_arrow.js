//Sintáxis Funcion Arrow o Flecha
//Reglas:
//  1. Si el bloque de codigo de la funcion flecha
//     solo tiene una linea, no hace falta ponerle corchetes
//  2. si la funcion flecha tiene un solo parametro,
//     se puede omitir el parentesis de los parametros
//  3. Si el bloque de codigo de la funcion flecha
//     solo tiene una linea, y esta linea debe retornar
//     un valor, es posible omitir el return, pero
//     pero solo si se aplica la regla 1.
const saludo = nombre =>
    `Hola ${nombre} desde una funcion flecha`;


//Invocar a la funcion flecha
console.log(saludo("Cristian"));