import { useState } from "react";

export const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-fondo border border-gray-800 rounded-full mt-9 w-auto h-[50%] mb-8">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 ">
        {/* Logo */}
        <a className="text-xl font-bold text-fondo" href="/">
          Inicio
        </a>

        {/* Menu principal */}
        <div className={`hidden md:flex space-x-6 ${isMenuOpen ? "block" : "hidden"} md:block`}>
          <a
            className="px-4 py-2 border-gray-700 text-gray-300 hover:bg-slate-600 hover:text-gray-300 transition rounded-2xl font-semibold"
            href="/"
          >
            Inicio
          </a>
          <a
            href="#"
            className="px-4 py-2 border-gray-700 text-gray-300 hover:bg-slate-600 hover:text-gray-300 transition rounded-2xl font-semibold"
          >
            Planes
          </a>
          <a
            href="#"
            className="px-4 py-2 border-gray-700 text-gray-300 hover:bg-slate-600 hover:text-gray-300 transition rounded-2xl font-semibold"
          >
            Rutinas
          </a>
          <a
            href="#"
            className="px-4 py-2 border-gray-700 text-gray-300 hover:bg-slate-600 hover:text-gray-300 transition rounded-2xl font-semibold"
          >
            Comunidad
          </a>
        </div>

        {/* Botones */}
        <div className="hidden md:flex space-x-4">
          <a
            href="/register"
            className="px-4 py-2 border-gray-700 text-gray-300 hover:bg-limeGreen hover:text-gray-900 transition rounded-2xl font-semibold"
          >
            Registrarse
          </a>
          <a
            href="/login"
            className="px-4 py-2 border-gray-700 text-gray-300 hover:bg-limeGreen hover:text-gray-900 transition rounded-2xl font-semibold"
          >
            Iniciar sesión
          </a>
        </div>

        {/* Botón hamburguesa para móvil */}
        <button
          className="block md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menú hamburguesa visible solo en dispositivos móviles */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-800 text-white py-4`}>
        <a
          href="/"
          className="block px-4 py-2 text-gray-300 hover:bg-slate-600"
        >
          Inicio
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-300 hover:bg-slate-600"
        >
          Planes
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-300 hover:bg-slate-600"
        >
          Rutinas
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-300 hover:bg-slate-600"
        >
          Comunidad
        </a>

        {/* Botones de móvil */}
        <div className="space-y-4">
          <a
            href="/register"
            className="block px-4 py-2 text-gray-300 hover:bg-limeGreen hover:text-gray-900"
          >
            Registrarse
          </a>
          <a
            href="/login"
            className="block px-4 py-2 text-gray-300 hover:bg-limeGreen hover:text-gray-900"
          >
            Iniciar sesión
          </a>
        </div>
      </div>
    </nav>
  );
};
