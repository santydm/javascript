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
            país : "Taiwan",
            fecha : new Date('2017-05-02')
        },
        obtenerPrecioCompra: function(){
            this.precio.compra
        }
    }
    
    }
]

//imprimir nombre
console.log(carrito[0])

//ejecutar metodo: obtener precio de compra 
console.log(carrito[0].obtenerPrecioCompra)