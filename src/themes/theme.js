import { createTheme } from "@mui/material";

const theme = createTheme({
   palette: {
      onboarding: {
         
      }, 
      global: {
         borderLinearProgress: {
            main: "rgb(0, 8, 232)"
         }
      }
   }, 
   shape: {
      borderLinearProgress: {
         borderRadius: 2
      }
   }
})

export default theme