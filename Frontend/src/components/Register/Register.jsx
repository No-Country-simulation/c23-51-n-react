import PropTypes from "prop-types";
import { arrowBack, close, logo } from "@/assets";
import { cn } from "@/lib/utils";

const Register = ({
  children,
  onBack,
  showBackButton = true,
  showCloseButton = false,
  onClose,
  className,
}) => {
  return (
    <div className="max-w-md min-h-screen p-4 mx-auto">
      <div className="relative flex items-start">
        {showBackButton && (
          <button onClick={onBack}>
            <img src={arrowBack} alt="Arrow back" className="size-6" />
          </button>
        )}

        {showCloseButton && (
          <button onClick={onClose} className="absolute left-0">
            <img src={close} alt="Close" className="size-6" />
          </button>
        )}
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
      <div
        className={cn(
          "relative flex flex-col pt-12 justify-between min-h-[calc(100vh-120px)]",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

Register.propTypes = {
  children: PropTypes.node,
  onBack: PropTypes.func,
  showBackButton: PropTypes.bool,
  onClose: PropTypes.func,
  showCloseButton: PropTypes.bool,
  className: PropTypes.string,
};

export default Register;
