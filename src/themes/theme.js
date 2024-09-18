import { createTheme } from "@mui/material";

const theme = createTheme({
   palette: {
      primary: {
         main: "rgb(255, 255, 255)",  
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
})

export default theme