import { useState } from "react";
import { Link } from "react-router";
import { Home as HomeIcon, Dumbbell, Menu } from "lucide-react";
import { routine1, routine2, routine3, routine4, routine5 } from "@/assets";

const Rutinas = () => {
  const categorias = [
    { nombre: "RETOS SEMANALES", imagen: routine1 },
    { nombre: "INTENSIDAD", imagen: routine2 },
    { nombre: "NIVELES", imagen: routine3 },
    { nombre: "NIVELES", imagen: routine4 },
    { nombre: "NIVELES", imagen: routine5 },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 font-sans pb-20">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Rutinas de Calistenia</h1>
        <button className="text-gray-400">⚙</button>
      </header>
      <p className="text-gray-400 text-sm mt-2">Explora por categoría</p>
      <section className="mt-4 space-y-4">
        {categorias.map((categoria, index) => (
          <Link
            to={`/rutinas/${categoria.nombre.toLowerCase().replace(/ /g, "-")}`}
            key={index}
            className="block relative overflow-hidden rounded-lg"
          >
            <img
              src={categoria.imagen}
              alt={categoria.nombre}
              className="w-full opacity-75 object-cover h-33"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-bold text-lg">{categoria.nombre}</h4>
            </div>
          </Link>
        ))}
      </section>
      <nav className="fixed bottom-0 left-0 w-full bg-gray-900 p-4 flex justify-around z-20">
        <div
          className={`flex flex-col items-center ${location.pathname === "/" ? "text-orange-500" : "text-gray-400"}`}
        >
          <Link to="/home" aria-label="Inicio">
            <HomeIcon />
            <span className="text-sm">Inicio</span>
          </Link>
        </div>
        <div
          className={`flex flex-col items-center ${location.pathname === "/rutinas" ? "text-orange-500" : "text-gray-400"}`}
        >
          <Link to="/rutinas" aria-label="Rutinas">
            <Dumbbell />
            <span className="text-sm">Rutinas</span>
          </Link>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <button onClick={toggleMenu} aria-label="Menú">
            <Menu />
          </button>
          <span className="text-sm">Menú</span>
        </div>
      </nav>

      {menuOpen && (
        <div className="absolute bg-gray-800 w-full p-4 top-0 left-0 z-30">
          <ul className="text-white">
            <li>
              <Link to="/profile" className="block py-2">
                Perfil
              </Link>
            </li>
            <li>
              <Link to="/settings" className="block py-2">
                Configuración
              </Link>
            </li>
            <li>
              <Link to="/login" className="block py-2">
                Cerrar sesión
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Rutinas;
