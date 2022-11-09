import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("@BookwordmLibrary:token");

  if (token) return <Outlet />;
  return <Navigate to="/" />;
};

export default ProtectedRoutes;
