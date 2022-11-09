import { Flex, Image, Text } from "@chakra-ui/react";

import { useContextFunction } from "../../contexts/userContext/userContext";
import { ModalLogin } from "../ModalLogin";
import imgLandingPage from "../../assets/img/books.png"

export const MainLandingPage = () => {
  const { isOpen } = useContextFunction();

  const breakpoints = {
    sm: "319px",
    md: "950px",
  };

  return (
    <>
      {isOpen ? <ModalLogin /> : null}
      <Flex
        as={"main"}
        bgImage="./src/assets/img/bgbooks.svg"
        h={"100%"}
        p={"20px"}
        align={"center"}
        justify="center"
      >
        <Flex
          marginTop="100px"
          w={{ base: "100%", md: "" }}
          display={{ md: "flex" }}
          align="center"
          justify="center"
          gap="50px"
        >
          <Image
            src={imgLandingPage}
            margin={{ sm: "0 auto", md: "0" }}
            w={{ base: "350px", md: "450px", lg: "500px" }}
          />
          <Flex
            justifySelf={"left"}
            bg={"#2C7AED"}
            h={{ sm: "300px", md: "400px" }}
            align={"center"}
            justify="center"
            p={"20px 20px"}
            maxW="400px"
            margin={{ sm: "0 auto", md: "0" }}
            flexDir="column"
            gap={{ sm: "30px", md: "60px" }}
            borderRadius="8px"
          >
            <Text
              color={"white"}
              fontSize={{ base: "20px", lg: "26px" }}
              fontWeight="600"
            >
              Busque por livros, salve uma lista de desejos, adicione à
              biblioteca e recomende para outras pessoas. Tudo isso em um só
              lugar!
            </Text>
            <Text
              color={"white"}
              fontSize={{ base: "20px", lg: "26px" }}
              fontWeight="600"
            >
              Crie sua conta agora mesmo!
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
