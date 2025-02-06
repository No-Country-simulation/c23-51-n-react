import { arrowBack, logo } from "@/assets";
import ForgotPasswordForm from "@/components/Login/ForgotPasswordForm";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1, {
      replace: true,
    });
  };
  return (
    <div className="max-w-md min-h-screen p-4 mx-auto">
      <div className="relative flex items-start">
        <button onClick={handleBack}>
          <img src={arrowBack} alt="Arrow back" className="size-6" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={logo}
          alt="Logo Momentum"
          width={46}
          height={35}
          className="z-10 object-contain w-20 h-auto"
        />
      </div>
      <div className="relative flex flex-col pt-12 justify-between min-h-[calc(100vh-120px)]">
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPassword;
