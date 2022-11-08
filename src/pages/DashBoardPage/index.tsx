import { Box, Flex, Image } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import boyandbook from "../../assets/img/boyandbook.jpg"


export const DashboardPage = () => {
  return (
    <>
      <HeaderDashboard />
             
      <Box pt={"120px"}>
        <Flex
        w="100%"
        h="100vh"
        display="flex"
        flexDirection="column"
        gap="2.5rem"
        padding="1rem 2.5rem"
        bgImage="/src/assets/img/bgbooks.svg"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" 
        >
        </Flex> 
        <Outlet />
        <Image
            display={{base: "none", sm: "none", lg: "block" }}
            h="670px"
            w="350px"
            src={boyandbook}
        />
      </Box>
    </>
  );
};
