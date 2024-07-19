//alert("hola")
//let nombre = prompt("Por davor ingrese algo: ")
//document.querySelector("div").innerText = nombre
const precioProducto = 23;
const precioProductostr = "23";

console.log( precioProducto);
console.log( precioProductostr)

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

console.log(producto1)

console.log(producto1.getModelo())

//sin destructuracion

nombresito = producto1.nombre

console.log(nombresito)

//con desestructuracion

const { descripcion, precio } = producto1;
console.log(descripcion)

const Producto = function(nombre, color, precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}

//2 instancias de Producto

const p1 = new Producto("lapiz HB", "azul", 5500)

console.log(p1)














