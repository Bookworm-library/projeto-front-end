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
    FormControl,
    FormErrorMessage,
    Text
} from "@chakra-ui/react";
import loginImage from "../../assets/img/login-image-desktop.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/login";
import {
    iLoginBody,
    useContextFunction,
} from "../../contexts/userContext/userContext";
import {  Spinner } from '@chakra-ui/react'

export const ModalLogin = () => {
    const { isOpen, onClose, submitLogin, setModalControl, setBVtnModalLoadingLogin, btnModalLoadingLogin, setModalCadastro } = useContextFunction();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iLoginBody>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmitFunction = (data: any) => {
        submitLogin(data)
    };
    return (
        <>
            <Flex>
                <Modal isOpen={isOpen} onClose={onClose} >
                    <ModalOverlay />
                    <Box boxSize='sm' >
                        <ModalContent
                            bg="transparent"
                            flexDirection={"row"}
                            maxWidth="100vw" h="100vh"
                            margin={"0 auto"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Box>
                                <Image
                                    display={{ sm: "none", lg: "block" }}
                                    h="500px"
                                    w="600px"
                                    src={loginImage}
                                />
                            </Box>
                            <Box
                                bg="#2C7AED"
                                h="500px"
                                w="425px">
                                <Center color='white'>
                                    <ModalHeader >Login</ModalHeader>
                                    <ModalCloseButton
                                        bg="#FFFFFF"
                                        color="#4552CE"
                                        _hover={{ bg: "#FFFFFF" }}
                                        fontWeight='bold'
                                        position={"unset"}
                                        marginLeft="100px"
                                        marginRight="-120px"
                                    />
                                </Center>
                                <ModalBody  >
                                    <FormControl
                                        as="form"
                                        onSubmit={handleSubmit(onSubmitFunction)}>
                                        <FormControl isInvalid={Boolean(errors.email)} >
                                            <FormLabel
                                                color='white'
                                                fontWeight='bold'
                                            >Email:
                                            </FormLabel>
                                            <Input
                                                height={"3rem"}
                                                type='email'
                                                bg="#FFFFFF"
                                                placeholder="Digite seu email..."
                                                {...register("email")} />
                                            <Box
                                                h={"30px"}>
                                                <FormErrorMessage
                                                    marginTop={0}
                                                    h={"22px"}
                                                    fontSize={"16px"}
                                                    fontWeight={700}
                                                    color={"red.300"}
                                                >
                                                    {errors.email?.message}
                                                </FormErrorMessage>
                                            </Box>
                                        </FormControl>
                                        <FormControl isInvalid={Boolean(errors.password)}>
                                            <FormLabel
                                                color='white'
                                                fontWeight='bold'>
                                                Senha:
                                            </FormLabel>
                                            <Input
                                                height={"3rem"}
                                                type='password'
                                                bg="#FFFFFF"
                                                placeholder="Digite sua senha..."
                                                {...register("password")} />
                                            <Box
                                                h={"30px"}>
                                                <FormErrorMessage
                                                    marginTop={0}
                                                    h={"22px"}
                                                    fontSize={"16px"}
                                                    fontWeight={700}
                                                    color={"red.300"}
                                                >
                                                    {errors.password?.message}
                                                </FormErrorMessage>
                                            </Box>
                                        </FormControl>
                                        <Center color='white'>
                                        </Center>
                                        <Button
                                            fontWeight={"bold"}
                                            fontSize={"20px"}
                                            height={"3rem"}
                                            marginTop={"20px"}
                                            type='submit'
                                            borderStyle="4px"
                                            w="100%"
                                            bg="#2CEDE0"
                                            color="#3580EE"
                                            _hover={{ opacity: "0.7" }}
                                            onClick={() => setBVtnModalLoadingLogin(true)}
                                        >
                                            {btnModalLoadingLogin ? (<Spinner
                                                thickness='4px'
                                                speed='0.65s'
                                                emptyColor='gray.200'
                                                color='blue.500'
                                                size='md'
                                            />) : (<Text>Entrar</Text>)}
                                        </Button>
                                        <Text
                                            width="100%"
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            mt="1rem"
                                            as="p"
                                            color="white"
                                        >
                                            Não tem conta conosco?
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
                                                    onClose()
                                                    setModalControl(true)
                                                }}
                                            >
                                                Cadastre-se
                                            </Button>
                                        </Text>
                                    </FormControl>
                                </ModalBody>
                            </Box>

                        </ModalContent>
                    </Box>
                </Modal>
            </Flex>
        </>
    )
}


