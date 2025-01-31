import { useState } from "react";
import { Home as HomeIcon, Dumbbell, Menu } from "lucide-react";
import { Button } from "../../src/components/ui/button";
import { home1, home2 } from "@/assets";
import { Link, useLocation } from "react-router";

const Home = () => {
  const [selectedDay, setSelectedDay] = useState("L");
  const [menuOpen, setMenuOpen] = useState(false);
  const days = ["DO", "LU", "MA", "MI", "JU", "VI", "SA"]; // se coloca asi ya que  M de martes y M de Miercoles causan conflicto

  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 font-sans pb-20">
      <header className="flex items-center gap-4">
        <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold"></div>
        <div>
          <h1 className="font-bold text-lg">Hola, GABRIELA</h1>
          <p className="text-gray-400">¡Hoy es un buen día para entrenar!</p>
        </div>
      </header>

      <section className="mt-6">
        <h2 className="text-sm text-gray-400">Tu progreso esta semana</h2>
        <div className="grid grid-cols-7 gap-2 mt-2">
          {days.map((day) => (
            <div
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`w-full h-4 flex items-center justify-center rounded-full cursor-pointer ${
                selectedDay === day ? "bg-orange-500 text-black" : "bg-gray-600 text-white"
              }`}
            >
              <span className="text-xs font-bold">{day}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Tu rutina del día</h3>
          <Link to="/rutinas" className="text-orange-500 text-sm">
            Ver todos
          </Link>
        </div>
        <div className="relative mt-3 overflow-hidden rounded-lg">
          <img src={home1} alt="Rutina" className="w-full opacity-80 object-cover" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm">Inicial</p>
            <h4 className="font-bold text-lg">ACTIVA TU ENERGÍA</h4>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Ejercicio del día</h3>
          <Link to="/rutinas" className="text-orange-500 text-sm">
            Ver todos
          </Link>
        </div>
        <div className="relative mt-3 overflow-hidden rounded-lg">
          <img src={home2} alt="Ejercicio" className="w-full opacity-80 object-cover" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm">Técnica</p>
            <h4 className="font-bold text-lg">¡ROMPE TUS LÍMITES!</h4>
          </div>
        </div>
      </section>

      <Button variant="default" size="default" className="mt-6 mb-16">
        ENTRENAR
      </Button>

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
    </div>
  );
};

export default Home;
