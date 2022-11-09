import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { HeaderDashboard } from "../../components/HeaderDashboard";
import { Searchbar } from "../../components/Searchbar";

export const DashboardPage = () => {
  return (
    <>
      <HeaderDashboard />
      <Box
        w="100%"
        mt="8rem"
        display={{ sm: "flex", lg: "none" }}
        justifyContent="center"
        alignItems="center"
        position="fixed"
        zIndex="1"
      >
        <Searchbar />
      </Box>
      <Box pt={{ sm: "190px", lg: "120px" }}>
        <Outlet />
      </Box>
    </>
  );
};
