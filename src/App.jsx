import { useState } from "react";
import "./App.css";
import ContactoCard from "./components/contactoCard";
import FormularioContacto from "./components/formularioContacto";

export default function App() {

  const [contactos, setContactos] = useState([
    {
      id: 1,
      nombre: "Carolina Pérez",
      telefono: "300 123 4567",
      correo: "carolina@sena.edu.co",
      etiqueta: "Compañera",
    },
  ]);

  const agregarContacto = (nuevo) => {
    setContactos((prev) => [...prev, { id: Date.now(), ...nuevo }]);
  };

  const eliminarContacto = (id) => {
    setContactos((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <main className="app-container">

      <h1 className="app-title">Agenda ADSO 📒</h1>

      <FormularioContacto onAgregar={agregarContacto} />

      <p className="app-subtitle">Contactos guardados</p>

      {contactos.map((c) => (
        <ContactoCard
          key={c.id}
          id={c.id}
          nombre={c.nombre}
          telefono={c.telefono}
          correo={c.correo}
          etiqueta={c.etiqueta}
          onDelete={eliminarContacto}
        />
      ))}

    </main>
  );
}
