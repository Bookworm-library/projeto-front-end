import { Flex } from "@chakra-ui/react";
import { HeaderLandingPage } from "../components/HeaderLandingPage";
import { MainLandingPage } from "../components/MainLandingPage";
import { Modal } from "../components/Modal";

export const LandingPage = () => {
  return (
  <Flex direction={"column"} w="100vw" h="100vh">
    <HeaderLandingPage />
    <MainLandingPage />
  </Flex>
  )
}
