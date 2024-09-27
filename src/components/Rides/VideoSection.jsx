import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomText from "../../customs/components/CustomText"
import CustomCarousel from "../../customs/components/CustomCarousel"
import Box from "@mui/material/Box"

const VideoSection = () => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 

   return (
      <Box 
         component="section" 
         sx={{
            width: "100%",
            display: "flex", 
            flexDirection: "column"
         }}
      >
         <CustomText 
            text="Videos"
            variant="h2"
            typography={isSmallScreen ? theme.typography.global.mobile.sectionHeading : theme.typography.global.desktop.sectionHeading}
         />
         {/* <CustomCarousel
            data={workoutVideos}
            type="video"
         /> */}
      </Box>
   )
}

export default VideoSection