import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import registImage from "../../assets/images/regist-image-desktop.png";
import { iRegisterBody } from "../../contexts/userContext";
import { registerSchema } from "../../validations/register";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContextFunction } from "../../contexts/userContext";

export const RegistForm = () => {

  const { submitRegister,setModalControl } = useContextFunction();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterBody>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <Flex
      width={{ sm: "85%", lg: "65%" }}
      height={{ sm: "auto", lg: "700px" }}
      flexDirection={{ sm: "column", lg: "row" }}
    >
      <Image
        display={{ sm: "none", lg: "block" }}
        width={"500px"}
        src={registImage}
        alt="Pessoa segurando um livro"
      />
      <Flex
        width={"100%"}
        height={"auto"}
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
          <Button
            onClick={() => {
              setModalControl(false);
            }}
            padding={0}
            width={"24px"}
            height={"32px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
            bg={"white"}
            color={"violet"}
            fontWeight={700}
            fontSize={"1.5rem"}
            position={"absolute"}
            right={"0"}
            _focus={{ bg: "white" }}
            _hover={{ bg: "white" }}
          >
            X
          </Button>
        </Flex>
        <form onSubmit={handleSubmit(submitRegister)}>
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
            <FormErrorMessage
              fontSize={"16px"}
              fontWeight={700}
              color={"red.300"}
            >
              {errors.name && errors.name.message}
            </FormErrorMessage>
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
            <FormErrorMessage
              fontSize={"16px"}
              fontWeight={700}
              color={"red.300"}
            >
              {errors.email && errors.email.message}
            </FormErrorMessage>
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
            <Input
              id="password"
              {...register("password")}
              type="password"
              width={"100%"}
              height={"3rem"}
              bg={"white"}
              placeholder={"Digite sua senha"}
            />
            <FormErrorMessage
              fontSize={"16px"}
              fontWeight={700}
              color={"red.300"}
            >
              {errors.password && errors.password.message}
            </FormErrorMessage>
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
            <Input
              id="confirmPassword"
              {...register("confirmPassword")}
              type="password"
              width={"100%"}
              height={"3rem"}
              bg={"white"}
              placeholder={"Digite sua senha novamente"}
            />
            <FormErrorMessage
              fontSize={"16px"}
              fontWeight={700}
              color={"red.300"}
            >
              {errors.confirmPassword && errors.confirmPassword.message}
            </FormErrorMessage>
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
            _focus={{ bg: "cyan" }}
          >
            Cadastrar
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
            >
              Entrar
            </Button>
          </Text>
        </form>
      </Flex>
    </Flex>
  );
};
