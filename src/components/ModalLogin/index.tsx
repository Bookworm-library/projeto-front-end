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
    FormErrorMessage
} from '@chakra-ui/react'

import loginImage from "../../assets/images/login-image-desktop.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from '../../validations/login'

import { useContextFunction } from '../../contexts/userContext'
import { iLoginBody } from '../../contexts/userContext';


export const ModalLogin = () => {

    const { isOpen, onClose, submitLogin } = useContextFunction()

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
                <Modal isOpen={isOpen} onClose={onClose}  >
                    <ModalOverlay  /> 
                    <Box boxSize='sm' >
                        <ModalContent bg="transparent" flexDirection={"row"} maxWidth="80vw" h="500px"
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
                            h="100%" 
                            w="425px">
                                <Center color='white'>
                                    <ModalHeader >Login</ModalHeader>
                                </Center>
                                <ModalCloseButton
                                    bg="#FFFFFF"
                                    color="#4552CE"
                                    _hover={{ bg: "#FFFFFF" }}
                                    fontWeight='bold'
                                />
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
                                            marginTop={"20px"}
                                            type='submit'
                                            borderStyle="4px"
                                            w="100%"
                                            bg="#2CEDE0"
                                            color="#3580EE"
                                            _hover={{ opacity: "0.7" }} >Entrar</Button>
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


