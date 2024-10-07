import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomText from "../../customs/components/CustomText"
import CustomCarousel from "../../customs/components/CustomCarousel"
import { SectionBox } from "../../styles/style"
import tips from "../../data/tips"

const TipSection = () => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 
   return (
      <SectionBox component="section">
         <CustomText 
            text="Tips"
            variant="h2"
            typography={isSmallScreen ? theme.typography.global.mobile.sectionHeading : theme.typography.global.desktop.sectionHeading}
         />
         <CustomText 
            text="See what folks find useful"
            variant="h3"
            typography={isSmallScreen ? theme.typography.global.mobile.sectionHeadingSmaller : theme.typography.global.desktop.sectionHeadingSmaller}
         />
         <br />
         <CustomCarousel
            data={tips}
            type="tip"
         />
      </SectionBox>
   ) 
}

export default TipSection