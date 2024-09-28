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
      home: {
         mobile: {
            contentTextPrimary: {
               fontSize: "2.5rem"
            }, 
            contentTextSecondary: {
               fontSize: "1.1rem"
            }, 
            reviewPrimaryText: {
               fontSize: "1.8rem",
               fontWeight: 600
            }, 
            reviewSecondaryText: {
               fontSize: "0.9rem"
            }
         }, 
         desktop: {
            contentTextPrimary: {
               fontSize: "4rem"
            }, 
            contentTextSecondary: {
               fontSize: "1.5rem"
            }, 
            reviewPrimaryText: {
               fontSize: "2.3rem", 
               fontWeight: 600
            }, 
            reviewSecondaryText: {
               fontSize: "1rem"
            }
         }
      }, 
      global: {
         boldText: {
            fontWeight: "700"
         }, 
         mobile: {
            pageHeading: {
               fontSize: "2.5rem"
            }, 
            sectionHeading: {
               fontSize: "2rem"
            }
         }, 
         desktop: {
            pageHeading: {
               fontSize: "3.5rem"
            }, 
            sectionHeading: {
               fontSize: "2.5rem"
            }
         }
      }
   }
})

export default theme