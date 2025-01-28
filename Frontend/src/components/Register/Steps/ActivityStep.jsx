import PropTypes from "prop-types";
import Register from "../Register";
import { Button } from "@/components/ui/button";

const ActivityStep = ({ onNext, onBack }) => {
  const activityLevels = [
    { label: "Moderado", description: "1 - 2 DÍAS A LA SEMANA" },
    { label: "Activo", description: "3 - 4 DÍAS A LA SEMANA" },
    { label: "Muy activo", description: "+ 5 DÍAS A LA SEMANA" },
  ];

  return (
    <Register onBack={onBack}>
      <div className="space-y-2">
        <h1>¿Cuántos días entrenas <br /> a la semana?</h1>
        <p className="text-cream/80">Selecciona tu nivel de actividad física.</p>
      </div>
      <div className="space-y-4">
        {activityLevels.map((level) => (
          <Button key={level.label} variant="outline" onClick={() => onNext(level.label)}>
            {level.description}
          </Button>
        ))}
      </div>
    </Register>
  );
};

ActivityStep.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ActivityStep;
