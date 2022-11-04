import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { HeaderDashboard } from "../components/HeaderDashboard";
import { SearchProvider } from "../contexts/searchContext/searchContext";

export const DashboardPage = () => {
  return (
    <>
      <SearchProvider>
        <HeaderDashboard />
        <Box pt={"120px"}>
          <Outlet />
        </Box>
      </SearchProvider>
    </>
  );
};
