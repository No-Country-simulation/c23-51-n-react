/* eslint-disable no-unused-vars */
import { useState } from "react";
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
  const { formData, setFormData, resetForm } = useFormStore();
  const navigate = useNavigate();
  const { mutate: register, isLoading } = useRegister();

  const handleNext = (data) => {
    setFormData(data);
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (credentials) => {
    try {
      const completeFormData = {
        ...formData,
        ...credentials,
      };

      //   console.log("Datos completos:", completeFormData)

      register(completeFormData);

      setStep((prev) => prev + 1);
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  const handleComplete = () => {
    console.log("Formulario completado", formData);
    setStep((prev) => prev + 1);
  };

  const handleStartFreeTrial = () => {
    navigate("/dashboard");
    resetForm();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <GenderStep onNext={(gender) => handleNext({ gender })} />;
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
        return <CredentialsStep onNext={handleSubmit} onBack={handleBack} />;
      case 8:
        return <LoadingStep onNext={handleComplete} />;
      case 9:
        return <FreeTrialGuideStep onNext={handleNext} />;
      case 10:
        return <RegisterSuscription onNext={handleStartFreeTrial} />;
      default:
        return null;
    }
  };

  return renderStep();
};

export default MultiStepForm;
