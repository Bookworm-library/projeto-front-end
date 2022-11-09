import {
  Button,
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  ModalCloseButton,
  Heading,
  Image,
  Input,
  Text,
  Spinner
} from "@chakra-ui/react";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import registImage from "../../assets/img/regist-image-desktop.png";
import { iRegisterBody, useContextFunction } from "../../contexts/userContext/userContext";
import { registerSchema } from "../../validations/register";
import { FaEye } from "react-icons/fa";

export const RegistForm = () => {

  const { submitRegister, setModalControl, onOpen, onClose, setBVtnModalLoadingCadastro, btnModalLoadingCadastro, setModalType } = useContextFunction();

  const [eye, setEye] = useState(false)

  const changeStateEye = () => {
    setEye(!eye)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterBody>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      flexDirection={{ sm: "column", lg: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Image
        display={{ base: "none", sm: "none", lg: "block" }}
        width={"640px"}
        height={"640px"}
        src={registImage}
        alt="Pessoa segurando um livro"
      />
      <Flex
        width={{ base: "300px", md: "400px" }}
        height={"640px"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1rem"}
        bg={"blue.light"}
        paddingX={"22px"}
        paddingY={"18px"}
        borderRadius={"0.25rem"}
      >
        <Flex
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
        >
          <Heading
            fontSize={"24px"}
            fontWeight={"bold"}
            fontFamily={"Inter, sans-serif"}
            color={"white"}
          >
            Cadastro
          </Heading>
          <ModalCloseButton
            bg="#FFFFFF"
            color="#4552CE"
            _hover={{ bg: "#FFFFFF" }}
            onClick={() => {
              setModalControl(false);
              onClose()
            }}
          />
        </Flex>
        <FormControl as="form" onSubmit={handleSubmit(submitRegister)}>
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel
              marginY={"0.5rem"}
              marginX={0}
              fontSize={"16px"}
              fontWeight={"700"}
              color={"white"}
              htmlFor="email"
            >
              Nome de usuário:
            </FormLabel>
            <Input
              id="name"
              {...register("name")}
              type="text"
              width={"100%"}
              height={"3rem"}
              bg={"white"}
              placeholder={"Digite seu nome"}
            />
            <Box h={"26px"}>
              <FormErrorMessage
                marginTop={0}
                h={"22px"}
                fontSize={"16px"}
                fontWeight={700}
                color={"red.300"}
              >
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </Box>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel
              marginY={"0.5rem"}
              marginX={0}
              fontSize={"16px"}
              fontWeight={"700"}
              color={"white"}
              htmlFor="email"
            >
              Email:
            </FormLabel>
            <Input
              id="email"
              {...register("email")}
              type="email"
              width={"100%"}
              height={"3rem"}
              bg={"white"}
              placeholder={"Digite seu email"}
            />
            <Box h={"26px"}>
              <FormErrorMessage
                marginTop={0}
                h={"22px"}
                fontSize={"16px"}
                fontWeight={700}
                color={"red.300"}
              >
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </Box>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.password)}>
            <FormLabel
              marginY={"0.5rem"}
              marginX={0}
              fontSize={"16px"}
              fontWeight={"700"}
              color={"white"}
              htmlFor="email"
            >
              Senha:
            </FormLabel>
            {eye ?
              <Box display={"flex"} alignItems={"center"} w={"100%"} borderRadius={"4px"} bg="#FFFFFF" p={"0 20px"}>
                <Input
                  _focus={{ border: "none", outline: "none", input: "focus" }}
                  _active={{ border: "none", outline: "none", input: "focus" }}
                  _hover={{ border: "none", outline: "none" }}
                  border={{ outline: "none", input: "focus" }}
                  variant='unstyled'
                  height={"3rem"}
                  type='password'
                  bg="#FFFFFF"
                  placeholder="Digite sua senha..."
                  {...register("password")} />
                <FaEye color="#2C7AED" height={"46px"} onClick={changeStateEye} cursor={"pointer"} fontSize={"20px"} />
              </Box>
              :
              <Box display={"flex"} alignItems={"center"} w={"100%"} borderRadius={"4px"} bg="#FFFFFF" p={"0 20px"}>
                <Input
                  variant='unstyled'
                  border={"none"}
                  height={"3rem"}
                  type='text'
                  bg="#FFFFFF"
                  placeholder="Digite sua senha..."
                  {...register("password")} />
                <FaEye color="#2C7AED" height={"46px"} onClick={changeStateEye} cursor={"pointer"} fontSize={"20px"} />
              </Box>}
            <Box h={"26px"}>
              <FormErrorMessage
                marginTop={0}
                h={"22px"}
                fontSize={"16px"}
                fontWeight={700}
                color={"red.300"}
              >
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </Box>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.confirmPassword)}>
            <FormLabel
              marginY={"0.5rem"}
              marginX={0}
              fontSize={"16px"}
              fontWeight={"700"}
              color={"white"}
              htmlFor="email"
            >
              Confirme sua senha:
            </FormLabel>
            {eye ?
              <Box display={"flex"} alignItems={"center"} w={"100%"} borderRadius={"4px"} bg="#FFFFFF" p={"0 20px"}>
                <Input
                  id="confirmPassword"
                  {...register("confirmPassword")}
                  type="password"
                  variant='unstyled'
                  height={"3rem"}
                  bg="#FFFFFF"
                  placeholder={"Digite sua senha novamente"}
                />
                <FaEye color="#2C7AED" height={"46px"} onClick={changeStateEye} cursor={"pointer"} fontSize={"20px"} />
              </Box>
              :
              <Box display={"flex"} alignItems={"center"} w={"100%"} borderRadius={"4px"} bg="#FFFFFF" p={"0 20px"}>
                <Input
                  id="confirmPassword"
                  {...register("confirmPassword")}
                  type="text"
                  variant='unstyled'
                  height={"3rem"}
                  bg="#FFFFFF"
                  placeholder={"Digite sua senha novamente"}
                />
                <FaEye color="#2C7AED" height={"46px"} onClick={changeStateEye} cursor={"pointer"} fontSize={"20px"} />
              </Box>}
            <Box h={"26px"}>
              <FormErrorMessage
                marginTop={0}
                h={"22px"}
                fontSize={"16px"}
                fontWeight={700}
                color={"red.300"}
              >
                {errors.confirmPassword && errors.confirmPassword.message}
              </FormErrorMessage>
            </Box>
          </FormControl>
          <Button
            type="submit"
            width={"100%"}
            height={"3rem"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"1rem"}
            cursor={"pointer"}
            bg={"cyan"}
            fontFamily={"Inter"}
            fontWeight={"800"}
            fontSize={"20px"}
            color={"blue.dark"}
            _hover={{ opacity: "0.7" }}
            onClick={() => {
              setTimeout(() => {
                setBVtnModalLoadingCadastro(false)
              }, 2000);
              setBVtnModalLoadingCadastro(true)
            }}
          >
            {btnModalLoadingCadastro ? (<Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='md'
            />) : (<Text>Cadastrar</Text>)}
          </Button>
          <Text
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={"1rem"}
            as={"p"}
            color="white"
          >
            Já tem conta conosco?
            <Button
              width={"auto"}
              height={"auto"}
              pl="0.25rem"
              bg="transparent"
              color={"cyan"}
              textDecoration={"underline"}
              _focus={{ bg: "transparent" }}
              _hover={{ bg: "transparent" }}
              onClick={() => {
                setModalControl(false)
                onOpen()
                setModalType("login");
              }}
            >
              Entrar
            </Button>
          </Text>
        </FormControl>
      </Flex>
    </Flex>
  );
};

