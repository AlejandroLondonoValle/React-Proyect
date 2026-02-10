//Ejercicio 3
const crearContacto = (nombre, telefono) => ({
    id: Date.now(),
    nombre: nombre,
    telefono: telefono,
    fechaCreacion: new Date().toLocaleDateString()
});

const contacto1 = crearContacto("Alejandro Londoño", "123456789");
const contacto2 = crearContacto("Yeison Zapata", "36527365");
const contacto3 = crearContacto("Esteban Isaza", "4637284");
const contacto4 = crearContacto("Fabian Hernandez", "432424");
console.log();

console.log(contacto1);
console.log(contacto2);
console.log(contacto3);
console.log(contacto4);
console.log();

console.log("--------------------------------------------------------------------");
const { nombre: nombreContacto, telefono } = contacto1;
console.log(`| Contacto 1: ${nombreContacto} - ${telefono}`);
const { nombre: nombreContacto1, telefono: telefono1} = contacto2;
console.log(`| Contacto 2: ${nombreContacto1} - ${telefono1}`);
const { nombre: nombreContacto2, telefono: telefono2 } = contacto3;
console.log(`| Contacto 3: ${nombreContacto2} - ${telefono2}`);
const { nombre: nombreContacto3, telefono: telefono3 } = contacto4;
console.log(`| Contacto 4: ${nombreContacto3} - ${telefono3}`);
console.log("--------------------------------------------------------------------");
