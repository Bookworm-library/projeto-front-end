<<<<<<< HEAD

export const LoginPage = () => {
    return <h1>Login Page</h1>;
  };
  
=======
import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import React, { useState } from 'react'

const schema = yup.object({
    email: yup
    .string()
    .email('Favor digitar um e-mail válido')
    .required('O email é obrigatório'),
  
    password: yup
    .string()
    .min(6, 'Favor colocar no mínimo 6 caracteres')
    .required('A senha é obrigatória')
  })

export const LoginPage = () => {


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });

    return (    
            {modal ?
            <Flex modal={modal} className='modalScreen'>

                  <header>
                    <h3>Login</h3>
                    <button onClick={closeModal}>x</button>
                  </header>

                  <form>
                      
                    <label htmlFor="email">Email:</label>
                    <input id='email' type='email' placeholder='Digite seu email...' {...register('email')}/>
                    <span>{errors.tech?.message}</span>

                    <label htmlFor="password">Senha:</label>
                    <input id="password" type='password' placeholder='Digite sua senha...' {...register('password')}/>
                    <span>{errors.tech_nivel?.message}</span>

                    <button type='submit'>Entrar</button>
                  </form>

              </Flex>
            :
            null  
            }
    )
  };
>>>>>>> 0f9c77a1124bf56599b36c8ba09ecaf3c204bd13
