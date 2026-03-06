
<p align="center">
  <img src="public/agenda.svg" width="200">
</p>


<h1 align="center">Agenda ADSO</h1>


Aplicación web desarrollada con **React + Vite + TailwindCSS** para la gestión de contactos conectada a una **API REST local mediante JSON Server**.
Permite **crear, listar, buscar, ordenar, actualizar y eliminar contactos** con una interfaz moderna y validaciones en el formulario.

🌐 **Demo en producción**
👉 [https://adsoagenda.netlify.app/](https://adsoagenda.netlify.app/)

---

# 📸 Vista de la aplicación

![alt text](/src/images/image.png)
![alt text](/src/images/image-1.png)

---

# 🚀 Características principales

- ✅ Crear contactos
- ✅ Listar contactos desde una API
- ✅ Actualizar información de contactos
- ✅ Eliminar contactos con confirmación
- ✅ Buscador por nombre, correo o etiqueta
- ✅ Ordenamiento alfabético A-Z / Z-A
- ✅ Validaciones en el formulario
- ✅ Alertas visuales con SweetAlert2
- ✅ Interfaz moderna con TailwindCSS
- ✅ Modal de edición de contacto
- ✅ Manejo de estados con React Hooks

---

# 🛠️ Tecnologías utilizadas

| Tecnología  | Uso                          |
| ----------- | ---------------------------- |
| React       | Librería principal de UI     |
| Vite        | Entorno de desarrollo rápido |
| TailwindCSS | Estilos y diseño             |
| JSON Server | Simulación de API REST       |
| SweetAlert2 | Alertas visuales             |
| Netlify     | Despliegue de la aplicación  |

---

# 📂 Estructura del proyecto

```
AGENDA-ADSO
│
├── dist
├── node_modules
├── public
│
├── src
│   ├── assets
│   ├── components
│   │   ├── contactoCard.jsx
│   │   └── formularioContacto.jsx
│   │
│   ├── modules
│   ├── pages
│   │
│   ├── App.jsx
│   ├── app.js
│   ├── config.js
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── db.json
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

# ⚙️ Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/AlejandroLondonoValle/React-Proyect.git
```

Entrar al proyecto:

```bash
cd agenda-adso
```

---

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

### 3️⃣ Iniciar JSON Server

Este proyecto utiliza **JSON Server como backend local**.

```bash
npx json-server --watch db.json --port 3005
```

La API quedará disponible en:

```
http://localhost:3005/contactos
```

---

### 4️⃣ Ejecutar la aplicación

```bash
npm run dev
```

Abrir en el navegador:

```
http://localhost:5173
```

---

# 🔌 API utilizada

La aplicación consume una API REST simulada mediante **JSON Server**.

### Base URL

```
http://localhost:3005/contactos
```

---

### Endpoints

| Método | Endpoint         | Descripción         |
| ------ | ---------------- | ------------------- |
| GET    | `/contactos`     | Listar contactos    |
| POST   | `/contactos`     | Crear contacto      |
| PUT    | `/contactos/:id` | Actualizar contacto |
| DELETE | `/contactos/:id` | Eliminar contacto   |

---

# 🧠 Funcionalidades implementadas

### 📌 Gestión de contactos

* Creación de nuevos contactos
* Actualización mediante modal
* Eliminación con confirmación
* Listado dinámico desde API

### 🔎 Buscador inteligente

Permite buscar contactos por:

* nombre
* correo
* etiqueta

---

### 🔃 Ordenamiento

Se puede ordenar:

* A → Z
* Z → A

---

### ✔ Validaciones

El formulario valida:

* nombre obligatorio
* teléfono obligatorio
* correo obligatorio
* correo debe contener `@`

---

# 🎨 Interfaz

La interfaz fue diseñada con **TailwindCSS** buscando:

* Diseño limpio
* Componentes reutilizables
* Buena experiencia de usuario
* Layout responsive

---

# 🌐 Despliegue

La aplicación está desplegada en **Netlify**.

🔗 [https://adsoagenda.netlify.app/](https://adsoagenda.netlify.app/)

---

# 📚 Configuración centralizada

Archivo:

```
src/config.js
```

Permite modificar fácilmente:

```javascript
export const API_BASE_URL = "http://localhost:3005/contactos";

export const APP_INFO = {
  ficha: "3223876",
  titulo: "Agenda ADSO v8",
  subtitulo:
    "Gestión de contactos conectada a una API local con JSON Server",
};
```

---

# 👨‍💻 Autor
Luis Alejandro Londoño Valle
**Aprendiz ADSO**
Ficha: **3223876**

Proyecto académico del programa:

**Análisis y Desarrollo de Software – SENA**

---

# 👨‍🏫 Instructor

**Gustavo Adolfo Bolaños Dorado**

---

# 📜 Licencia

Proyecto desarrollado con fines **educativos y de aprendizaje**.

---

