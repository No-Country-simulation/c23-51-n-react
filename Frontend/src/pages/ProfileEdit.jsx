import { arrowBack, EditIcon } from "@/assets";
import UserAvatar from "@/assets/icons/UserAvatar";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

const ProfileEdit = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1, {
      replace: true,
    });
  };

  return (
    <>
      <header className="flex items-center justify-between">
        <button onClick={handleBack}>
          <img src={arrowBack} alt="Arrow back" className="size-6" />
        </button>
      </header>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1>Mi Perfil</h1>
        <UserAvatar className="size-16" />
        <div className="flex items-center gap-2">
          <span className="text-2xl uppercase">Gabriela</span>
          <EditIcon />
        </div>
      </div>

      <div className="flex flex-col pt-12">
        <h1>Datos Personales</h1>
        <div className="flex flex-col items-center w-full max-w-md py-6 ">
          <div className="flex items-center justify-between w-full py-4 gap-x-2">
            <span className="text-xl font-medium capitalize text-cream/80">
              Fecha de Nacimiento
            </span>
            <ChevronRight />
          </div>
          <Separator className="max-w-xs opacity-30" />

          <div className="flex items-center justify-between w-full py-4 gap-x-2">
            <span className="text-xl font-medium capitalize text-cream/80">Género</span>
            <ChevronRight />
          </div>
          <Separator className="max-w-xs opacity-30" />

          <div className="flex items-center justify-between w-full py-4 gap-x-2">
            <span className="text-xl font-medium capitalize text-cream/80">Objetivos</span>
            <ChevronRight />
          </div>
          <Separator className="max-w-xs opacity-30" />

          <div className="flex items-center justify-between w-full py-4 gap-x-2">
            <span className="text-xl font-medium capitalize text-cream/80">
              Nivel Actividad Física
            </span>
            <ChevronRight />
          </div>
        </div>

        <h1>Cuenta</h1>
        <div className="flex flex-col items-center w-full max-w-md py-6 mb-12">
          <div className="flex items-center justify-between w-full py-4 gap-x-2">
            <span className="text-xl font-medium capitalize text-cream/80">Correo electrónico</span>
            <ChevronRight />
          </div>
          <Separator className="max-w-xs opacity-30" />

          <div className="flex items-center justify-between w-full py-4 gap-x-2">
            <span className="text-xl font-medium capitalize text-cream/80">Contraseña</span>
            <ChevronRight />
          </div>
          <Separator className="max-w-xs opacity-30" />

          <div className="flex items-center justify-between w-full py-4 gap-x-2">
            <span className="text-xl font-medium capitalize text-cream/80">Suscripción</span>
            <ChevronRight />
          </div>
          <Separator className="max-w-xs opacity-30" />

          <div className="flex items-center justify-between w-full py-4 gap-x-2">
            <span className="text-xl font-medium capitalize text-cream/80">
              Términos y Condiciones
            </span>
            <ChevronRight />
          </div>
          <Separator className="max-w-xs opacity-30" />

          <div className="flex items-center justify-between w-full py-4 gap-x-2">
            <span className="text-xl font-medium capitalize text-cream/80">
              Políticas de Privacidad
            </span>
            <ChevronRight />
          </div>
          <Separator className="max-w-xs opacity-30" />

          <div className="flex items-center justify-between w-full py-4 gap-x-2">
            <span className="text-xl font-medium capitalize text-tomato/80">Eliminar cuenta</span>
            <ChevronRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
