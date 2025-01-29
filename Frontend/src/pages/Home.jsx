import { Button } from "@/components/ui/button";
import useAuthStore from "@/store/authStore";
import { LogOut } from "lucide-react";

const Home = () => {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8 text-3xl">
      <h1>Hola 👋🏼, bienvenido !</h1>

      <Button
        id="logout"
        name="logout"
        variant="destructive"
        onClick={handleLogout}
        className="flex flex-row items-center gap-4 text-base"
      >
        <LogOut /> Cerrar sesión
        <span className="sr-only">Cerrar sesión</span>
      </Button>
    </div>
  );
};

export default Home;
