import { createTheme } from "@mui/material";

const theme = createTheme({
   components: {
      MuiDrawer: {
         styleOverrides: {
            paper: {
               background: "linear-gradient(90deg, rgba(33,33,33,1) 0%, rgba(47,47,47,1) 89%)"
            }
         }
      }
   }, 
   palette: {
      primary: {
         main: "rgb(255, 255, 255)",  
      }, 
      global: {
         borderLinearProgress: {
            main: "linear-gradient(90deg, rgba(0,0,73,1) 0%, rgba(0,137,255,1) 100%)"
         }, 
         secondaryTextContent: {
            main: "rgba(200, 200, 200, 0.5)"
         }
      }, 
   }, 
   shape: {
      borderLinearProgress: {
         borderRadius: 2
      }
   }, 
   typography: {
      global: {
         boldText: {
            fontWeight: "700"
         }
      }
   }
})

export default theme