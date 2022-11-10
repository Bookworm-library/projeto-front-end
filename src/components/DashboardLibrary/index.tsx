import {
  Flex,
  Heading,
  Box,
} from "@chakra-ui/react";
import CardsLibrary from "../CardsLibrary";
import { ImBooks }  from "react-icons/im";

const DashboardLibrary = () => {
  return (
    <Flex direction="column" h="100vh" w="100%"   >
      <Flex
        as={"main"}
        bgImage="../src/assets/img/bgbooks.svg"
        h="100%"
        w="100%"
        backgroundRepeat="no-repeat"
        gap="2.5rem"
        padding={{base:"0",lg:"1rem 2.5rem"}}
        backgroundSize="cover"
        backgroundPosition="center"
        direction={"column"}
      >
        <Box
          h={"40px"}
          w="22.5rem" 
          p="5px 40px"
          borderRadius="50px"
          bg={"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(44,122,224,1) 0%, rgba(44,237,224,1) 100%)"}
          sx={{ boxShadow: "0px 3px 7px rgba(0, 0, 0, 0.5)" }}
          maxW="300px"
          margin={{base:"0 auto",md:"0",lg:"0"}}
        >
          <Heading 
          color="#ffffff"
          h={"30px"}
          fontSize="1.6rem" 
          display="flex"
          alignItems="center"
          justifyContent="center" 
          >Biblioteca:
          </Heading>
          <Box>
          </Box>
        </Box>
        <Flex  margin={"0"} w="100%" height="100%">
            <CardsLibrary />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardLibrary;