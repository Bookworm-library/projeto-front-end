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
import { Spinner } from '@chakra-ui/react'
import { FaEye } from "react-icons/fa";
import { useState } from "react";

export const ModalLogin = () => {
    const { isOpen, onClose, submitLogin, setModalControl, setBVtnModalLoadingLogin, onOpen, btnModalLoadingLogin, setModalType } = useContextFunction();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iLoginBody>({
        resolver: yupResolver(loginSchema),
    });

    const [eye, setEye] = useState(true)

    const changeStateEye = () => {
        if(eye === true) {
            setEye(false)
        } else {
            setEye(true)
        }
      } 

    const onSubmitFunction = (data: any) => {
        submitLogin(data)
    };
    return (
        <>
            <Flex>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay w="100%" h="100%"/>
                    <Box boxSize='sm' >
                        <ModalContent
                            bg="transparent"
                            flexDirection={"row"}
                            maxWidth="100%" h="100%"
                            margin={"0 auto"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Box>
                                <Image
                                    display={{base: "none", sm: "none", lg: "block" }}
                                    h="500px"
                                    w="600px"
                                    src={loginImage}
                                />
                            </Box>
                            <Box
                                bg="#2C7AED"
                                h="500px"
                                w={{base:"300px", md:"425px"}}>
                                <Center color='white'>
                                    <ModalHeader >Login</ModalHeader>
                                    <ModalCloseButton
                                        bg="#FFFFFF"
                                        color="#4552CE"
                                        _hover={{ bg: "#FFFFFF" }}
                                        fontWeight='bold'
                                        position={"unset"}
                                        marginLeft={{base:"60px",sm:"70px",lg:"100px"}}
                                        marginRight={{base:"-70px",sm:"-60px",lg:"-120px"}}
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
                                            <Box display={"flex"} flexDirection={"row"}>
                                                {
                                                    eye ?
                                                    <Box display={"flex"} alignItems={"center"} w={"100%"} borderRadius={"4px"} bg="#FFFFFF" paddingRight={"20px"}>
                                                        <Input                                                           
                                                            border={"none"}
                                                            height={"3rem"}
                                                            type='password'
                                                            bg="#FFFFFF"
                                                            placeholder="Digite sua senha..."
                                                            {...register("password")} />
                                                        <FaEye color="#2C7AED" height={"46px"} onClick={changeStateEye} cursor={"pointer"} fontSize={"20px"} /> 
                                                    </Box>
                                                    :                                                    
                                                    <Box display={"flex"} alignItems={"center"} w={"100%"} borderRadius={"4px"} bg="#FFFFFF" paddingRight={"20px"}>
                                                        <Input        
                                                                                                             
                                                            border={"none"}
                                                            height={"3rem"}
                                                            type='text'
                                                            bg="#FFFFFF"
                                                            placeholder="Digite sua senha..."
                                                            {...register("password")} />
                                                        <FaEye color="#2C7AED" height={"46px"} onClick={changeStateEye} cursor={"pointer"} fontSize={"20px"}  /> 
                                                    </Box>
                                                    }                                                                                                
                                            </Box>
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
                                            onClick={() => {
                                                setTimeout(() => {
                                                    setBVtnModalLoadingLogin(false)
                                                }, 2000);
                                                setBVtnModalLoadingLogin(true)
                                            }}
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
                                                    setModalControl(true)
                                                    setModalType("register")
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


