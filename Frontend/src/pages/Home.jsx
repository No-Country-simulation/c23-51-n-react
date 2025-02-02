import { useState } from "react";
import { Link } from "react-router";
import BottomNav from "@/components/BottomNav";
import { Button } from "../../src/components/ui/button";
import { home1, home2 } from "@/assets";
import WeeklyProgress from "@/components/WeeklyProgress";

const Home = () => {
  const [selectedDay, setSelectedDay] = useState("LU");

  return (
    <div className="bg-black text-white min-h-screen p-4 font-sans pb-20">
      <header className="flex items-center gap-4">
        <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold"></div>
        <div>
          <h1 className="font-bold text-lg">Hola, GABRIELA</h1>
          <p className="text-gray-400">¡Hoy es un buen día para entrenar!</p>
        </div>
      </header>

      <WeeklyProgress onSelectDay={setSelectedDay} />

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

      <BottomNav />
    </div>
  );
};

export default Home;
