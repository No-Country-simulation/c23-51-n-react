import { CommentIcon, HeartOutline, HelpIcon, SettingIcon } from "@/assets";
import UserAvatar from "@/assets/icons/UserAvatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useAuthStore from "@/store/authStore";
import { LogOut } from "lucide-react";
import { Link } from "react-router";

const Profile = () => {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <div className="flex flex-col w-full gap-y-24">
        <div className="flex flex-col items-center justify-center gap-2">
          <UserAvatar className="size-16" />
          <h1 className="uppercase">Gabriela</h1>
          <Button variant="outline" className="max-w-xs mt-2">
            <Link to="/profile/edit">editar perfil</Link>
          </Button>
        </div>

        <div className="flex flex-col items-center w-full max-w-md p-6 ">
          <div className="flex items-center w-full py-4 gap-x-2">
            <HeartOutline className="w-6 h-6 text-cream" />
            <span className="text-2xl capitalize text-cream">Mis rutinas guardadas</span>
          </div>
          <Separator className="max-w-xs opacity-30" />

          <div className="flex items-center w-full py-4 gap-x-2">
            <SettingIcon className="w-6 h-6 text-cream" />
            <span className="text-2xl capitalize text-cream">Configuración</span>
          </div>
          <Separator className="max-w-xs opacity-30" />

          <div className="flex items-center w-full py-4 gap-x-2">
            <HelpIcon className="w-6 h-6 text-cream" />
            <span className="text-2xl capitalize text-cream">Centro de Ayuda</span>
          </div>
          <Separator className="max-w-xs opacity-30" />

          <div className="flex items-center w-full py-4 gap-x-2">
            <CommentIcon className="w-6 h-6 text-cream" />
            <span className="text-2xl capitalize text-cream">Dejar Comentario</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Button
            id="logout"
            name="logout"
            variant="ghost"
            onClick={handleLogout}
            className="[&_svg]:size-6"
          >
            <LogOut color="#FF4E23" size={24} />
            <h1 className="font-normal text-tomato">Cerrar Sesión</h1>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
