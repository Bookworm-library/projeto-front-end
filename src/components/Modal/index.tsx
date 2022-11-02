import { Box } from "@chakra-ui/react";
import { RegistForm } from "../RegistForm";

export const Modal = () => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"black.50"}
      zIndex={"1000"}
      position={"fixed"}
    >
      <RegistForm />
    </Box>
  );
};
