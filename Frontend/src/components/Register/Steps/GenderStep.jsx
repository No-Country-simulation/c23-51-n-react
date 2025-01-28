import PropTypes from "prop-types";
import Register from "../Register";
import { Button } from "@/components/ui/button";
import { bigender, female, male } from "@/assets";

const GenderStep = ({ onNext, onBack }) => {
  return (
    <Register onBack={onBack}>
      <div className="space-y-2">
        <h1>
          ¡Comenzemos! <br />
          Cuéntanos más sobre ti
        </h1>
        <p className="text-cream/80">Selecciona tu género.</p>
      </div>

      <div className="w-full space-y-4">
        <Button
          variant="outline"
          onClick={() => onNext("masculino")}
        >
          <img src={male} alt="Male gender icon" className="absolute left-6 size-6" />
          <span className="ml-4">MASCULINO</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => onNext("femenino")}
        >
          <img src={female} alt="Female gender icon" className="absolute left-6 size-6" />
          <span className="ml-4">FEMENINO</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => onNext("otro")}
        >
          <img src={bigender} alt="Other gender icon" className="absolute left-6 size-6" />
          <span className="ml-4">OTRO</span>
        </Button>
      </div>
    </Register>
  );
};

GenderStep.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func,
};

export default GenderStep;
