import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomText from "../../customs/components/CustomText"
import CustomCarousel from "../../customs/components/CustomCarousel"
import { SectionBox } from "../../styles/style"
import Box from "@mui/material/Box"
import videoThumbnails from "../../data/videoThumbnails"

const VideoSection = () => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 

   return (
      <SectionBox component="section">
         <Box sx={{
            alignSelf: "flex-start"
         }}>
            <CustomText 
               text="Videos"
               variant="h2"
               typography={isSmallScreen ? theme.typography.global.mobile.sectionHeading : theme.typography.global.desktop.sectionHeading}
            />
         </Box>
         <CustomCarousel
            data={videoThumbnails}
            type="video"
         />
      </SectionBox>
   )
}

export default VideoSection