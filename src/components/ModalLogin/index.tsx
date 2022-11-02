import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    Input,
    FormLabel,
    FormControl,
    FormHelperText,
    Center,
    Image,
    Button,
    Text
} from '@chakra-ui/react'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { validacaoLogin } from '../../validations/LoginValidation'

import { useContextFunction } from '../../contexts/userContext'

export interface iLogin {
    email: string,
    password: string
}

export function ModalLogin() {

    const { isOpen, onClose } = useContextFunction()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<iLogin>({
        resolver: yupResolver(validacaoLogin),
    });

    const onSubmitFunction = (data: iLogin) => {
        console.log(data)
    };

    return (
        <>
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
                         _hover={{ bg:"#FFFFFF" }}
                         />
                        <ModalBody >
                            <FormControl onSubmit={handleSubmit(onSubmitFunction)}>
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
                                <FormHelperText
                                    color="#FF7B7B" >{errors.email?.message}</FormHelperText>
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
                                <FormHelperText
                                    color="#FF7B7B">{errors.password?.message}
                                </FormHelperText>
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
                            </FormControl>
                        </ModalBody>
                    </ModalContent>
                </Box>
            </Modal>
        </>
    )
}


