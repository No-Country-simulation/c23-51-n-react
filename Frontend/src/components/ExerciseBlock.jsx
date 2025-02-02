import { Clock, Repeat, Zap, Video } from 'lucide-react';

const ExerciseBlock = ({ title, time, repetitions, description, exercises, openSection, toggleSection, sectionKey }) => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mt-6">
        <div>
          <h2
            className="text-xl font-semibold text-white cursor-pointer"
            onClick={() => toggleSection(sectionKey)}
          >
            {title}
          </h2>
          <a
            href="#"
            className="mt-2 text-orange-500 hover:underline cursor-pointer"
            onClick={() => toggleSection(sectionKey)}
          >
            Ver Ejercicios del Bloque
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-orange-500" />
            <span className="text-xs text-orange-500 ml-1">{time}</span>
          </div>
          <div className="flex items-center">
            <Repeat className="h-5 w-5 text-orange-500" />
            <span className="text-xs text-orange-500 ml-1">{repetitions}</span>
          </div>
        </div>
      </div>

      {openSection === sectionKey && (
        <div className="mt-2 p-4 bg-gray-800 rounded-lg">
          <p>
            <Zap className="inline mr-1" />
            {description}
          </p>
          <p className="mt-2"><strong>{exercises.length} Ejercicios.</strong></p>
          <p className="mt-2">Se realizan sin pausas largas.</p>
          {exercises.map((exercise, index) => (
            <div key={index}>
              <h3 className="mt-4 text-lg font-semibold">{exercise.name}</h3>
              <ul className="list-disc list-inside mt-2">
                {exercise.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
              <p className="mt-2">{exercise.details}</p>
              <a
                href="#"
                className="mt-4 text-orange-500 hover:underline flex items-center"
              >
                <Video className="mr-2 text-orange-500" />
                Ver video del ejercicio
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExerciseBlock;
