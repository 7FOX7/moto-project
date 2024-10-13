import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const SelectedUserContext = createContext(''); 

export const SelectedUserProvider = ({children}) => { 
   const [selectedUser, setSelectedUser] = useState(null); 

   return <SelectedUserContext.Provider value={{selectedUser, setSelectedUser}}>{children}</SelectedUserContext.Provider>
}

export const useSelectedUser = () => {
   return useContext(SelectedUserContext)
}