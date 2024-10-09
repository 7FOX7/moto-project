import { createTheme } from "@mui/material";

const theme = createTheme({
   components: {
      MuiDrawer: {
         styleOverrides: {
            paper: {
               background: "linear-gradient(90deg, rgba(33,33,33,1) 0%, rgba(47,47,47,1) 89%)"
            }
         }
      },
      MuiInputBase: {
         styleOverrides: {
            root: {
               borderRadius: "10px !important", 
            }, 
            input: {
               padding: "8px !important"
            }
         }
      }, 
      MuiTextField: {
         styleOverrides: {
            root: {
               borderRadius: "10px", 
            }
         }
      }
   }, 
   palette: {
      primary: {
         main: "rgb(255, 255, 255)",  
      }, 
      secondary: {
         main: "#00ffa7", 
         dark: "#00dc90"
      }, 
      global: {
         borderLinearProgress: {
            main: "linear-gradient(90deg, rgba(0,0,73,1) 0%, rgba(0,137,255,1) 100%)"
         }, 
         secondaryTextContent: {
            main: "rgba(200, 200, 200, 0.5)"
         }
      }, 
      community: {
         publisher: {
            main: "rgb(99, 99, 99)"
         }
      }
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
         }, 
         sectionContentTitle: {
            fontSize: "1.5rem", 
            fontWeight: 600
         }, 
         linkText: {
            fontSize: "1.2rem", 
            fontWeight: 600
         },
         mobile: {
            pageHeading: {
               fontSize: "2.5rem"
            }, 
            sectionHeading: {
               fontSize: "2rem"
            }, 
            sectionHeadingSmaller: {
               fontSize: "1.4rem"
            }, 
         }, 
         desktop: {
            pageHeading: {
               fontSize: "3.5rem"
            }, 
            sectionHeading: {
               fontSize: "2.5rem"
            }, 
            sectionHeadingSmaller: {
               fontSize: "1.9rem"
            }, 
         }
      }, 
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
      rides: {
         eventTitle: {
            fontSize: "1.15rem", 
            fontWeight: "700"
         }, 
         selectedEvent: {
            fontSize: "1.1rem",
            fontWeight: "700"
         }
      }, 
      community: {
         mobile: {
            subSectionHeading: {
               fontSize: "2.5rem", 
               fontWeight: 600
            }, 
            subSectionContent: {
               fontSize: "1.2rem", 
               fontWeight: 500
            }, 
            subSectionTitle: {
               fontSize: "1.3rem", 
               fontWeight: 600
            }, 
            subSectionCategory: {
               fontSize: "1.2rem", 
               fontWeight: 600
            }
         }, 
         desktop: {
            subSectionHeading: {
               fontSize: "2.5rem", 
               fontWeight: 600
            }, 
            subSectionContent: {
               fontSize: "1.2rem", 
               fontWeight: 500
            }, 
            subSectionTitle: {
               fontSize: "1.3rem", 
               fontWeight: 600
            }, 
            subSectionCategory: {
               fontSize: "1.4rem", 
               fontWeight: 600
            }
         }
      }, 
      blogs: {
         callToAction: {
            standard: {
               fontSize: "1.5rem", 
               fontWeight: 500
            }, 
            bigger: {
               fontSize: "3.3rem", 
               fontWeight: 600
            }
         }
      }
   }
})

export default theme