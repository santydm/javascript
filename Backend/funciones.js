//Ejemplos
//Sintáxis: Declaracion de función

function saludo(nombre){
    console.log(`Hola como estas ${nombre}`);
}
//invocar, llamar, ejecutar la función saludo
saludo("santiago")

//Sintáxis: Expresión Función
//Se asigna a una constante
const saludo2 = function(nombre="Cristian2"){//->parametro por defecto
    console.log(`Hola como estas ${nombre}`);
}
saludo2();
