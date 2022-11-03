import { Flex, Image, Text } from "@chakra-ui/react";

import { useContextFunction } from "../../contexts/userContext/userContext";
import { ModalLogin } from "../ModalLogin";

export const MainLandingPage = () => {
  const { isOpen } = useContextFunction();
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
        <Flex
          bg={"#2C7AED"}
          h="85%"
          align={"center"}
          justify="center"
          p={"5px"}
          maxW="400px"
        >
          <Text color={"white"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
