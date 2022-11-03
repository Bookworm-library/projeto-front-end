import { Box, Modal, ModalContent, ModalOverlay, } from "@chakra-ui/react";
import { useContext } from "react";
import { HeaderLandingPage } from "../components/HeaderLandingPage";
import { MainLandingPage } from "../components/MainLandingPage";
import { ModalLogin } from "../components/ModalLogin";
import { RegistForm } from "../components/RegistForm";
import { UserContext } from "../contexts/userContext";


export const LandingPage = () => {
  const { modalControl, modalType, isOpen, onClose } = useContext(UserContext);
  return (
    <>
      <Box w="100vw" h="100vh">
        <HeaderLandingPage />
        <MainLandingPage />
        <Modal
          /* isOpen={isOpen}  */
         /*  onClose={onClose} */
          isCentered
          isOpen={modalControl}
          closeOnOverlayClick={true}
          onClose={() => { }}
        >
          <ModalOverlay />
          <ModalContent w="800px">
            {modalType === "login" ? <ModalLogin /> : <RegistForm />}
          </ModalContent>
        </Modal>
      </Box>
    </>
  )
}



