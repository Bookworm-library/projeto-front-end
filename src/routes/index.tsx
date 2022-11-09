import { Route, Routes, Navigate } from "react-router-dom";
import DashboardLibrary from "../components/DashboardLibrary";
import { DashboardPage } from "../pages/DashBoardPage";
import { LandingPage } from "../pages/LandingPage";
import { SearchPage } from "../pages/SearchPage";
import ProtectedRoutes from "../components/ProtectedRouter";
import { AboutPage } from "../components/AboutPage";
import DashboardMain from "../components/DashboardMain";

export const RoutesMain = () => (
  <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />}>
            
            <Route index element={<DashboardMain/>}></Route>
            <Route path="/dashboard/biblioteca" element={<DashboardLibrary />}></Route>
            <Route path="/dashboard/pesquisa" element={<SearchPage />}></Route>
            <Route path="/dashboard/sobre" element={<AboutPage />}></Route>
          </Route>
      </Route>
    </Routes>
  </>
);
