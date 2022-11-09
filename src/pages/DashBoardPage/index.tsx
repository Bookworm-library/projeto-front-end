import { Box} from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { HeaderDashboard } from "../../components/HeaderDashboard";

export const DashboardPage = () => {

  return (
    <>
      <HeaderDashboard />
     
      <Box pt={"120px"} >
      
        <Outlet />
        
      </Box>
    </>
  );
};
