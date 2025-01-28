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
          className="relative w-full h-12 text-orange-500 border-orange-500 hover:bg-orange-500/10 hover:text-orange-400"
        >
          <img src={male} alt="Male gender icon" className="absolute left-6 size-6" />
          <span className="ml-4">MASCULINO</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => onNext("femenino")}
          className="relative w-full h-12 text-orange-500 border-orange-500 hover:bg-orange-500/10 hover:text-orange-400"
        >
          <img src={female} alt="Female gender icon" className="absolute left-6 size-6" />
          <span className="ml-4">FEMENINO</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => onNext("otro")}
          className="relative w-full h-12 text-orange-500 border-orange-500 hover:bg-orange-500/10 hover:text-orange-400"
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
