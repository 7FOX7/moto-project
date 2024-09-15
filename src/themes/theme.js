import { createTheme } from "@mui/material";

const theme = createTheme({
   palette: {
      onboarding: {
         
      },
      home: {

      }, 
      global: {
         borderLinearProgress: {
            main: "linear-gradient(90deg, rgba(0,0,73,1) 0%, rgba(0,137,255,1) 100%)"
         }
      }
   }, 
   shape: {
      borderLinearProgress: {
         borderRadius: 2
      }
   }, 
   shadows: {
      borderLinearProgress: {   
         1: "0px 0px 25px 2px rgb(0, 8, 232)"
      }
   }
})

export default theme