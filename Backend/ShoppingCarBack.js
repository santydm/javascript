const carrito = [
    {
    nombre : "Lenovo ThinkPad",
    descripción : "Laptop para oficina",
    tipo_de_producto : "Computador Portatil",
    modelo : "VG6",
    precio: {
        miniVenta: 3000000,
        compra: 1000000
        },
    caracteristicas : {
        dimensiones: {
            alto : "2 cm",
            ancho : "50 cm",
            largo : "30 cm"
        },
        fabricacion: {
            pais : "Taiwan",
            fecha : new Date('2017-05-02')
        }
    },
    obtenerPrecioCompra: function(){
        return this.precio.compra
    }
    },

    {
    nombre : "Tecno camon pro 19",
    descripción : "Celular",
    tipo_de_producto : "Celular android gama media",
    modelo : "camon 19 pro",
    precio: {
        miniVenta: 200000,
        compra: 10000
        },
    caracteristicas : {
        dimensiones: {
            alto : "3 cm",
            ancho : "1.5 cm",
            largo : "4 cm"
        },
        fabricacion: {
            pais : "colombia",
            fecha : new Date('2019-08-03')
        }
    },
    obtenerPrecioCompra: function(){
        return this.precio.compra
    }
    },

    {
        nombre : "Airpods",
        descripción : "Audifonos bluethoot",
        tipo_de_producto : "audifonos bluethoot 5.0",
        modelo : "Airpots iphone",
        precio: {
            miniVenta: 200000,
            compra: 10000
            },
        caracteristicas : {
            dimensiones: {
                alto : "8 mm",
                ancho : "4 mm",
                largo : "6 mm"
            },
            fabricacion: {
                país : "colombia",
                fecha : new Date('2019-08-03')
            }
        },
        obtenerPrecioCompra: function(){
            return this.precio.compra
        }
    },

    {
        nombre : "iphone 14",
        descripción : "Celular",
        tipo_de_producto : "Celular iphone gama media",
        modelo : "iphone 14",
        precio: {
            miniVenta: 2300000,
            compra: 120000
            },
        caracteristicas : {
            dimensiones: {
                alto : "3 cm",
                ancho : "1.5 cm",
                largo : "4 cm"
            },
            fabricacion: {
                pais : "china",
                fecha : new Date('2019-08-03')
            }
        },
        obtenerPrecioCompra: function(){
            return this.precio.compra
        }
        },

        {
            nombre : "teclado",
            descripción : "teclado mecanico para escritorio",
            tipo_de_producto : "teclado mecanico",
            modelo : "onix",
            precio: {
                miniVenta: 9000,
                compra: 2000
                },
            caracteristicas : {
                dimensiones: {
                    alto : 3,
                    ancho : 1.5,
                    largo : 4
                },
                fabricacion: {
                    pais : "colombia",
                    fecha : new Date('2019-08-03')
                }
            },
            obtenerPrecioCompra: function(){
                return this.precio.compra
            }
            }
]

//imprimir nombre


//ejecutar metodo: obtener precio de compra 
console.log(carrito[0].obtenerPrecioCompra())
console.log(carrito[1].obtenerPrecioCompra())
//No retorna un nuevo arreglo
carrito.forEach(producto => {
    if(producto.caracteristicas.fabricacion.pais === 'Taiwan')
    console.log(producto.nombre)
})
//metodo de transformacion map, si crea un nuevo arreglo
let preciosCompra = carrito.map((producto) => {
    return producto.precio.compra
})

console.log(preciosCompra)

//filter: Recorre el arreglo buscando elementos
//        que concuerden con la condicional establecida
//        en el filtro creando un nuevo arreglo con
//        objetos que cumplen dicho filtro
let productos_de_taiwan = carrito.filter((producto) => {
    return producto.caracteristicas.fabricacion.pais == "Taiwan"
})

//console.log(productos_de_taiwan)

//calculo del total del inventario
let total = 0 
carrito.forEach(producto => {
    //acumular el valor de compra
    //de cada producto recorrido
    //en la variable total
    total += producto.precio.compra
})

//console.log(`el valor total de los productos es: ${total}`)

//utilizanfo el metodo reduce: reduce a un solo valor 
//el arreglo, con base en una exprecion 


//let inventario = carrito.reduce((total, producto)=>{
//    return total + producto.precio.compra
//}, 0)

//console.log(inventario)

//console.log(carrito[0].nombre)

//nombre, tipo de producto, modelo, dimensión largo, y el país de fabricación.
//punto 5.1:

let productoss = carrito
for (let producto of carrito) {
  console.log(producto);
}

console.log(productoss)
//punto 6:
let total1 = 0 
carrito.forEach(producto => {
    //acumular el valor de compra
    //de cada producto recorrido
    //en la variable total
    total1 += producto.precio.compra
})
console.log(total1)

//punto 7:
let productos_de_china = carrito.filter((producto) => {
    return producto.caracteristicas.fabricacion.pais === "china"
})

console.log(`producto proveniente de china es: ${productos_de_china[0].nombre}`)

//punto 7.2:
carrito.forEach((producto) => {
    if(producto.caracteristicas.dimensiones.alto >= 2)
        console.log(producto.nombre)
})

//punto 7.3:
productossacados = carrito.forEach((producto)=>{
    if(producto.precio.compra <= 10000)
        console.log(producto.nombre)
})
