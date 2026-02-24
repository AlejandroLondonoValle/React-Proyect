export default function ContactoCard({ 
  nombre, 
  telefono, 
  correo, 
  etiqueta, 
  onEliminar
 }) {
  return (
    <article className="bg-white border rounded-lg shadow-sm p-4 mb-4">
      <h3 className="text-lg font-semibold text-morado-oscuro">{nombre}</h3>
      <p>📞 {telefono}</p>
      <p>✉️ {correo}</p>

      {etiqueta && <p className="etiqueta">{etiqueta}</p>}
      <div className="acciones">
        <button className="btn-eliminar" onClick={() => onEliminar(correo)}>
          Eliminar
        </button>
      </div>
    </article>
  );
}


