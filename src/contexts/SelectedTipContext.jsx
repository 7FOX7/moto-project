import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const SelectedTipContext = createContext(''); 

export const SelectedTipProvider = ({children}) => { 
   const [selectedTip, setSelectedTip] = useState(null); 

   return <SelectedTipContext.Provider value={{selectedTip, setSelectedTip}}>{children}</SelectedTipContext.Provider>
}

export const useSelectedTip = () => {
   return useContext(SelectedTipContext)
}