import { useScreenSize } from "../../contexts/ScreenSizeContext";
import { useTheme } from "@emotion/react"
import CustomText from "./CustomText";
import Box from "@mui/material/Box"

const CustomHeading = ({text}) => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 
   
   return (
      <Box
         sx={{
            marginTop: "60px",
            marginBottom: "30px", 
            marginRight: "100%" 
         }}
      >
         <CustomText 
            text={text}
            variant="h1"
            typography={isSmallScreen ? theme.typography.global.mobile.pageHeading : theme.typography.global.desktop.pageHeading}
         />
      </Box>
   )
}

export default CustomHeading