import { createContext, useState, useContext, ReactNode } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import React from "react";
import { apiFake } from "../../services/api";
import { FaBookOpen, FaBook } from 'react-icons/fa';

interface iUserContext {
  submitRegister: (body: iRegisterBody) => Promise<void>;
  submitLogin: (body: iRegisterBody) => Promise<void>;
  modalControl: boolean;
  modalType: "login" | "register";
  setModalControl: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  userInfo: [] | undefined
  setuserInfo: React.Dispatch<React.SetStateAction<[] | undefined>>
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


  const [userInfo, setuserInfo] = useState<[] | undefined>([]);
  /* const [modalControl, setModalControl] = useState<boolean>(false); */
  const [modalControl, setModalControl] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState<"login" | "register">("login");

  const submitRegister = async (body: iRegisterBody): Promise<void> => {
    try {

      const { data } = await apiFake.post<iUserCadastradoAndLogado>("register", body);
      toast.success('Registro realizado com sucesso', {
        icon: FaBookOpen,
        theme: "colored",
        position: 'top-right',
        autoClose: 2000
      })
      setModalType("register");
      setModalControl(false)
    } catch (error) {
      toast.error("Email já existente / Senha inválida", {
        icon: FaBook,
        theme: "colored",
        position: 'top-right',
        autoClose: 2000
      })
    }
  };

  const submitLogin = async (body: iLoginBody): Promise<void> => {
    try {

      const { data } = await apiFake.post<iUserCadastradoAndLogado>("login", body);
      localStorage.setItem("token", data.accessToken);

      toast.success('Login realizado com sucesso', {
        icon: FaBookOpen,
        theme: "colored",
        position: 'top-right',
        autoClose: 2000
      })
      navigate("/dashboard")

      const getToken = localStorage.getItem("token");

      if (getToken) {
        navigate("/dashboard");
      }
      setModalType("login");
    } catch (error) {
      toast.error('Usuário ou senha inválido!', {
        icon: FaBook,
        theme: "colored",
        position: 'top-right',
        autoClose: 2000
      })
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
        userInfo,
        setuserInfo
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
