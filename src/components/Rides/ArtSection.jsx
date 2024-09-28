import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomText from "../../customs/components/CustomText"
import { SectionBox } from "../../styles/style"
import Box from "@mui/material/Box"

const ArtSection = () => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 

   return (
      <SectionBox component="section">
         <Box sx={{
            alignSelf: "flex-start"
         }}>
            <CustomText 
               text="Arts"
               variant="h2"
               typography={isSmallScreen ? theme.typography.global.mobile.sectionHeading : theme.typography.global.desktop.sectionHeading}
            />
         </Box>
      </SectionBox>
   )
}

export default ArtSection