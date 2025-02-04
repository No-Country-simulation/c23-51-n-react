/* eslint-disable no-unused-vars */
import {
  arrowBack,
  coverGirl,
  HeartOutline,
  MuscleIcon,
  RepeatIcon,
  ThunderIcon,
  TimeIcon,
  TipIcon,
  VideoIcon,
} from "@/assets";
import { useNavigate } from "react-router";
import RoutineTimeIntensity from "./RoutineTimeIntensity";
import { Badge } from "./ui/badge";
import { useRoutine } from "@/hooks/useRoutine";
import { Separator } from "@/components/ui/separator";
import RoutineAccordion from "./RoutineAccordion";

const RoutineDetails = () => {
  const navigate = useNavigate();

  const { data: routines } = useRoutine();

  const handleBack = () => {
    navigate(-1, {
      replace: true,
    });
  };

  const WarmUpRoutine = routines?.find((routine) => routine?.routine_id === 1);
  const DailyRoutine = routines?.find((routine) => routine.routine_id === 2);
  const StretchingRoutine = routines?.find((routine) => routine.routine_id === 3);

  return (
    <>
      <header className="z-40 flex items-center justify-between pt-4">
        <button onClick={handleBack}>
          <img src={arrowBack} alt="Arrow back" className="size-6" />
        </button>
        <HeartOutline />
      </header>
      <div className="relative flex flex-col items-center w-full pt-2 overflow-hidden rounded-lg h-96">
        <img
          src={coverGirl}
          alt="cover"
          className="object-cover w-full rounded-lg h-96 opacity-30"
        />
        {/* <button className="absolute p-4 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-tangerine">
          <VideoIcon />
        </button> */}

        <RoutineTimeIntensity time={"10"} intensity={"baja"} />
      </div>
      <span className="pt-4 text-sm text-cream/80">INICIAL</span>
      <h1 className="text-2xl font-bold">ACTIVA TU ENERGÍA</h1>
      <p className="mt-2">
        Mejora tu técnica, resistencia y movilidad con este entrenamiento de calistenia. Comienza a
        moverte y siente el progreso.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <Badge>Resistencia</Badge>
        <Badge>Técnica</Badge>
        <Badge>Fuerza</Badge>
        <Badge>Movilidad</Badge>
      </div>

      <Separator className="mx-auto my-6 w-72 bg-cream/60" />
      <div className="flex flex-col gap-6 pb-10 mb-20">
        <RoutineAccordion routine={WarmUpRoutine} />
        <RoutineAccordion routine={DailyRoutine} />
        <RoutineAccordion routine={StretchingRoutine} />
      </div>
    </>
  );
};

export default RoutineDetails;
