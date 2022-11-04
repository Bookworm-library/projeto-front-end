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
        <Flex marginTop={"200px"}>
          <Image src="./src/assets/img/books.png" />
<<<<<<< HEAD
          <Flex bg={"#2C7AED"} h="100%" minH={"400px"} maxH="400px" align={"center"} justify="center" p={"5px"} maxW="400px">
            <Text color={"white"}>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
=======
          <Flex
            bg={"#2C7AED"}
            h="100%"
            minH={"400px"}
            maxH="400px"
            align={"center"}
            justify="center"
            p={"5px"}
            maxW="400px"
          >
            <Text color={"white"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
>>>>>>> aa30a38c051e2abe2cf06acbef7d9a437b0df864
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
