import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";
import { apiFake } from "../../services/api";
import { FaBookOpen, FaBook } from "react-icons/fa";
interface iUserContext {
  modalType: "login" | "register";
  userInfo: [] | undefined;
  
  setUserInfo: React.Dispatch<React.SetStateAction<[] | undefined>>;
  
  onOpen: () => void;
  onClose: () => void;
  submitLogin: (body: iRegisterBody) => Promise<void>;
  submitRegister: (body: iRegisterBody) => Promise<void>;
  
  setModalType: React.Dispatch<React.SetStateAction<"login" | "register">>;
  setModalControl: React.Dispatch<React.SetStateAction<boolean>>;
  setBVtnModalLoadingLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setBVtnModalLoadingCadastro: React.Dispatch<React.SetStateAction<boolean>>;
  
  btnModalLoadingLogin: boolean;
  btnModalLoadingCadastro: boolean;
  isOpen: boolean;
  modalControl: boolean;
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
  const navigate = useNavigate();

  const token = localStorage.getItem("@BookwordmLibrary:token");
  const [userInfo, setUserInfo] = useState<[] | undefined>([]);

  const [modalControl, setModalControl] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"login" | "register">("login");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [btnModalLoadingLogin, setBVtnModalLoadingLogin] = useState<boolean>(false);
  const [btnModalLoadingCadastro, setBVtnModalLoadingCadastro] = useState<boolean>(false);

  const submitRegister = async (body: iRegisterBody): Promise<void> => {

    if(body === undefined){
      setBVtnModalLoadingCadastro(false);
    }

    const newBody = { ...body, library: [], wishlist: [], recomended: [] };
    try {
      const { data } = await apiFake.post<iUserCadastradoAndLogado>(
        "register",
        newBody
      );
      toast.success("Registro realizado com sucesso", {
        icon: FaBookOpen,
        theme: "colored",
        position: "top-right",
        autoClose: 2000,
      });

      setBVtnModalLoadingCadastro(false);
      
      setModalType("register");
      setModalControl(false);
    } catch (error) {
      toast.error("Email já existente / Senha inválida", {
        icon: FaBook,
        theme: "colored",
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const submitLogin = async (body: iLoginBody): Promise<void> => {
    if(body === undefined){
      setBVtnModalLoadingLogin(false);
    }
    try {
      const { data } = await apiFake.post<iUserCadastradoAndLogado>(
        "login",
        body
      );
      localStorage.setItem("@BookwordmLibrary:token", data.accessToken);
      localStorage.setItem("@BookwordmLibrary:userId", data.user.id + "");

      toast.success("Login realizado com sucesso", {
        icon: FaBookOpen,
        theme: "colored",
        position: "top-right",
        autoClose: 2000,
      });
      setBVtnModalLoadingLogin(false);
      
      if (token) {
        navigate("/dashboard/home");
      }
      
      setModalType("login");
      navigate("/dashboard/home")
      onClose()
    } catch (error) {
      toast.error("Usuário ou senha inválido!", {
        icon: FaBook,
        theme: "colored",
        position: "top-right",
        autoClose: 2000,
      });
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
        setUserInfo,
        btnModalLoadingLogin,
        setBVtnModalLoadingLogin,
        btnModalLoadingCadastro,
        setBVtnModalLoadingCadastro,
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
