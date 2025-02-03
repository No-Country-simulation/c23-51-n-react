import PropTypes from "prop-types";
import Register from "../Register";
import { Button } from "@/components/ui/button";

const AgeStep = ({ onNext, onBack }) => {
  const ageRanges = ["18 - 24", "25 - 34", "35 - 44", "+ 45"];
  return (
    <Register onBack={onBack}>
      <div className="space-y-2">
        <h1>¿Cuál es tu edad?</h1>
        <p className="text-cream/80">Selecciona tu rango de edad.</p>
      </div>

      <div className="space-y-4">
        {ageRanges.map((range) => (
          <Button key={range} variant="outline" onClick={() => onNext(range)}>
            {range} años
          </Button>
        ))}
      </div>
    </Register>
  );
};

AgeStep.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default AgeStep;
