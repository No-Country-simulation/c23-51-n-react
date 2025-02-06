/* eslint-disable react/prop-types */
import { MuscleIcon, RepeatIcon, ThunderIcon, TimeIcon, TipIcon, VideoIcon } from "@/assets";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const RoutineAccordion = ({ routine }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getRoutineTitle = (routineId) => {
    switch (routineId) {
      case 1:
        return "CALENTAMIENTO";
      case 2:
        return "RUTINA DEL DÍA";
      case 3:
        return "ESTIRAMIENTO";
      default:
        return routine?.routine_name;
    }
  };

  return (
    <Accordion type="single" collapsible onValueChange={(value) => setIsOpen(value === "item-1")}>
      <AccordionItem value="item-1">
        <div className="flex flex-col w-full">
          <AccordionTrigger>
            <div className="flex items-center justify-between w-full">
              <h1 className="uppercase">{getRoutineTitle(routine?.routine_id)}</h1>
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
                  <DialogContent className="w-full  sm:max-w-[425px]">
                    <DialogHeader className="hidden">
                      <DialogTitle>{exercise.exercise_name}</DialogTitle>
                    </DialogHeader>

                    <div className="relative w-full aspect-[1/2]">
                      <span className="absolute pt-12">{exercise.exercise_name}</span>

                      <iframe
                        src={exercise.exercise_url_video}
                        className="absolute top-0 left-0 w-full h-full pb-20 mx-auto"
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
  );
};

export default RoutineAccordion;
