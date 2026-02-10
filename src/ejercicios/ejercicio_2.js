// Ejercicio 2
const aprendices = [
    { nombre: "Luis Londoño", nota: 5.0 },
    { nombre: "Fabian Hernandez", nota: 5.0 },
    { nombre: "Yeison Zapata", nota: 5.0 },
    { nombre: "Esteban Isaza", nota: 5.0 }
];


console.log();
console.log();
console.log("------------------------------------------------------------------------");
console.log("| Resultados Grupales");
console.log("------------------------------------------------------------------------");


// Filtrar aprobados
const aprobados = aprendices.filter(a => a.nota >= 3.0);
console.log("| Aprobados:", aprobados.length);

// Calcular promedio general
const totalNotas = aprendices.reduce((sum, a) => sum + a.nota, 0);
const promedioGrupo = totalNotas / aprendices.length;
console.log("| Promedio grupo:", promedioGrupo.toFixed(2));

// Generar lista de nombres
const nombres = aprendices.map(a => a.nombre);
console.log("| Nombres:", nombres.join(", "));
console.log("------------------------------------------------------------------------");
console.log();
console.log();
