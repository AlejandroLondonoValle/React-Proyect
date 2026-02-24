import { useState, useEffect } from "react";
import "./App.css";
import FormularioContacto from "./components/formularioContacto";
import ContactoCard from "./components/contactoCard";

export default function App() {
  const contactosGuardados =
    JSON.parse(localStorage.getItem("contactos")) || [];

  const [contactos, setContactos] = useState(contactosGuardados);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  const agregarContacto = (nuevo) => {
    setContactos((prev) => [...prev, nuevo]);
  };

  const eliminarContacto = (correo) => {
    setContactos((prev) => prev.filter((c) => c.correo !== correo));
  };

  return (
    <main className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-morado text-center mb-2">Agenda ADSO v3</h1>
      <p className="text-gray-500 text-center mb-6">
        Interfaz moderna con TailwindCSS
      </p>

      <FormularioContacto onAgregar={agregarContacto} />

      {contactos.map((c) => (
        <ContactoCard
          key={c.correo}
          {...c}
          onEliminar={eliminarContacto}
        />
      ))}
    </main>
  );
}
