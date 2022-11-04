import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { LandingPage } from "../pages/LandingPage";
import { SearchPage } from "../pages/SearchPage";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<DashboardPage />}>
      <Route index></Route>
      <Route path="/dashboard/biblioteca"></Route>
      <Route path="/dashboard/pesquisa" element={<SearchPage />}></Route>
    </Route>
  </Routes>
);
