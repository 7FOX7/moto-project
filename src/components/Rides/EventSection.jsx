import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomCarousel from "../../customs/components/CustomCarousel"
import CustomText from "../../customs/components/CustomText"
import { SectionBox } from "../../styles/style"
import Box from "@mui/material/Box"
import events from "../../data/events"

const EventSection = () => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 
   return (
      <SectionBox component="section">
         <Box sx={{
            alignSelf: "flex-start"
         }}>
            <CustomText 
               text="Events"
               variant="h2"
               typography={isSmallScreen ? theme.typography.global.mobile.sectionHeading : theme.typography.global.desktop.sectionHeading}
            />
         </Box>
         <CustomCarousel
            data={events}
            type="event"
         />
      </SectionBox>
   )
}

export default EventSection