import { Route, Routes } from "react-router-dom";
import { ModalLibrary } from "../components/ModalLibrary";
import { DashboardPage } from "../pages/DashboardPage";
import { LandingPage } from "../pages/LandingPage";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/modal" element={<ModalLibrary />} />
    <Route path="/dashboard" element={<DashboardPage />}>
      <Route index></Route>
      <Route path="/dashboard/biblioteca"></Route>
      <Route path="/dashboard/pesquisa" element={<h2>Pesquisa</h2>}></Route>
    </Route>
  </Routes>
);
