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
                <img
                    /*  display={{ sm: "none", lg: "block" }} */
                    src="../../assets/images/login-image-desktop.png"
                /*  alt="Pessoa segurando um livro" */
                />
                <Modal isOpen={isOpen} onClose={onClose}  >
                    <ModalOverlay />
                    <Box boxSize='sm'>
                        <Box>
                            <Image src='blaz-photo-zMRLZh40kms-unsplash' />
                        </Box>

                        <ModalContent bg="#2C7AED">
                            <Center color='white'>
                                <ModalHeader >Login</ModalHeader>
                            </Center>
                            <ModalCloseButton
                                bg="#FFFFFF"
                                color="#4552CE"
                                _hover={{ bg: "#FFFFFF" }}
                            />
                            <ModalBody >
                                <form onSubmit={handleSubmit(onSubmitFunction)}>
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
                                    <p >{errors.password?.message}</p>
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
                                    <p >{errors.password?.message}</p>
                                    <Center color='white'>
                                        <Text fontWeight='bold'>Ainda não possui cadastro?</Text>
                                    </Center>
                                    <Button
                                        type='submit'
                                        borderStyle="4px"
                                        w="100%"
                                        bg="#2CEDE0"
                                        color="#3580EE"
                                        _hover={{ opacity: "0.7" }} >Entrar</Button>
                                </form>
                            </ModalBody>
                        </ModalContent>
                    </Box>
                </Modal>
            </Flex>
        </>
    )
}


