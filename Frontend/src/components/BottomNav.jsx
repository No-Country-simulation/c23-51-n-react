import { useState } from "react";
import { Home as HomeIcon, Dumbbell, Menu } from "lucide-react";
import { Link, useLocation } from "react-router";

const BottomNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full bg-gray-900 p-4 flex justify-around z-20">
        <div
          className={`flex flex-col items-center ${location.pathname === "/home" ? "text-orange-500" : "text-gray-400"}`}
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
    </>
  );
};

export default BottomNav;
