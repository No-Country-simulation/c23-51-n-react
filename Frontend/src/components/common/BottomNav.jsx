import { Link, useLocation } from "react-router";
import { HomeIcon, MenuIcon, ThunderIcon } from "@/assets";

const BottomNav = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-20 flex justify-around w-full px-11 py-3.5 gap-20 bg-vividBlack nav-shadow h-[72px]">
        <div
          className={`flex flex-col items-center  ${
            isActive("/home") ? "text-tangerine" : "text-cream"
          }`}
        >
          <Link
            to="/home"
            aria-label="Inicio"
            className="flex flex-col items-center justify-center gap-1"
          >
            <HomeIcon color={`${isActive("/home") ? "#FA7E25" : "#FFF9F6"}`} />
            <span className="text-xs">Inicio</span>
          </Link>
        </div>
        <div
          className={`flex flex-col items-center  ${
            isActive("/routines") ? "text-tangerine" : "text-cream"
          }`}
        >
          <Link
            to="/routines"
            aria-label="Rutinas"
            className="flex flex-col items-center justify-center gap-1"
          >
            <ThunderIcon color={`${isActive("/routines") ? "#FA7E25" : "#FFF9F6"}`} />
            <span className="text-xs">Rutinas</span>
          </Link>
        </div>
        <div
          className={`flex flex-col items-center  ${
            isActive("/profile") ? "text-tangerine" : "text-cream"
          }`}
        >
          <Link
            to="/profile"
            aria-label="profile"
            className="flex flex-col items-center justify-center gap-1"
          >
            <MenuIcon color={`${isActive("/profile") ? "#FA7E25" : "#FFF9F6"}`} />
            <span className="text-xs">Menú</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default BottomNav;
