import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import DashboardLibrary from "../components/DashboardLibrary";
import { DashboardPage } from "../pages/DashBoardPage";
=======
import { ModalLibrary } from "../components/ModalLibrary";
import { DashboardPage } from "../pages/DashboardPage";
>>>>>>> feat/libraryModal
import { LandingPage } from "../pages/LandingPage";
import { SearchPage } from "../pages/SearchPage";
import ProtectedRoutes from "../components/ProtectedRouter";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
<<<<<<< HEAD
    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="dashboard" element={<DashboardPage />}>
        <Route index></Route>
        <Route path="/dashboard/biblioteca" element={<DashboardLibrary />}></Route>
        <Route path="/dashboard/pesquisa" element={<SearchPage />}></Route>
      </Route>
=======
    <Route path="/modal" element={<ModalLibrary />} />
    <Route path="/dashboard" element={<DashboardPage />}>
      <Route index></Route>
      <Route path="/dashboard/biblioteca"></Route>
      <Route path="/dashboard/pesquisa" element={<h2>Pesquisa</h2>}></Route>
>>>>>>> feat/libraryModal
    </Route>
  </Routes>
);
