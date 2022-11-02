import { Flex, Image, Text } from "@chakra-ui/react";

import { useContextFunction } from "../../contexts/userContext";
import { ModalLogin } from "../ModalLogin";

export const MainLandingPage = () => {

const {isOpen} =  useContextFunction()
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
      <Image src="./src/assets/img/books.png" />
      <Flex bg={"#2C7AED"} h="85%" align={"center"} justify="center" p={"5px"}>
        <Text color={"white"}>
          Descrição sobre o que o usuario irá encontrar no site...........
        </Text>
      </Flex>
    </Flex>
</>

  );
};
