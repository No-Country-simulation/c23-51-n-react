import "@fontsource-variable/lexend";
import { Route, Routes } from "react-router";
import Register from "@/pages/Register";
import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/Login";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Home from "@/pages/Home";
import Subscription from "./pages/Subscription";
import Rutinas from "./pages/Rutinas";

function App() {
  return (
    <>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<ProtectedRoute isPublic />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
        </Route>

        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/rutinas" element={<Rutinas />} />
          <Route path="/subscription" element={<Subscription />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
