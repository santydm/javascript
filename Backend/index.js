//Template string
//alternativa a la concatencacion 
//Permite incrustar un valor dentro e un string
//las comillas que se permiten trabajar para javascript ("", '',``)

console.log("carrito de compras..")
const nombreProducto = String("Lenovo V4")
const nombreProducto2 = String("huawei 8s")
let nombreProducto3 = String("samsung s5")
console.log(nombreProducto)
console.log(nombreProducto2)
console.log(nombreProducto3)
console.log(`el nombre del producto es: ${nombreProducto}`)
const precioProducto = 23;
const precioProductostr = "23";

console.log( precioProducto);
console.log( precioProductostr);
console.log(precioProducto === precioProductostr)

//objeto producto:
//objeto literal:
const producto1 = {
    nombre : "lenovo8",
    modelo : "IU643",
    color : "Red",
    precio: 2340000.89, 
    descripcion : "laptop para trabajo liviano",
    getModelo: function(){
        console.log(this.modelo);
    }
}
producto1.imagen = "imagen1.jpg"
console.log(producto1)
console.log(producto1.getModelo())

//sin destructuracion

nombresito = producto1.nombre

console.log(nombresito)

//con desestructuracion

const { descripcion, precio } = producto1;
console.log(descripcion)

//object constructor

const Producto = function(nombre, color, precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}

//2 instancias de Producto

const p1 = new Producto("lapiz HB", "azul", 5500)

console.log(p1)
console.log(producto1.imagen)

// operador spread

const medidas = {
    "peso": "50kg",
    "altura": "1m",
    "largo": "50cm"
}
nuevoProducto = {...producto1, ...medidas};
console.log(nuevoProducto)