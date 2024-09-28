import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import Box from "@mui/material/Box"
import CustomText from "../../customs/components/CustomText"

const Heading = () => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 
   
   return (
      <Box
         sx={{
            marginTop: "60px", 
            alignSelf: "flex-start"
         }}
      >
         <CustomText 
            text="Rides"
            variant="h1"
            typography={isSmallScreen ? theme.typography.global.mobile.pageHeading : theme.typography.global.desktop.pageHeading}
         />
      </Box>
   )
}

export default Heading