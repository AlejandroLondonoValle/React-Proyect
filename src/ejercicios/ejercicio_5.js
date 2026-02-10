// Lista de productos con nombre, precio y stock
const productos = [
  { nombre: "Laptop", precio: 1200000, stock: 5 },
  { nombre: "Mouse", precio: 35000, stock: 0 },
  { nombre: "Teclado", precio: 85000, stock: 12 }
];

console.log();
console.log("--------------------------------------------------");
console.log();
// Función que devuelve solo los productos que tienen stock disponible
function obtenerDisponibles(){ 
    // filter recorre el arreglo y devuelve solo los productos
    // cuyo stock sea mayor a 0
    return productos.filter(producto => producto.stock > 0);
}

// Muestra en consola los productos disponibles
console.log("obtenerDisponible:\n", obtenerDisponibles());
console.log();
console.log("--------------------------------------------------");
console.log();

// Función que calcula el valor total del inventario
function calcularInventario(){
    // reduce acumula la suma de los precios de todos los productos
    // total empieza en 0
    return productos.reduce((total, producto) => {
        // se va sumando el precio de cada producto al total
        return total + producto.precio;
    }, 0); 
}

// Muestra en consola el valor total del inventario
console.log("calcularInventario:\n", calcularInventario());
console.log();
console.log("--------------------------------------------------");
console.log();

// Función que aplica un descuento del 10% a todos los productos
function aplicarDescuento(){
    // map crea un nuevo arreglo con los precios modificados
    return productos.map(producto => {
        // se calcula el nuevo precio con descuento
        const precioDescuento = producto.precio - (producto.precio * 0.1);

        // se retorna un nuevo objeto copiando el producto original
        // y reemplazando el precio por el precio con descuento
        return {
            ...producto,
            precio: precioDescuento
        };
    });
}

// Muestra en consola los productos con descuento aplicado
console.log("aplicarDescuento:\n", aplicarDescuento());
console.log();
console.log("--------------------------------------------------");
console.log();

// Función que ordena los productos por precio de mayor a menor
function ordenarPorPrecio(){
    // sort ordena el arreglo comparando los precios
    // b.precio - a.precio lo ordena de forma descendente
    return productos.sort((a, b) => b.precio - a.precio);
}

// Muestra en consola los productos ordenados por precio
console.log("ordenarDescuento:\n", ordenarPorPrecio());
console.log();
console.log("--------------------------------------------------");
console.log();





