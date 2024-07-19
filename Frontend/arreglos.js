const nombres = ['lapiz HB',
    'Resaltador',
    'borrador de nata',
    89787,
    true,
    null,
    undefined
];
console.table(nombres)
console.log(nombres[0])
console.log(nombres[1])
console.log(nombres[2])

console.table(nombres)
console.log(nombres[0])
nombres[3] = "Micropunta"
console.table(nombres)
//agregR ELEMENTOS AL FINAL
nombres.push("Corrector");
console.table(nombres)
//agregar elementos al inicio

nombres.unshift("Borrador miga de pan");
console.table(nombres)

//eliminar elementos de un arreglo

delete nombres[3]
console.table(nombres)

//eliminar elementos de un arreglo
delete nombres[4]
console.table(nombres)

//eliminar elementos del final de un arreglo
nombres.pop();
console.table(nombres)

//eliminar elementos del principio

nombres.shift();
console.table(nombres)

for(let i = 0; i<nombres.length ; i=i+1){
    console.log(nombres[i])
}

//operador Spread con arreglos: 
const nombres2 = ["transportador", "Regla 30 cm"]

let productos = [...nombres, ...nombres2]
const elemento = "compas"
const elemento2 = "transportador"
productos = [...productos, elemento, elemento2]
console.table(productos)