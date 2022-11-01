import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export const LandingPage = () => {
  return (
    <Flex direction={"column"} w="100vw" h="100vh">
    
      <Flex
        as={"header"}
        w="100%"
        align="center"
        justify="space-between"
        p="5px 40px"
        m="0 auto"
        minH="100px"
        bg="#2C7AED"
        sx={{ boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.507)" }}
      >
        <Flex align="center" gap="20px">
          <Image src="./src/assets/img/logo.svg" />
          <Heading color="#DAEEFA"> Bookworm Library</Heading>
        </Flex>
        <Stack align="center" direction={"row"} color="white" gap="20px">
          <Button
            sx={{ boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.315)" }}
            _hover={{ opacity: "0.7" }}
            bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
          >
            Login
          </Button>
          <Button
            sx={{ boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.315)" }}
            _hover={{ opacity: "0.7" }}
            bgGradient="linear(to-t,#2CEDE0, #2C7AED)"
          >
            Cadastro
          </Button>
        </Stack>
      </Flex>
      <Flex as={"main"} bgImage="./src/assets/img/bgbooks.svg" h={"100%"}  p={"20px"}  align={"center"} justify="center">
        <Image src="./src/assets/img/books.png"/>
        <Flex bg={"#2C7AED"} h="85%" align={"center"} justify="center" p={"5px"}>
          <Text color={"white"}>Descrição sobre o que o usuario irá encontrar no site...........</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
