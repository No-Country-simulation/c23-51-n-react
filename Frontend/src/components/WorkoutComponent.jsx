import { useState } from "react";
import { useNavigate } from "react-router";
import useToggleSection from "@/hooks/useToggleSection";
import ExerciseBlock from "@/components/ExerciseBlock";
import { arrowBack, HeartOutline, PauseIcon, VideoIcon, videoPage } from "@/assets";
import { Badge } from "@/components/ui/badge";
import RoutineTimeIntensity from "./RoutineTimeIntensity";

const WorkoutComponent = () => {
  const [openSection, toggleSection] = useToggleSection();
  const [isPlaying, setIsPlaying] = useState(false); // si el video está reproduciéndose
  const [videoRef, setVideoRef] = useState(null);
  const navigate = useNavigate();

  const warmUpExercises = [
    {
      name: "Rotaciones de Brazos",
      steps: ["30 Segundos hacia adelante", "30 Segundos hacia atrás"],
      details: "De pie, con los brazos extendidos lateralmente, realizar círculos amplios.",
    },
  ];

  const routineExercises = [
    {
      name: "Rotaciones de Brazos",
      steps: ["30 Segundos hacia adelante", "30 Segundos hacia atrás"],
      details: "De pie, con los brazos extendidos lateralmente, realizar círculos amplios.",
    },
  ];

  const stretchingExercises = [
    {
      name: "Estiramiento de Cuádriceps",
      steps: ["30 segundos por pierna"],
      details:
        "De pie, sujetarse el tobillo y llevar el talón hacia los glúteos, manteniendo la rodilla alineada.",
    },
  ];

  const handleBack = () => {
    navigate("/routines", {
      replace: true,
    });
  };

  const handlePlayPause = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <div className="relative">
        <video
          id="workoutVideo"
          className="w-full mb-4 rounded-lg"
          muted
          ref={(ref) => setVideoRef(ref)}
        >
          <source src={videoPage} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Botón de Play */}
        {!isPlaying && (
          <button
            onClick={handlePlayPause}
            className="absolute inset-0 flex items-center justify-center w-12 h-12 m-auto rounded-full bg-tangerine"
            aria-label="Play Video"
          >
            <VideoIcon />
          </button>
        )}

        {/* Botón de Pause */}
        {isPlaying && (
          <button
            onClick={handlePlayPause}
            className="absolute inset-0 flex items-center justify-center w-12 h-12 m-auto rounded-full bg-tangerine"
            aria-label="Pause Video"
          >
            <PauseIcon />
          </button>
        )}

        <button className="absolute top-2 left-2" onClick={handleBack} aria-label="Back to menu">
          <img src={arrowBack} alt="Arrow back" className="size-6" />
        </button>

        <RoutineTimeIntensity time={"10"} intensity={"baja"} />

        <div className="absolute top-2 right-2">
          <HeartOutline />
        </div>
      </div>

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

      <ExerciseBlock
        title="CALENTAMIENTO"
        time="5'"
        repetitions="1"
        description="Movilizar las articulaciones principales, aumentar el flujo sanguíneo y reducir el riesgo de lesiones."
        exercises={warmUpExercises}
        openSection={openSection}
        toggleSection={toggleSection}
        sectionKey="warmUp"
      />

      <ExerciseBlock
        title="RUTINA DEL DÍA"
        time="25'"
        repetitions="3"
        description="Movilizar las articulaciones principales, aumentar el flujo sanguíneo y reducir el riesgo de lesiones."
        exercises={routineExercises}
        openSection={openSection}
        toggleSection={toggleSection}
        sectionKey="routine"
      />

      <ExerciseBlock
        title="ESTIRAMIENTO"
        time="5'"
        repetitions="1"
        description="Estiramientos para mejorar la flexibilidad y recuperar el cuerpo después del ejercicio."
        exercises={stretchingExercises}
        openSection={openSection}
        toggleSection={toggleSection}
        sectionKey="stretching"
      />
    </>
  );
};

export default WorkoutComponent;
