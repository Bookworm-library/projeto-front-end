import { createContext, useState, useContext, ReactNode } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Toast } from "@chakra-ui/react";
import { apiFake } from "../../services/api";
import { useNavigate } from "react-router-dom";



import React, { Dispatch } from "react";
interface iUserContext {
  submitRegister: (body: iRegisterBody) => Promise<void>;
  submitLogin: (body: iRegisterBody) => Promise<void>;
  modalControl: boolean;
  modalType: "login" | "register";
  setModalControl: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setModalType: React.Dispatch<React.SetStateAction<"login" | "register">>;
}

interface iUserContextProps {
  children: ReactNode;
}

export interface iRegisterBody {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface iLoginBody {
  email: string;
  password: string;
}

interface iUserCadastradoAndLogado {
  accessToken: string,
  user: {
    email: string
    nome: string,
    comfirmPassword: string,
    id: number
  }
}


export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {

  const navigate = useNavigate()

  const [modalControl, setModalControl] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState<"login" | "register">("login");

  const submitRegister = async (body: iRegisterBody): Promise<void> => {
    try {
      console.log(body);
      const { data } = await apiFake.post<iUserCadastradoAndLogado>("register", body);
      console.log(data)
      Toast({
        title: "Cadastro efetuado com sucesso!",
        description: "Você já pode logar com sua nova conta.",
        duration: 2000,
        status: "success",
        isClosable: true,
        position: "top",
      });
      setModalType("register");
    } catch (error) {
      console.log(error);
    }
  };

  const submitLogin = async (body: iLoginBody): Promise<void> => {
    try {
      const { data } = await apiFake.post<iUserCadastradoAndLogado>("login", body);
      console.log(data)

      localStorage.setItem("token", data.accessToken)

      const getToken = localStorage.getItem("token")
      sessionStorage.setItem("uuid",`${data.user.id}`)

      if (getToken) {
        navigate("/dashboard")
      } 
      console.log(body);
      Toast({
        title: "Login efetuado com sucesso!",
        duration: 2000,
        status: "success",
        isClosable: true,
        position: "top",
      });
      setModalType("login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        submitLogin,
        submitRegister,
        modalControl,
        modalType,
        setModalControl,
        setModalType,
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useContextFunction = () => {
  const contextUser = useContext(UserContext);
  return contextUser;
};
