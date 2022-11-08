import { Route, Routes } from "react-router-dom";
import DashboardLibrary from "../components/DashboardLibrary";
import { DashboardPage } from "../pages/DashBoardPage";
import { LandingPage } from "../pages/LandingPage";
import { SearchPage } from "../pages/SearchPage";
import ProtectedRoutes from "../components/ProtectedRouter";

export const RoutesMain = () => (
  <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<DashboardPage />}>
          <Route index></Route>
          <Route
            path="/dashboard/biblioteca"
            element={<DashboardLibrary />}
          ></Route>
          <Route path="/dashboard/pesquisa" element={<SearchPage />}></Route>
        </Route>
      </Route>
    </Routes>
  </>
);
