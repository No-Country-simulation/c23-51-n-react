import PropTypes from "prop-types";
import { useState } from "react";
import Register from "../Register";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const GoalsStep = ({ onNext, onBack }) => {
  const [selectedGoals, setSelectedGoals] = useState([]);

  const goals = [
    "PERDER PESO",
    "GANAR MÚSCULO",
    "REDUCIR ESTRÉS",
    "MEJORAR CONDICIÓN FÍSICA",
    "GANAR HABILIDADES",
  ];

  const toggleGoal = (goal) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal],
    );
  };
  return (
    <Register onBack={onBack}>
      <div className="space-y-2">
        <h1>¿Qué quieres lograr?</h1>
        <p className="text-cream/80">Selecciona tu objetivo principal.</p>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => (
          <Button
            key={goal}
            variant="outline"
            className={`${selectedGoals.includes(goal) ? "bg-tangerine/20 text-tangerine" : "text-tangerine"}`}
            onClick={() => toggleGoal(goal)}
          >
            {goal}
            {selectedGoals.includes(goal) && <Check className="mr-2 size-4" />}
          </Button>
        ))}
        <Button onClick={() => onNext(selectedGoals)} disabled={selectedGoals.length === 0}>
          Continuar
        </Button>
      </div>
    </Register>
  );
};

GoalsStep.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
export default GoalsStep;
