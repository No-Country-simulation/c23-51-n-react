import useAuthStore from "@/store/authStore";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ isPublic = false }) => {
  const { isAuthenticated, isTokenValid, logout } = useAuthStore();
  const location = useLocation();

  const publicRoutes = ["/", "/login", "/register"];

  useEffect(() => {
    if (isAuthenticated && !isTokenValid()) {
      logout();
    }
  }, [isAuthenticated, isTokenValid, logout]);

  // Permitir acceso a la ruta de registro sin importar el estado de autenticación por tema del form multistep
  // luego podemos mirar cómo manejar esto de una mejor manera xd
  if (location.pathname === "/register") {
    return <Outlet />;
  }

  if (!isAuthenticated || !isTokenValid()) {
    if (isPublic) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  } else if (isPublic && publicRoutes.includes(location.pathname)) {
    return <Navigate to="/home" replace />;
  } else {
    return <Outlet />;
  }
};

ProtectedRoute.propTypes = {
  isPublic: PropTypes.bool,
};