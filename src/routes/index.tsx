import { Route, Routes } from "react-router-dom";
import DashboardLibrary from "../components/DashboardLibrary";
import { DashboardPage } from "../pages/DashboardPage";
import { LandingPage } from "../pages/LandingPage";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/dashboard/library" element={<DashboardLibrary />} />
  </Routes>
);
