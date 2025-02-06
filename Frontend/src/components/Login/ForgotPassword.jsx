import { useNavigate } from "react-router"

export const ForgotPassword = () => {

    const navigate = useNavigate();

    const goToForgotPassword = () => {
        navigate('/forgot-password');
    }

  return (
    <div className="">
        <span className="go-to-forgot-pass" onClick={goToForgotPassword}>Olvidé mi contraseña</span>
    </div>
  )
}
