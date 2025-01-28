import { registerMan, securityLock } from "@/assets";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useNavigate } from "react-router";

const RegisterSuscription = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/home");
  };

  const handleSubmit = () => {
    navigate("/subscription");
  };

  return (
    <div className="relative max-w-md min-h-screen mx-auto">
      <div className="absolute z-10 flex items-start p-5">
        <button onClick={handleClose}>
          <X color="#fff" className="size-6" />
        </button>
      </div>
      <img
        src={registerMan}
        alt="Hombre haciendo ejercicio"
        className="object-cover w-full brightness-50 hero-img"
      />
      <div className="flex flex-col justify-between space-y-8">
        <div className="flex flex-col items-center space-y-2 justify-normal">
          <div className="flex items-center justify-between gap-x-14">
            <span className="text-sm line-through text-cream/80 ">$2.00/mes</span>
            <span className="text-sm font-bold text-tangerine">25% DESCUENTO</span>
          </div>
          <p className="font-bold text-center">7 días GRATIS, entonces $0.05/día</p>
          <span className="text-base leading-5 text-cream/80">Solo $1.49 al mes</span>
          <div className="flex items-center justify-center pt-7">
            <img src={securityLock} alt="Lock icon" />
            <span className="text-sm text-cream/80">Asegurado con App Store</span>
          </div>
        </div>
        <div className="px-4">
          <Button type="button" onClick={handleSubmit}>
            EMPIEZA MI SEMANA GRATIS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuscription;
