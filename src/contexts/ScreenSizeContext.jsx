import { useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../themes/theme";

import useForceUpdate from "../customs/hooks/useForceUpdate";

const ScreenSizeContext = createContext(''); 

export const ScreenSizeProvider = ({children}) => { 
   const forceUpdate = useForceUpdate()
   const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
   useEffect(() => {
      window.addEventListener('resize', forceUpdate())
      return () => {
         window.removeEventListener('resize', forceUpdate())
      }
   }, [])

   return <ScreenSizeContext.Provider value={isSmallScreen}>{children}</ScreenSizeContext.Provider>
}

export const useScreenSize = () => {
   return useContext(ScreenSizeContext)
}