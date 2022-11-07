import {
  Flex,
  Heading,
  Box
} from "@chakra-ui/react";
import CardsLibrary from "../CardsLibrary";

const DashboardLibrary = () => {
  return (
    <Flex direction="column" h="100vh" w="100%"   >
      <Flex
        as={"main"}
        bgImage="../src/assets/img/bgbooks.svg"
        h={"100%"}
        w="100%"
        backgroundRepeat="no-repeat"
        gap="2.5rem"
        padding="1rem 2.5rem"
        backgroundSize="cover"
        backgroundPosition="center"
       
      >
        <Box
          position="absolute"
          top={"8rem"}
          left="1rem"
          zIndex={"1"}
          border="2px"
          p="10px 40px"
          borderRadius="50px"
          bg="white"
        >
          <Heading color="#068AD9">Biblioteca:</Heading>
        </Box>
        <Flex  margin={"100px auto"} w="95%">
            <CardsLibrary/>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardLibrary;
