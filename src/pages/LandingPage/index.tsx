import { Box, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { isMotionComponent } from "framer-motion";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderLandingPage } from "../../components/HeaderLandingPage";
import { MainLandingPage } from "../../components/MainLandingPage";
import { ModalLogin } from "../../components/ModalLogin";
import { RegistForm } from "../../components/RegistForm";
import { UserContext } from "../../contexts/userContext/userContext";

export const LandingPage = () => {
  const { modalControl, modalType, setModalControl } = useContext(UserContext);
  const token = localStorage.getItem("@BookwordmLibrary:token");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/dashboard", { replace: true });
  }, []);

  return (
    <>
      <Box w="100%" h="100vh">
        <HeaderLandingPage />
        <MainLandingPage />
        <Modal
          isCentered
          isOpen={modalControl}
          closeOnOverlayClick={true}
          onClose={() => { }}
        >
          <ModalOverlay />
          <ModalContent
            maxWidth="100vw"
            bg="transparent"
            h="100vh"
            margin={"0 auto"}
          >
            {modalType === "login" ? <ModalLogin /> : <RegistForm />}
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};
