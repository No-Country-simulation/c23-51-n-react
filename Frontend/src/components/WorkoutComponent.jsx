import React, { useState } from 'react';
import { Play, Pause, Heart, ArrowLeft, Clock } from 'lucide-react';
import useToggleSection from '../hooks/useToggleSection';
import ExerciseBlock from '../components/ExerciseBlock';
import { replace, useNavigate } from 'react-router';
import { videoPage } from '@/assets';

const WorkoutComponent = () => {
  const [openSection, toggleSection] = useToggleSection();
  const [isPlaying, setIsPlaying] = useState(false); // si el video está reproduciéndose
  const [videoRef, setVideoRef] = useState(null);
  const navigate = useNavigate();

  const warmUpExercises = [
    { name: 'Rotaciones de Brazos', steps: ['30 Segundos hacia adelante', '30 Segundos hacia atrás'], details: 'De pie, con los brazos extendidos lateralmente, realizar círculos amplios.' }
  ];

  const routineExercises = [
    { name: 'Rotaciones de Brazos', steps: ['30 Segundos hacia adelante', '30 Segundos hacia atrás'], details: 'De pie, con los brazos extendidos lateralmente, realizar círculos amplios.' }
  ];

  const stretchingExercises = [
    { name: 'Estiramiento de Cuádriceps', steps: ['30 segundos por pierna'], details: 'De pie, sujetarse el tobillo y llevar el talón hacia los glúteos, manteniendo la rodilla alineada.' }
  ];

  const handleBack = () => {
    navigate("/rutinas", {
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
    <div className="bg-black text-white min-h-screen p-4 font-sans pb-20">
      <div className="relative">
        <video
          id="workoutVideo"
          className="w-full rounded-lg mb-4"
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
            className="absolute inset-0 flex items-center justify-center bg-orange-500 rounded-full h-12 w-12 m-auto"
            aria-label="Play Video"
          >
            <Play className="h-5 w-5 text-white" />
          </button>
        )}

        {/* Botón de Pause */}
        {isPlaying && (
          <button
            onClick={handlePlayPause}
            className="absolute inset-0 flex items-center justify-center bg-orange-500 rounded-full h-12 w-12 m-auto"
            aria-label="Pause Video"
          >
            <Pause className="h-5 w-5 text-white" />
          </button>
        )}

        <button
          className="absolute top-2 left-2"
          onClick={handleBack}
          aria-label="Back to menu"
        >
          <ArrowLeft className="h-6 w-6 text-white cursor-pointer" />
        </button>
        <div className="absolute bottom-2 left-2 flex items-center bg-black bg-opacity-50 rounded px-2 py-1">
          <Clock className="h-4 w-4 text-orange-500 mr-1" />
          <span className="text-xs text-orange-500">35'</span>
        </div>
        <div className="absolute bottom-2 right-2 flex items-center bg-black bg-opacity-50 rounded px-2 py-1">
          <span className="text-xs text-orange-500">Intensidad Baja</span>
        </div>
        <div className="absolute top-2 right-2">
          <Heart className="h-6 w-6 text-white cursor-pointer" aria-label="Favorite" />
        </div>
      </div>

      <h1 className="text-2xl font-bold">ACTIVA TU ENERGÍA</h1>
      <p className="mt-2">Mejora tu técnica, resistencia y movilidad con este entrenamiento de calistenia. Comienza a moverte y siente el progreso.</p>

      <div className="mt-4">
        <div className="flex space-x-2 mb-4">
          <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">Resistencia</span>
          <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">Técnica</span>
          <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">Fuerza</span>
          <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">Movilidad</span>
        </div>
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
    </div>
  );
};

export default WorkoutComponent;
