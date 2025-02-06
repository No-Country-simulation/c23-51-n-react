import { useState } from "react";
import { useNavigate } from "react-router";
import {
  arrowBack,
  Heart,
  HeartOutline,
  MuscleIcon,
  RepeatIcon,
  routine1,
  ThunderIcon,
  TimeIcon,
  TipIcon,
  VideoIcon,
} from "@/assets";
import { Badge } from "@/components/ui/badge";
import RoutineTimeIntensity from "./RoutineTimeIntensity";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRoutine } from "@/hooks/useRoutine";

const WorkoutComponent = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((prevState) => !prevState);
  };

  const handleBack = () => {
    navigate("/routines", {
      replace: true,
    });
  };

  const { data: routines } = useRoutine();
  const routine = routines?.find((routine) => routine.routine_id === 2);

  return (
    <>
      <header className="z-40 flex items-center justify-between">
        <button onClick={handleBack}>
          <img src={arrowBack} alt="Arrow back" className="size-6" />
        </button>

        <button onClick={handleLikeClick} aria-label={isLiked ? "Unlike" : "Like"}>
          {isLiked ? <Heart /> : <HeartOutline />}
        </button>
      </header>
      <div className="relative flex flex-col items-center w-full pt-2 overflow-hidden rounded-lg h-96">
        <img
          src={routine1}
          alt="Retos semanales"
          className="object-cover w-full rounded-lg h-96 opacity-40 img-gradient"
        />

        <RoutineTimeIntensity time={"25"} intensity={"baja"} />
      </div>
      <span className="pt-4 text-sm text-cream/80">INICIAL</span>

      <h1 className="text-2xl font-bold">RETO SEMANAL</h1>
      <p className="mt-2">¡Únete al reto semanal de calistenia y transforma tu cuerpo!</p>

      <div className="flex flex-wrap gap-2 my-4">
        <Badge>Reto</Badge>
        <Badge>Fuerza</Badge>
        <Badge>Movilidad</Badge>
      </div>

      <div className="flex flex-col gap-6 py-5 mb-20">
        <Accordion
          type="single"
          collapsible
          onValueChange={(value) => setIsOpen(value === "item-1")}
        >
          <AccordionItem value="item-1">
            <div className="flex flex-col w-full">
              <AccordionTrigger>
                <div className="flex items-center justify-between w-full">
                  <h1 className="uppercase">Reto semanal</h1>
                  <div className="flex gap-x-2">
                    <div className="flex items-center gap-1">
                      <TimeIcon />
                      <span className="text-2xl">{routine?.routine_duration_total}&apos;</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <RepeatIcon />
                      <span className="text-2xl">{routine?.routine_repetition}</span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              {!isOpen && (
                <span className="pb-3 text-sm font-normal leading-5 text-center transition-all duration-200 text-tangerine/80 opacity-80">
                  Ver ejercicios del bloque
                </span>
              )}
            </div>
            <AccordionContent className="flex flex-col items-center justify-center">
              <div className="flex flex-col gap-2 py-4">
                <div className="flex flex-row">
                  <MuscleIcon color="#FA7E25" className="mr-2 size-14" />
                  <p>{routine?.routine_description}</p>
                </div>
                <div className="flex flex-row">
                  <ThunderIcon className="mr-2" />
                  <p>{routine?.routine_number_exercise} Ejercicios</p>
                </div>
                <div className="flex flex-row">
                  <ThunderIcon className="mr-2" />
                  <p>{routine?.routine_aditional_description}</p>
                </div>
              </div>
              <Separator className="w-64 my-6 bg-cream/60" />
              {routine?.exercises?.map((exercise) => (
                <div key={exercise.exercise_id} className="mb-2">
                  {exercise.exercise_url_video && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="flex items-center justify-center gap-1 py-4">
                          <VideoIcon color="#FA7E25" />
                          Ver video del ejercicio
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader className="hidden">
                          <DialogTitle>{exercise.exercise_name}</DialogTitle>
                        </DialogHeader>

                        <div className="relative w-full aspect-[1/2]">
                          <span className="absolute pt-12">{exercise.exercise_name}</span>

                          <iframe
                            src={exercise.exercise_url_video}
                            className="absolute top-0 left-0 w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            title={`Video de ${exercise.exercise_name}`}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                  <p className="pb-4 font-bold">{exercise.exercise_name}</p>
                  <div className="space-y-4">
                    {exercise.exercise_description && (
                      <div className="flex items-start gap-3">
                        <MuscleIcon className="flex-shrink-0 w-6 h-6 mt-1 text-gray-300" />
                        <p className="text-gray-200">{exercise.exercise_description}</p>
                      </div>
                    )}
                    {exercise.exercise_benefit && (
                      <div className="flex items-start gap-3">
                        <ThunderIcon className="flex-shrink-0 w-6 h-6 mt-1 text-gray-300" />
                        <p className="text-gray-200">{exercise.exercise_benefit}</p>
                      </div>
                    )}
                    {exercise.exercise_advice && (
                      <div className="flex items-start gap-3">
                        <TipIcon className="flex-shrink-0 w-6 h-6 mt-1 text-gray-300" />
                        <p className="text-gray-200">{exercise.exercise_advice}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default WorkoutComponent;
