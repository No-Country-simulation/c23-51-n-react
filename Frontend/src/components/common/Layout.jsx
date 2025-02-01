import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="relative max-w-md min-h-screen p-4 mx-auto">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
