import { createContext, useState, useContext } from "react";
import { useDisclosure } from '@chakra-ui/react'

export interface IUserContext {
  isOpen: boolean,
  onOpen: () => void,
  onClose:() => void
}

export const UserContext = createContext<IUserContext>({} as IUserContext);
export const UserProvider = ({ children }: any) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return <UserContext.Provider value={{ isOpen, onOpen, onClose }}>{children}</UserContext.Provider>;
};


export function useContextFunction() {
  const contextUser = useContext(UserContext)
  return contextUser
}