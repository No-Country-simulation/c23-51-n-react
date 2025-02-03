import { Link } from "react-router";
import { Button } from "../../src/components/ui/button";
import { home1, home2 } from "@/assets";
import WeeklyProgress from "@/components/WeeklyProgress";
import UserAvatar from "@/assets/icons/UserAvatar";

const Home = () => {
  return (
    <div className="pb-10">
      <header className="flex items-center gap-4">
        <div className="flex items-center justify-center size-12 ">
          <UserAvatar />
        </div>
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-xl font-bold leading-6">Hola, GABRIELA</h1>
          <p className="text-sm leading-4 text-cream/80">¡Hoy es un buen día para entrenar!</p>
        </div>
      </header>

      <WeeklyProgress />

      <section className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Tu rutina del día</h3>
          <Link to="/routines" className="text-sm text-tangerine">
            Ver todos
          </Link>
        </div>
        <div className="relative mt-3 overflow-hidden rounded-lg">
          <img src={home1} alt="Rutina" className="object-cover w-full opacity-80" />
          <div className="absolute bottom-4 left-4">
            <p className="text-sm">Inicial</p>
            <h4 className="text-lg font-bold">ACTIVA TU ENERGÍA</h4>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Ejercicio del día</h3>
          <Link to="/routines" className="text-sm text-tangerine">
            Ver todos
          </Link>
        </div>
        <div className="relative mt-3 overflow-hidden rounded-lg">
          <img src={home2} alt="Ejercicio" className="object-cover w-full opacity-80" />
          <div className="absolute bottom-4 left-4">
            <p className="text-sm">Técnica</p>
            <h4 className="text-lg font-bold">¡ROMPE TUS LÍMITES!</h4>
          </div>
        </div>
      </section>

      <Button className="mt-6 mb-16">ENTRENAR</Button>
    </div>
  );
};

export default Home;
