import { Outlet } from "react-router";
import BottomNav from "./BottomNav";

const Layout = () => {
  return (
    <div className="relative max-w-md min-h-screen p-4 mx-auto">
      <div>
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};

export default Layout;
