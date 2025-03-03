/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { toast } from "sonner";
import GenderStep from "./Steps/GenderStep";
import AgeStep from "./Steps/AgeStep";
import GoalsStep from "./Steps/GoalsStep";
import ActivityStep from "./Steps/ActivityStep";
import NameStep from "./Steps/NameStep";
import BirthdateStep from "./Steps/BirthdateStep";
import CredentialsStep from "./Steps/CredentialsStep";
import LoadingStep from "./Steps/LoadingStep";
import FreeTrialGuideStep from "./Steps/FreeTrialGuideStep";
import { useNavigate } from "react-router";
import useFormStore from "@/store/formStore";
import RegisterSuscription from "./Steps/RegisterSuscription";
import { useRegister } from "@/hooks/useUserAuth";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const { setFormData, resetForm } = useFormStore();

  const navigate = useNavigate();
  const { register, isLoading, isError, isSuccess } = useRegister();

  const handleNext = (data) => {
    setFormData(data, step);
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step === 1) {
      return navigate("/");
    }
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (data) => {
    setFormData(data);
    try {
      await register(data);
      // Si el registro es exitoso, avanzamos al siguiente paso
      if (isSuccess) {
        setStep(8);
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      // No avanzamos al siguiente paso en caso de error
    }
  };

  const handleComplete = () => {
    setStep((prev) => prev + 1);
  };

  const handleStartFreeTrial = () => {
    navigate("/subscription");
    resetForm();
  };

  // Efecto para manejar el avance después del registro exitoso
  useEffect(() => {
    if (isSuccess) {
      setStep(8); // Avanzar al paso de carga
    }
  }, [isSuccess]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <GenderStep onNext={(gender) => handleNext({ gender })} onBack={handleBack} />;
      case 2:
        return <AgeStep onNext={(age) => handleNext({ age })} onBack={handleBack} />;
      case 3:
        return <GoalsStep onNext={(goals) => handleNext({ goals })} onBack={handleBack} />;
      case 4:
        return (
          <ActivityStep
            onNext={(activityLevel) => handleNext({ activityLevel })}
            onBack={handleBack}
          />
        );
      case 5:
        return <NameStep onNext={(name) => handleNext({ name })} onBack={handleBack} />;
      case 6:
        return (
          <BirthdateStep onNext={(birthdate) => handleNext({ birthdate })} onBack={handleBack} />
        );
      case 7:
        return (
          <CredentialsStep
            onNext={handleNext}
            onBack={handleBack}
            onHandleSubmit={handleSubmit}
            isLoading={isLoading}
            isError={isError}
          />
        );
      case 8:
        return <LoadingStep onNext={() => setStep(9)} />;
      case 9:
        return <FreeTrialGuideStep onNext={handleComplete} />;
      case 10:
        return <RegisterSuscription onNext={handleStartFreeTrial} />;
      default:
        return null;
    }
  };

  return renderStep();
};

export default MultiStepForm;
