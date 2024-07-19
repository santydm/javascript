//Definir un arreglo de nombres de  producto

const nombres = ['lapiz HB',
                 'Resaltador',
                 'borrador de nata'

];
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

for(let i = 0; i<nombres.length ; i=i+1){
    console.log(nombres[i])
}