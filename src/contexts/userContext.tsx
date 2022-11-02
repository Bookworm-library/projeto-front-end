import { Toast } from "@chakra-ui/react";
import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

interface iUserContext {
  submitRegister: (body: iRegisterBody) => Promise<void>;
  modalControl: boolean;
  modalType: "login" | "register";
  setModalControl: React.Dispatch<React.SetStateAction<boolean>>;
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

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [modalControl, setModalControl] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"login" | "register">("login");
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
      setModalType("login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        submitRegister,
        modalControl,
        modalType,
        setModalControl,
        setModalType,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
