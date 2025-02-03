import PropTypes from "prop-types";
import Register from "../Register";
import { Button } from "@/components/ui/button";
import { todayUnlock, dayBell, dayStar } from "@/assets";
import { useNavigate } from "react-router";

const FreeTrialGuideStep = ({ onNext }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/home");
  };
  return (
    <Register showBackButton={false} showCloseButton={true} onClose={handleClose}>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Guía de prueba gratuita</h1>
          <p className="text-cream/80">
            Empieza hoy sin pagar y descubre cómo mejorar tu entrenamiento
          </p>
        </div>

        <div className="relative space-y-6">
          <div className="absolute left-9 top-[40px] h-[calc(100%-60px)] w-0.5 bg-orange-500/30" />

          <div className="relative flex items-start gap-4">
            <img src={todayUnlock} alt="Unlock today icon" className="bg-vividBlack" />
            <div>
              <p className="font-semibold">No tienes que pagar ahora.</p>
              <p className="text-sm text-cream/80">
                ¡Accede a todas las funciones de Momentum gratis!
              </p>
            </div>
          </div>

          <div className="relative flex items-start gap-4">
            <img src={dayBell} alt="Bell icon" className="bg-vividBlack" />
            <div>
              <p className="font-semibold">Te avisaremos.</p>
              <p className="text-sm text-cream/80">
                Recibirás un recordatorio sobre el final de la prueba gratuita.
              </p>
            </div>
          </div>

          <div className="relative flex items-start gap-4">
            <img src={dayStar} alt="Star icon" className="bg-vividBlack" />
            <div>
              <p className="font-semibold">Comienza tu entrenamiento.</p>
              <p className="text-sm text-cream/80">Puedes cancelar antes para evitar el cobro.</p>
            </div>
          </div>
        </div>
      </div>
      <Button type="button" onClick={onNext}>
        COMENZAR PRUEBA GRATUITA
      </Button>
    </Register>
  );
};

FreeTrialGuideStep.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default FreeTrialGuideStep;
