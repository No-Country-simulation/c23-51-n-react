import { navLinks } from "@/constants";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto flex py-[50px] px-10">
      <nav className="w-full px-8 py-5 bg-[#1A1A1A] border border-[#262626] rounded-full">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <a className="text-2xl font-abel " href="/">
            MOMENTUM
          </a>

          {/* Menu principal */}
          <div className={`hidden lg:flex space-x-6 ${isMenuOpen ? "block" : "hidden"} lg:block`}>
            <ul className="flex flex-row gap-5">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-lg font-semibold transition-colors duration-300 rounded-full hover:bg-[#262626] px-4 py-2"
                >
                  <Link to={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Botones */}
          <div className="hidden space-x-4 lg:flex">
            <Link to="/register">
              <Button
                variant="ghost"
                className="px-4 py-2 text-lg font-semibold rounded-full bg-tangerine hover:bg-tangerine/90"
              >
                Registrarse
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="ghost"
                className="px-4 py-2 text-lg font-semibold text-gray-300 transition-colors duration-300 ease-out border-gray-700 rounded-full hover:bg-tangerine hover:text-gray-900"
              >
                Iniciar sesión
              </Button>
            </Link>
          </div>

          {/* Botón hamburguesa para móvil */}
          <button
            className="block text-cream lg:hidden hover:text-white focus:outline-none"
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
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-800 text-white py-4`}>
          <a href="/" className="block px-4 py-2 text-gray-300 hover:bg-slate-600">
            Inicio
          </a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-slate-600">
            Planes
          </a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-slate-600">
            Rutinas
          </a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-slate-600">
            Comunidad
          </a>

          {/* Botones de móvil */}
          <div className="space-y-4">
            <a
              href="/register"
              className="block px-4 py-2 text-gray-300 hover:bg-tangerine hover:text-gray-900"
            >
              Registrarse
            </a>
            <a
              href="/login"
              className="block px-4 py-2 text-gray-300 hover:bg-tangerine hover:text-gray-900"
            >
              Iniciar sesión
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
