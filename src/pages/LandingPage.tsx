import { Box, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useContext } from "react";
import { HeaderLandingPage } from "../components/HeaderLandingPage";
import { MainLandingPage } from "../components/MainLandingPage";
import { RegistForm } from "../components/RegistForm";
import { UserContext } from "../contexts/userContext";

export const LandingPage = () => {
  const { modalControl, modalType } = useContext(UserContext);
  return (
    <>
      <Box w="100vw" h="100vh">
        <HeaderLandingPage />
        <MainLandingPage />
        <Modal
          isCentered
          isOpen={modalControl}
          closeOnOverlayClick={true}
          onClose={() => {}}
        >
          <ModalOverlay />
          <ModalContent w="800px">
            {modalType === "login" ? <h1>Login</h1> : <RegistForm />}
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};
