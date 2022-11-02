import { createContext, useState, useContext,ReactNode } from "react";
import { useDisclosure } from '@chakra-ui/react'
import { Toast } from "@chakra-ui/react";
import { api } from "../services/api";

interface iUserContext {
  submitRegister: (body: iRegisterBody) => Promise<void>;
  submitLogin: (body: iRegisterBody) => Promise<void>;
  modalControl: boolean;
  modalType: iModalType;
  setModalControl: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<iModalType>>;
  isOpen: boolean;
  onOpen: () => void;
  onClose:() => void;
}

interface iUserContextProps {
  children: ReactNode;
}

interface iModalType {
  type: "register" | "login";
}

export interface iRegisterBody {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface iLoginBody {
  email: string,
  password: string
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [modalControl, setModalControl] = useState<boolean>(false);
  const [modalType, setModalType] = useState<iModalType>({ type: "login" });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitRegister = async (body: iRegisterBody): Promise<void> => {
    try {
      console.log(body);
      //   const { data } = await api.post("register", body);
      Toast({
        title: "Cadastro efetuado com sucesso!",
        description: "Você já pode logar com sua nova conta.",
        duration: 2000,
        status: "success",
        isClosable: true,
        position: "top",
      });
      setModalType({ type: "register" });
    } catch (error) {
      console.log(error);
    }
  };

  const submitLogin = async (body: iLoginBody): Promise<void> => {
    try {
      console.log(body);
      //   const { data } = await api.post("login", body);
      Toast({
        title: "Login efetuado com sucesso!",
        duration: 2000,
        status: "success",
        isClosable: true,
        position: "top",
      });
      setModalType({ type: "login" });
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
        onClose
      }}
    >
      {children}
    </UserContext.Provider>
  );
};


export function useContextFunction() {
  const contextUser = useContext(UserContext)
  return contextUser
}