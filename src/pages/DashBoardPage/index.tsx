import { Searchbar } from "../../components/Searchbar";
import { Box, Flex} from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { HeaderDashboard } from "../../components/HeaderDashboard";


export const DashboardPage = () => {

  return (
    <>
      <HeaderDashboard />

      <Box
        w="100%"
        mt="6.2rem"
        display={{ sm: "flex", lg: "none" }}
        justifyContent="center"
        alignItems="center"
        position="fixed"
        zIndex="1"
       
      >
        <Flex w="100%" h="60px" bg="white" align={"center"} justify="center">
          <Searchbar />
        </Flex>
      </Box>
      <Box pt={{ sm: "190px", lg: "120px" }}>

        <Outlet />
      </Box>
    </>
  );
};
