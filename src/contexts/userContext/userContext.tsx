import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import React, { Dispatch } from "react";
import { apiFake } from "../../services/api";
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
  accessToken: string;
  user: {
    email: string;
    nome: string;
    comfirmPassword: string;
    id: number;
  };
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {

  const navigate = useNavigate()
  const getToken = localStorage.getItem("token")

  const [modalControl, setModalControl] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState<"login" | "register">("login");

  const submitRegister = async (body: iRegisterBody): Promise<void> => {
    try {

      const { data } = await apiFake.post<iUserCadastradoAndLogado>("register", body);

      console.log(body);
   
      console.log(data);
    
      setModalType("register");
    } catch (error) {
      console.log(error);
    }
  };

  const submitLogin = async (body: iLoginBody): Promise<void> => {
    console.log(body)
    try {

      const { data } = await apiFake.post<iUserCadastradoAndLogado>("login", body);
      console.log(data)


      console.log(data);

      localStorage.setItem("token", data.accessToken);

      navigate("/dashboard")

      const getToken = localStorage.getItem("token");
      sessionStorage.setItem("uuid", `${data.user.id}`);

      if (getToken) {
        navigate("/dashboard");
      }
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
