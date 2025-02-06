import { Button } from "../../src/components/ui/button";
import { home1, home2 } from "@/assets";
import WeeklyProgress from "@/components/WeeklyProgress";
import UserAvatar from "@/assets/icons/UserAvatar";
import { Link, useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const goToRoutines = () => {
    navigate("/routines");
  };
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
          <h3 className="text-2xl font-bold">Tu rutina del día</h3>
          <Button variant="tertiary" size="link" onClick={goToRoutines}>
            Ver todos
          </Button>
        </div>

        <Link to="/routines/daily-routine">
          <div className="relative mt-3 overflow-hidden rounded-lg">
            <img
              src={home1}
              alt="Rutina"
              className="object-cover w-full opacity-80 h-[220px] img-gradient"
            />
            <div className="absolute flex-row bottom-4 left-4">
              <div className="flex flex-row gap-2 place-items-end">
                <div className="relative flex flex-col gap-1 bottom-1">
                  <div className="bg-transparent border-2 rounded-full size-3 border-tangerine" />
                  <div className="bg-transparent border-2 rounded-full size-3 border-tangerine" />
                  <div className="rounded-full size-3 bg-tangerine" />
                </div>
                <p className="text-sm font-normal">Inicial</p>
              </div>
              <h4 className="text-base font-bold">ACTIVA TU ENERGÍA</h4>
            </div>
          </div>
        </Link>
      </section>

      <section className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Ejercicio del día</h3>
          <Button variant="tertiary" size="link" disabled>
            Ver todos
          </Button>
        </div>
        <div className="relative mt-3 overflow-hidden rounded-lg">
          <img
            src={home2}
            alt="Ejercicio"
            className="object-cover w-full opacity-80 h-[220px] img-gradient"
          />
          <div className="absolute bottom-4 left-4">
            <p className="text-sm font-normal">Técnica</p>
            <h4 className="text-base font-bold">¡ROMPE TUS LÍMITES!</h4>
          </div>
        </div>
      </section>

      <Link to="/routines">
        <Button className="mt-6 mb-16">ENTRENAR</Button>
      </Link>
    </div>
  );
};

export default Home;
