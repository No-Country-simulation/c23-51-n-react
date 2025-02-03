import { RepeatIcon, ThunderIcon, TimeIcon } from "@/assets";
import { Video } from "lucide-react";

const ExerciseBlock = ({
  title,
  time,
  repetitions,
  description,
  exercises,
  openSection,
  toggleSection,
  sectionKey,
}) => {
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
            className="mt-2 cursor-pointer text-tangerine hover:underline"
            onClick={() => toggleSection(sectionKey)}
          >
            Ver Ejercicios del Bloque
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <TimeIcon />
            <span className="ml-1 text-sm">{time}</span>
          </div>
          <div className="flex items-center">
            <RepeatIcon />
            <span className="ml-1 text-sm">{repetitions}</span>
          </div>
        </div>
      </div>

      {openSection === sectionKey && (
        <div className="p-4 mt-2 bg-gray-800 rounded-lg">
          <p>
            <ThunderIcon />
            {description}
          </p>
          <p className="mt-2">
            <strong>{exercises.length} Ejercicios.</strong>
          </p>
          <p className="mt-2">Se realizan sin pausas largas.</p>
          {exercises.map((exercise, index) => (
            <div key={index}>
              <h3 className="mt-4 text-lg font-semibold">{exercise.name}</h3>
              <ul className="mt-2 list-disc list-inside">
                {exercise.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
              <p className="mt-2">{exercise.details}</p>
              <a href="#" className="flex items-center mt-4 text-tangerine hover:underline">
                <Video className="mr-2 text-tangerine" />
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
