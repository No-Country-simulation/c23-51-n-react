import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Register from "../Register";
import { Button } from "@/components/ui/button";
import { loader } from "@/assets";

const LoadingStep = ({ onNext }) => {
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage >= 100) {
          clearInterval(intervalRef.current);
          return 100;
        }
        const increment = Math.max(1, 10 - Math.floor(prevPercentage / 10));
        return Math.min(100, prevPercentage + increment);
      });
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (percentage === 100) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setShowContinueButton(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [percentage]);

  const handleContinue = () => {
    onNext();
  };

  return (
    <Register showBackButton={false}>
      <div className="space-y-8 text-center">
        <div className="space-y-2 text-center">
          <h1>¡Estamos creando tu plan!</h1>
          <p className="text-cream/80">
            Tus respuestas nos ayudan a diseñar un plan que se ajuste a tus necesidades
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={loader}
            alt="Loader icon"
            className={`transition-all duration-500 ${isLoading ? "animate-spin" : "animate-pulse"}`}
          />
        </div>
        <div className="flex flex-col items-center justify-center text-cream/80">
          <span className="mb-2 text-2xl font-bold">{percentage}%</span>
          {percentage < 100 ? (
            <p className="text-sm ">
              ¡Preparando el mejor plan <br /> para que logres tus objetivos!
            </p>
          ) : (
            <p className="text-sm ">¡Tu plan está listo!</p>
          )}
        </div>
      </div>
      {showContinueButton && (
        <Button type="button" variant="outline" onClick={handleContinue}>
          Continuar
        </Button>
      )}
    </Register>
  );
};

LoadingStep.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default LoadingStep;
