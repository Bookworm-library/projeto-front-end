import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Input,
  FormLabel,
  Flex,
  Center,
  Image,
  Button,
  Text,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

import loginImage from "../../assets/img/login-image-desktop.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "../../validations/login";
import {
  iLoginBody,
  useContextFunction,
} from "../../contexts/userContext/userContext";

export const ModalLogin = () => {
  const { isOpen, onClose, submitLogin } = useContextFunction();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginBody>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitFunction = (data: any) => {
    submitLogin(data);
  };

  return (
    <>
      <Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <Box boxSize="sm">
            <ModalContent bg="#2C7AED" flexDirection={"row"}>
              <Box width={"500px"}>
                <Image
                  display={{ sm: "none", lg: "block" }}
                  h="100%"
                  src={loginImage}
                />
              </Box>
              <Box bg="#2C7AED">
                <Center color="white">
                  <ModalHeader>Login</ModalHeader>
                </Center>
                <ModalCloseButton
                  bg="#FFFFFF"
                  color="#4552CE"
                  _hover={{ bg: "#FFFFFF" }}
                />
                <ModalBody>
                  <FormControl
                    as="form"
                    onSubmit={handleSubmit(onSubmitFunction)}
                  >
                    <FormControl isInvalid={Boolean(errors.email)}>
                      <FormLabel color="white" fontWeight="bold">
                        Email:
                      </FormLabel>
                      <Input
                        type="email"
                        bg="#FFFFFF"
                        placeholder="Digite seu email..."
                        {...register("email")}
                      />
                      <FormErrorMessage
                        fontSize={"16px"}
                        fontWeight={700}
                        color={"red.300"}
                      >
                        {errors.email?.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={Boolean(errors.password)}>
                      <FormLabel color="white" fontWeight="bold">
                        Senha:
                      </FormLabel>
                      <Input
                        type="password"
                        bg="#FFFFFF"
                        placeholder="Digite sua senha..."
                        {...register("password")}
                      />
                      <FormErrorMessage
                        fontSize={"16px"}
                        fontWeight={700}
                        color={"red.300"}
                      >
                        {errors.password?.message}
                      </FormErrorMessage>
                    </FormControl>
                    <Center color="white">
                      <Text fontWeight="bold">Ainda não possui cadastro?</Text>
                    </Center>
                    <Button
                      type="submit"
                      borderStyle="4px"
                      w="100%"
                      bg="#2CEDE0"
                      color="#3580EE"
                      _hover={{ opacity: "0.7" }}
                    >
                      Entrar
                    </Button>
                  </FormControl>
                </ModalBody>
              </Box>
            </ModalContent>
          </Box>
        </Modal>
      </Flex>
    </>
  );
};
