// Array de objetos que representa a los aprendices
// Cada aprendiz tiene: id, nombre, ficha y nota
const aprendices = [
    { id: 1, nombre: "Alejandro", ficha: 3223874, nota: 4.2 },
    { id: 2, nombre: "Yeison", ficha: 3223874, nota: 3.5 },
    { id: 3, nombre: "Fabian", ficha: 3223875, nota: 2.8 },
    { id: 4, nombre: "Esteban", ficha: 3223875, nota: 4.8 },
];

// --------------------------------------------------
// 1. Funcion de obtenerAprobados(aprendices)
// Esta función devuelve solo los aprendices cuya nota sea mayor o igual a 3.0 (condición de aprobación)
// --------------------------------------------------


console.log();
console.log("--------------------------------------------------");
console.log();

// Función que recibe el arreglo de aprendices
function obtenerAprobados(aprendices) {
    // filter recorre el array y devuelve un NUEVO array con los elementos que sean mayores o iguales a 3.0
    return aprendices.filter(aprendiz => aprendiz.nota >= 3.0);
}

console.log(obtenerAprobados(aprendices));
console.log();
console.log("--------------------------------------------------");
console.log();


// --------------------------------------------------
// 2. Funcion de calcularPromedio(aprendices)
// Calcula el promedio de las notas de todos los aprendices
// --------------------------------------------------

function calcularPromedio(aprendices) {
    // reduce acumula la suma de todas las notas y sum empieza en 0 y se le va sumando cada nota
    const sumaNotas = aprendices.reduce((sum, aprendiz) => sum + aprendiz.nota, 0);

    // Se divide la suma total entre la cantidad de aprendices
    return sumaNotas / aprendices.length;
}

console.log(`El promedio de todos los aprendices es ${calcularPromedio(aprendices)}`);
console.log();
console.log("--------------------------------------------------");
console.log();


// --------------------------------------------------
// 3. Funcion de buscarPorNombre(aprendices, nombre)
// Busca un aprendiz por su nombre exacto
// --------------------------------------------------

function buscarPorNombre(aprendices, nombre) {
    // find devuelve el PRIMER objeto que coincida con la condición indicada
    return aprendices.find(aprendiz => aprendiz.nombre === nombre);
}

// Se busca el aprendiz llamado "Esteban"
console.log(buscarPorNombre(aprendices, "Esteban"));
console.log();
console.log("--------------------------------------------------");
console.log();


// --------------------------------------------------
// 4. Funcion de obtenerNombres(aprendices)
// Devuelve un arreglo solo con los nombres de los aprendices
// --------------------------------------------------

function obtenerNombres(aprendices) {
    // map transforma cada objeto aprendiz en solo su propiedad "nombre"
    return aprendices.map(aprendiz => aprendiz.nombre);
}

console.log(obtenerNombres(aprendices));
console.log();
console.log("--------------------------------------------------");
console.log();
