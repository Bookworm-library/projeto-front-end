import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { LandingPage } from "../pages/LandingPage";
import ProtectedRoutes from "../components/ProtectedRouter";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />

    <Route path="/" element={<ProtectedRoutes />} >
      <Route path="dashboard" element={<DashboardPage />} />
    </Route >

    <Route path="/dashboard" element={<DashboardPage />}>
      <Route index></Route>
      <Route path="/dashboard/biblioteca"></Route>
      <Route path="/dashboard/pesquisa" element={<h2>Pesquisa</h2>}></Route>
    </Route>

  </Routes>
);
