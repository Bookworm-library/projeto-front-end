import { Flex, Heading, Stack, Button, Image } from "@chakra-ui/react";

export const HeaderLandingPage = () => {
  return (
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
  );
};
