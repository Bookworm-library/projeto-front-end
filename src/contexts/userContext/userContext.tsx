import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import React from "react";
import { apiFake } from "../../services/api";
import { FaBookOpen, FaBook } from "react-icons/fa";
import { SearchContext } from "../searchContext/searchContext";

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
  setModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setModalCadastro: React.Dispatch<React.SetStateAction<boolean>>;
  
  btnModalLoadingLogin: boolean;
  btnModalLoadingCadastro: boolean;
  isOpen: boolean;
  modalLogin: boolean;
  modalCadastro: boolean;
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
  const [modalLogin, setModalLogin] = useState<boolean>(false);
  const [modalCadastro, setModalCadastro] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"login" | "register">("login");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [btnModalLoadingLogin, setBVtnModalLoadingLogin] = useState<boolean>(false);
  const [btnModalLoadingCadastro, setBVtnModalLoadingCadastro] = useState<boolean>(false);

  console.log("//////////////////////////////////")
  console.log("isOpen",isOpen)
  console.log("modalControl",modalControl)
  /* console.log("modalLogin",modalLogin)
  console.log("modalCadastro",modalCadastro)
 */
  const submitRegister = async (body: iRegisterBody): Promise<void> => {
    const newBody = { ...body, library: [], wishlist: [], recomended: [] };

    try {
      const { data } = await apiFake.post<iUserCadastradoAndLogado>(
        "register",
        newBody
      );
      setBVtnModalLoadingCadastro(false);
      toast.success("Registro realizado com sucesso", {
        icon: FaBookOpen,
        theme: "colored",
        position: "top-right",
        autoClose: 2000,
      });
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

      navigate("/dashboard");

      if (token) {
        navigate("/dashboard");
      }

      setModalType("login");
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
        modalLogin,
        modalCadastro,
        setModalLogin,
        setModalCadastro,
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
