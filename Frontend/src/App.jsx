import "@fontsource-variable/lexend";
import { Route, Routes } from "react-router";
import Register from "@/pages/Register";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Dashboard from "@/pages/Dashboard";
import Subscription from "./pages/Subscription";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subscription" element={<Subscription />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
