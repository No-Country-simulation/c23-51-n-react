import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import Register from "../Register";
import { Button } from "@/components/ui/button";
import { loader } from "@/assets";

const LoadingStep = ({ onNext }) => {
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const buttonRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prevPercentage + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percentage === 100) {
      const timer = setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.click();
        }
      }, 5000);

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
          <img src={loader} alt="Loader icon" className={!isLoading ? "animate-none" : "duration-1500 animate-spin" } />
        </div>
        <div className="flex flex-col items-center justify-center text-cream/80">
          <span className="mb-2 text-2xl font-bold">{percentage}%</span>
          <p className="text-sm ">
            ¡Preparando el mejor plan <br /> para que logres tus objetivos!
          </p>
        </div>
      </div>
      {!isLoading && (
        <Button ref={buttonRef} type="button" variant="outline" onClick={handleContinue}>
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
