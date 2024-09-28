import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomText from "../../customs/components/CustomText"
import Box from "@mui/material/Box"

const ArtSection = () => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 

   return (
      <Box component="section">
         <CustomText 
            text="Arts"
            variant="h2"
            typography={isSmallScreen ? theme.typography.global.mobile.sectionHeading : theme.typography.global.desktop.sectionHeading}
         />
      </Box>
   )
}

export default ArtSection