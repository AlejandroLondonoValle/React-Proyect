# 📘 Ejercicios de JavaScript – Funciones, Arrays y Métodos

Este repositorio contiene una serie de **ejercicios prácticos en JavaScript** orientados a reforzar conceptos fundamentales como:

* Variables y constantes
* Operadores aritméticos y lógicos
* Uso de arrays de objetos
* Métodos de arrays (`map`, `filter`, `reduce`, `find`, `sort`)
* Funciones tradicionales y funciones flecha
* Desestructuración de objetos
* Buenas prácticas de lectura y organización del código

Todos los ejercicios están desarrollados en un solo archivo llamado **`Ejercicios.js`** y se ejecutan directamente desde consola.

---

## 🧑‍🎓 Integrantes del grupo

* **Fabian Ricardo Hernandez Valencia**
* **Juan Esteban Isaza Gomez**
* **Luis Alejandro Londoño Valle**
* **Yeison Alejandro Zapata Gomez**

---

## 📂 Estructura del archivo

El archivo `Ejercicios.js` está dividido por secciones, cada una representando un ejercicio independiente. A continuación se explica **detalladamente qué hace cada bloque y cada función**.

---

## 🧮 Ejercicio 1 – Cálculo de promedio y estado del aprendiz

### 📌 Descripción

En este ejercicio se definen los datos básicos de un aprendiz y se calcula el promedio de tres notas para determinar si aprueba o no.

### 🔍 ¿Qué hace el código?

* Se declaran constantes con:

  * Nombre del aprendiz
  * Cédula
  * Ficha
  * Tres notas
* Se calcula el **promedio** sumando las notas y dividiéndolas entre 3.
* Se evalúa si el promedio es mayor o igual a `3.0`.
* Se imprime en consola un reporte estructurado con toda la información.

### 🧠 Conceptos usados

* Operadores aritméticos
* Operador ternario (`? :`)
* Método `toFixed()` para limitar decimales
* Plantillas de texto (template literals)

---

## 👥 Ejercicio 2 – Análisis grupal de aprendices

### 📌 Descripción

Se trabaja con un **array de objetos** que representa un grupo de aprendices con su nombre y nota.

### 🔍 Funcionalidades

#### ✅ Filtrar aprobados

```js
aprendices.filter(a => a.nota >= 3.0)
```

* Devuelve un nuevo arreglo con solo los aprendices aprobados.
* Se imprime la cantidad total de aprobados.

#### 📊 Calcular promedio grupal

```js
aprendices.reduce((sum, a) => sum + a.nota, 0)
```

* Suma todas las notas del grupo.
* Luego se divide entre el número total de aprendices.

#### 📝 Obtener nombres

```js
aprendices.map(a => a.nombre)
```

* Extrae solo los nombres de los aprendices.
* Se muestran en consola separados por coma.

### 🧠 Conceptos usados

* `filter`
* `reduce`
* `map`
* Arrays de objetos

---

## 📇 Ejercicio 3 – Creación y manejo de contactos

### 📌 Descripción

Se implementa una función que crea objetos de contacto de forma dinámica.

### 🛠 Función `crearContacto(nombre, telefono)`

```js
const crearContacto = (nombre, telefono) => ({ ... })
```

#### ¿Qué hace?

* Genera un objeto contacto con:

  * `id` único usando `Date.now()`
  * Nombre
  * Teléfono
  * Fecha de creación

Se crean cuatro contactos y se imprimen en consola.

### 🔓 Desestructuración

```js
const { nombre, telefono } = contacto1;
```

* Permite extraer propiedades del objeto directamente en variables.
* Se usa para mostrar la información de cada contacto de forma clara.

### 🧠 Conceptos usados

* Funciones flecha
* Objetos
* Desestructuración
* Fechas en JavaScript

---

## 🎓 Ejercicio 4 – Gestión de aprendices con funciones

Se trabaja con un arreglo más completo de aprendices (`id`, `nombre`, `ficha`, `nota`).

### ✅ Función `obtenerAprobados(aprendices)`

* Retorna solo los aprendices con nota mayor o igual a `3.0`.
* Usa el método `filter`.

---

### 📊 Función `calcularPromedio(aprendices)`

* Suma todas las notas usando `reduce`.
* Divide el total entre la cantidad de aprendices.
* Retorna el promedio general.

---

### 🔍 Función `buscarPorNombre(aprendices, nombre)`

* Busca un aprendiz por su nombre exacto.
* Usa el método `find`.
* Retorna el primer objeto que coincida.

---

### 📝 Función `obtenerNombres(aprendices)`

* Devuelve un arreglo con solo los nombres.
* Usa `map` para transformar el array original.

---

## 🛒 Ejercicio 5 – Gestión de productos e inventario

Se trabaja con un arreglo de productos que contienen:

* Nombre
* Precio
* Stock

---

### 📦 Función `obtenerDisponibles()`

* Filtra los productos que tienen stock mayor a 0.
* Ideal para mostrar productos disponibles para venta.

---

### 💰 Función `calcularInventario()`

* Calcula el valor total del inventario.
* Suma los precios de todos los productos usando `reduce`.

---

### 🔻 Función `aplicarDescuento()`

* Aplica un **10% de descuento** a cada producto.
* Retorna un nuevo arreglo sin modificar el original.
* Usa el operador spread (`...`).

---

### 📉 Función `ordenarPorPrecio()`

* Ordena los productos de mayor a menor precio.
* Utiliza el método `sort`.

⚠️ Nota: `sort` modifica el arreglo original.

---

## 🚀 Conclusión

Este conjunto de ejercicios demuestra el uso práctico de **JavaScript moderno**, enfocándose en el manejo de datos reales mediante funciones limpias y reutilizables.

Es una base sólida para comprender cómo trabajar con información en aplicaciones reales, tanto en frontend como backend.

---

💻 *Desarrollado como ejercicio académico en JavaScript de ADSO*
