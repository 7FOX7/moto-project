import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const SelectedStoryContext = createContext(''); 

export const SelectedStoryProvider = ({children}) => { 
   const [selectedStory, setSelectedStory] = useState(null); 

   return <SelectedStoryContext.Provider value={{selectedStory, setSelectedStory}}>{children}</SelectedStoryContext.Provider>
}

export const useSelectedStory = () => {
   return useContext(SelectedStoryContext)
}