import { useTheme } from "@emotion/react"
import { SemiTransparentBox } from "../../styles/style"
import CustomText from "./CustomText"
import Grid2 from "@mui/material/Grid2"

const CustomContentContainer = ({showMargin, showTransBox, height, content, typography}) => {
   const theme = useTheme(); 
   return (
      <>
         <Grid2
            container
            columns={12}
            size={12}
            justifyContent="center"
            sx={{
               position: "relative", 
               height: height ? height : "100%"
            }}
         >
            {showTransBox && 
               <SemiTransparentBox
                  sx={{
                     background: theme.palette.secondary.main
                  }}
               />
            }
            <Grid2
               container
               size={12}
               sx={{
                  margin: showMargin && "20px", 
                  padding: "20px", 
                  background: theme.palette.common.black
               }}
            >
               {typeof(content) === "string" ?
                  <CustomText 
                     text={content}
                     typography={typography}
                     textAlign="left"
                  />
                  : 
                  content
               }
            </Grid2>
         </Grid2>
      </>
   )
}

export default CustomContentContainer