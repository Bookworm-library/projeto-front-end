import { createContext } from "react";
import React, { useState, Dispatch } from 'react'


export const UserContext = createContext({});

interface IModalLogin{
  modal: boolean,
  setModal:Dispatch<boolean>
}

export const UserProvider = ({ children }: any) => {

  const [modal, setModal] = useState<IModalLogin>(false)
  const closeModal = () => {
      setModal(false)
    }

  return <UserContext.Provider value={{modal, setModal}}>{children}</UserContext.Provider>;
};
