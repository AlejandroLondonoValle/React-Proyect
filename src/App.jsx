// Archivo: src/App.jsx
// Componente principal de la aplicación Agenda ADSO.
// Se encarga de:
// - Cargar la lista de contactos desde la API.
// - Manejar estados globales (contactos, carga, error).
// - Conectar el formulario y las tarjetas de contactos.


// Importamos la configuración global de la aplicación
import { APP_INFO } from "./config";

// Importamos la libreria de Sweetalert2
import Swal from "sweetalert2";

// Importamos useEffect y useState
import { useEffect, useState } from "react";

// Importamos los servicios que se comunican con JSON Server
import {
  listarContactos,
  crearContacto,
  eliminarContactoPorId,
  actualizarContacto
} from "./app";

// Importamos los componentes hijos
import FormularioContacto from "./components/formularioContacto";
import ContactoCard from "./components/contactoCard";

// Componente principal
function App() {
  // Estados principales
  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  //Estados de alerta
  const [mensajeExito, setMensajeExito] = useState("");

  // useEffect para cargar contactos al iniciar
  useEffect(() => {
    const cargarContactos = async () => {
      try {
        setCargando(true);
        setError("");

        const data = await listarContactos();
        setContactos(data);
      } catch (error) {
        console.error("Error al cargar contactos:", error);

        setError(
          "No se pudieron cargar los contactos. Verifica que el servidor esté encendido e intenta de nuevo."
        );
      } finally {
        setCargando(false);
      }
    };

    cargarContactos();
  }, []);

  // Agregar contacto
  const onAgregarContacto = async (nuevoContacto) => {
    try {
      setError("");

      const creado = await crearContacto(nuevoContacto);

      setContactos((prev) => [...prev, creado]);

      // Alerta de creacion
      setMensajeExito("Contacto agregado correctamente ✅");

      // Que desaparezca después de 3 segundos
      setTimeout(() => {
        setMensajeExito("");
      }, 3000);

    } catch (error) {
      console.error("Error al crear contacto:", error);

      setError(
        "No se pudo guardar el contacto. Verifica tu conexión o el estado del servidor e intenta nuevamente."
      );

      throw error;
    }
  };

  // Eliminar contacto
  const onEliminarContacto = async (id) => {
    const result = await Swal.fire({
      title: "¿Eliminar contacto?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7c3aed",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return;

    try {
      setError("");

      await eliminarContactoPorId(id);

      setContactos((prev) => prev.filter((c) => c.id !== id));

      Swal.fire({
        icon: "success",
        title: "Eliminado",
        text: "El contacto fue eliminado correctamente",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Error al eliminar contacto:", error);

      setError(
        "No se pudo eliminar el contacto. Vuelve a intentarlo o verifica el servidor."
      );
    }
  };

  // Actualizar contacto
  const [mostrarModal, setMostrarModal] = useState(false);
  const [contactoSeleccionado, setContactoSeleccionado] = useState(null);
  const [formEditar, setFormEditar] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    empresa: "",
    etiqueta: "",
  });

  const abrirModalEditar = (contacto) => {
    setContactoSeleccionado(contacto);
    setFormEditar({
      nombre: contacto.nombre,
      telefono: contacto.telefono,
      correo: contacto.correo,
      empresa: contacto.empresa,
      etiqueta: contacto.etiqueta,
    });
    setMostrarModal(true);
  };

  const confirmarActualizacion = async () => {
    const result = await Swal.fire({
      title: "¿La información es correcta?",
      text: "Confirma que los datos editados son correctos.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#7c3aed",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, actualizar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return;

    try {
      const contactoActualizado = await actualizarContacto(
        contactoSeleccionado.id,
        formEditar
      );

      setContactos((prev) =>
        prev.map((c) =>
          c.id === contactoActualizado.id ? contactoActualizado : c
        )
      );

      setMostrarModal(false);

      Swal.fire({
        icon: "success",
        title: "Actualizado correctamente",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Error al actualizar contacto:", error);

      setError(
        "No se pudo actualizar el contacto. Vuelve a intentarlo o verifica el servidor."
      );
    }
  };


  // Filtrado de contactos
  // Estado para le termino de busqueda digitado por el usuario
  const [busqueda, setBusqueda] = useState("");

  // Estado para el orden de los contactos : True = Ascendente, False = Descendente
  const [ordenAsc, setOrdenAsc] = useState(true);

  // Filtramos la lista original según el término de búsqueda
  const contactosFiltrados = contactos.filter((c) => {
    const termino = busqueda.toLowerCase();
    // Normalizamos texto a minúsculas para comparar sin problemas
    const nombre = c.nombre.toLowerCase();
    const correo = c.correo.toLowerCase();
    const etiqueta = (c.etiqueta || "").toLowerCase();
    // Incluimos el contacto si el término aparece en alguno de estos campos
    return (
      nombre.includes(termino) ||
      correo.includes(termino) ||
      etiqueta.includes(termino)
    );
  });

  // Ordenamos los contactos filtrados por nombre
  const contactosOrdenados = [...contactosFiltrados].sort((a, b) => {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();
    if (nombreA < nombreB) return ordenAsc ? -1 : 1;
    if (nombreA > nombreB) return ordenAsc ? 1 : -1;
    return 0;
  });



  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase text-center">
            Desarrollo Web ReactJS Ficha {APP_INFO.ficha}
          </p>

          <h1 className="text-4xl font-extrabold text-gray-900 mt-2 text-center">
            {APP_INFO.titulo}
          </h1>

          <p className="text-sm text-gray-600 mt-1 text-center">
            {APP_INFO.subtitulo}
          </p>
        </header>

        {/* Error global */}
        {error && (
          <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
            <p className="text-sm font-medium text-red-700">{error}</p>
          </div>
        )}

        {/* Alerta de guardado */}
        {mensajeExito && (
          <div className="mb-4 rounded-xl bg-green-50 border border-green-200 px-4 py-3">
            <p className="text-sm font-medium text-green-700">
              {mensajeExito}
            </p>
          </div>
        )}

        {/* Estado de carga */}
        {cargando ? (
          <p className="text-sm text-gray-500">Cargando contactos...</p>
        ) : (
          <>
            {/* Formulario */}
            <FormularioContacto onAgregar={onAgregarContacto} />

            {/* Buscador y botón de orden */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
              <input
                type="text"
                className="w-full h-9 px-4 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition"
                placeholder="Buscar por nombre, correo o etiqueta..."
                value={busqueda} // Input controlado
                onChange={(e) => setBusqueda(e.target.value)} // Actualiza el estado
              />

              <button
                type="button"
                onClick={() => setOrdenAsc((prev) => !prev)} // Alternar A-Z / Z-A
                className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-200"
              >
                {ordenAsc ? "Ordenar Z-A" : "Ordenar A-Z"}
              </button>
            </div>


            {/* Lista */}
            <section className="space-y-4">
              {contactos.length === 0 ? (
                <p className="text-sm text-gray-500">
                  Aún no tienes contactos registrados. Agrega el primero usando
                  el formulario superior.
                </p>
              ) : (
                contactosOrdenados.map((c) => (
                  <ContactoCard
                    key={c.id}
                    nombre={c.nombre}
                    telefono={c.telefono}
                    correo={c.correo}
                    empresa={c.empresa}
                    etiqueta={c.etiqueta}
                    onEliminar={() => onEliminarContacto(c.id)}
                    onActualizar={() => abrirModalEditar(c)}
                  />
                ))
              )}
            </section>
            {mostrarModal && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                <div className="bg-white rounded-2xl p-8 w-full max-w-2xl">
                  <h2 className="text-xl font-bold mb-4 text-center">Editar Contacto</h2>

                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Nombre"
                      value={formEditar.nombre}
                      onChange={(e) =>
                        setFormEditar({ ...formEditar, nombre: e.target.value })
                      }
                      className="w-full h-9 px-4 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition"
                    />

                    <input
                      type="text"
                      placeholder="Teléfono"
                      value={formEditar.telefono}
                      onChange={(e) =>
                        setFormEditar({ ...formEditar, telefono: e.target.value })
                      }
                      className="w-full h-9 px-4 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition"
                    />

                    <input
                      type="email"
                      placeholder="Correo"
                      value={formEditar.correo}
                      onChange={(e) =>
                        setFormEditar({ ...formEditar, correo: e.target.value })
                      }
                      className="w-full h-9 px-4 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition"
                    />

                    <input
                      type="text"
                      placeholder="Empresa"
                      value={formEditar.empresa}
                      onChange={(e) =>
                        setFormEditar({ ...formEditar, empresa: e.target.value })
                      }
                      className="w-full h-9 px-4 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition"
                    />

                    <input
                      type="text"
                      placeholder="Etiqueta"
                      value={formEditar.etiqueta}
                      onChange={(e) =>
                        setFormEditar({ ...formEditar, etiqueta: e.target.value })
                      }
                      className="w-full h-9 px-4 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition"
                    />

                  </div>

                  <div className="flex justify-center gap-3 mt-5">
                    <button
                      onClick={() => setMostrarModal(false)}
                      className="px-4 py-2 rounded-lg bg-gray-200"
                    >
                      Cancelar
                    </button>

                    <button
                      onClick={confirmarActualizacion}
                      className="px-4 py-2 rounded-lg bg-violet-600 text-white"
                    >
                      Guardar cambios
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Footer */}
        <footer className="mt-8 text-xs text-gray-400">
          <p>Desarrollo Web – ReactJS | Proyecto Agenda ADSO</p>
          <p>Instructor: Gustavo Adolfo Bolaños Dorado</p>
        </footer>
      </div>
    </div>
  );
}

export default App;