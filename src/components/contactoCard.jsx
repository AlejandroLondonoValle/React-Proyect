export default function ContactoCard({
  nombre,
  telefono,
  correo,
  empresa,
  etiqueta,
  onEliminar,
  onActualizar
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition flex justify-between">

      {/* ================= INFORMACIÓN ================= */}
      <div className="p-6 flex-1 space-y-2">

        <h3 className="text-lg font-semibold text-gray-800">
          {nombre}
        </h3>

        <p className="text-gray-600 text-sm flex items-center gap-2">
          <span className="text-purple-500"><svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
            <path d="M9.40431 5.02115L10.0481 7.01934C10.0989 7.17723 10.1502 7.40219 10.119 7.65893C10.0253 8.4276 9.51225 9.0909 8.77425 9.36766L6.08207 10.3772C4.71176 10.8911 3.25 9.87809 3.25 8.41459V7.306C3.25 6.69945 3.53022 6.09966 4.05922 5.73225C5.31766 4.85823 6.72754 4.18597 8.24183 3.76283C9.43829 3.42851 10.6989 3.25 12.0001 3.25C13.3012 3.25 14.5618 3.42851 15.7583 3.76282C17.2726 4.18595 18.6825 4.85822 19.9409 5.73224C20.4699 6.09966 20.7502 6.69948 20.7501 7.30605L20.7501 8.41461C20.7501 9.87809 19.2884 10.8911 17.918 10.3772L15.2259 9.36766C14.4879 9.0909 13.9748 8.4276 13.8812 7.65893C13.8499 7.40219 13.9012 7.17723 13.9521 7.01934L14.5958 5.02114C13.7591 4.84354 12.8909 4.75 12.0001 4.75C11.1093 4.75 10.241 4.84355 9.40431 5.02115Z" fill="#725cff" />
            <path opacity="0.4" d="M9.99277 10.5307C11.2782 9.99887 12.7221 9.99887 14.0075 10.5307L18.823 12.5234C19.4949 12.8014 19.9911 13.3871 20.1549 14.0956L21.0559 17.9931C21.3819 19.4032 20.3111 20.7499 18.8638 20.7499H5.13647C3.68916 20.7499 2.61829 19.4032 2.9443 17.9931L3.84536 14.0956C4.00917 13.3871 4.5053 12.8014 5.17725 12.5234L9.99277 10.5307ZM9.25 15.5116C9.25 17.0304 10.4812 18.2616 12 18.2616C13.5188 18.2616 14.75 17.0304 14.75 15.5116C14.75 13.9928 13.5188 12.7616 12 12.7616C10.4812 12.7616 9.25 13.9928 9.25 15.5116Z" fill="#725cff" />
          </svg>
          </span>
          {telefono}
        </p>

        <p className="text-gray-600 text-sm flex items-center gap-2">
          <span className="text-purple-500"><svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
            <path d="M3.73586 4.5C2.7772 4.5 2.00008 5.27724 2.00025 6.2359L2.00024 6.26829C2.01058 6.81904 2.28193 7.33272 2.73193 7.65165L2.7428 7.65929L10.713 13.2171C11.3896 13.689 12.2608 13.7479 12.9861 13.3941C13.0897 13.3435 13.1903 13.2845 13.287 13.2171L21.2569 7.65949C21.7224 7.33485 21.9998 6.8031 21.9998 6.23554C21.9996 5.27702 21.2229 4.5 20.2644 4.5H3.73586Z" fill="#725cff" />
            <path opacity="0.4" d="M22.0001 8.96973L14.145 14.4473C12.8562 15.346 11.1438 15.346 9.85507 14.4473L2.00023 8.96991L2 17.2498C2 18.4924 3.00736 19.4998 4.25 19.4998H19.75C20.9926 19.4998 22 18.4924 22 17.2498L22.0001 8.96973Z" fill="#725cff" />
          </svg>
          </span>
          {correo}
        </p>

        <p className="text-gray-600 text-sm flex items-center gap-2">
          <span className="text-purple-500"><svg width="25" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
            <path d="M7.74996 5.75C7.74996 4.50736 8.75732 3.5 9.99996 3.5H14C15.2426 3.5 16.25 4.50736 16.25 5.75V6.5H19.25C20.4926 6.5 21.5 7.50736 21.5 8.75V11H14.5816C14.3007 10.4088 13.6981 10 13 10H11C10.3019 10 9.69927 10.4088 9.41841 11H2.49976V8.75C2.49976 7.50736 3.50712 6.5 4.74976 6.5H7.74996V5.75ZM9.24996 6.5H14.75V5.75C14.75 5.33579 14.4142 5 14 5H9.99996C9.58574 5 9.24996 5.33579 9.24996 5.75V6.5Z" fill="#725cff" />
            <path opacity="0.4" d="M2.49976 12.5V17.75C2.49976 18.9926 3.50712 20 4.74976 20H19.25C20.4926 20 21.5 18.9926 21.5 17.75V12.5H14.5816C14.3007 13.0912 13.6981 13.5 13 13.5H11C10.3019 13.5 9.69927 13.0912 9.41841 12.5H2.49976Z" fill="#725cff" />
          </svg>
          </span>
          {empresa}
        </p>

        {etiqueta && (
          <span className="inline-block bg-purple-50 text-purple-600 text-sm font-medium px-3 py-1 rounded-full mt-2">
            {etiqueta}
          </span>
        )}
      </div>

      {/* ================= ACCIONES ================= */}
      <div className="w-40 border-l border-gray-200 p-4 flex flex-col justify-center items-center gap-3 bg-gray-50 rounded-r-2xl">

        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Acciones
        </span>

        <button
          onClick={onActualizar}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm py-2 rounded-xl transition shadow-sm"
        >
          Actualizar
        </button>

        <button
          onClick={onEliminar}
          className="w-full bg-red-500 hover:bg-red-600 text-white text-sm py-2 rounded-xl transition shadow-sm"
        >
          Eliminar
        </button>

      </div>
    </div>
  );
}