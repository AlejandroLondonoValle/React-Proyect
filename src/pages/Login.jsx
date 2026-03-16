import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "admin@sena.com" && password === "1234") {
      login();
      navigate(from, { replace: true });
    } else {
      await Swal.fire({
        icon: "error",
        title: "Acceso denegado",
        text: "Usuario o contraseña incorrectos.",
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#7c3aed",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <p className="text-sm text-purple-600 font-semibold uppercase tracking-[0.2em] mb-2">
          Agenda ADSO
        </p>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Iniciar sesión
        </h1>

        <p className="text-sm text-slate-500 mb-6">
          Usa las credenciales de prueba para ingresar.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="mt-6 text-sm text-slate-500 bg-slate-100 rounded-xl p-4">
          <p><strong>Correo:</strong> admin@sena.com</p>
          <p><strong>Contraseña:</strong> 1234</p>
        </div>
      </div>
    </div>
  );
}
