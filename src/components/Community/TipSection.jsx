import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomText from "../../customs/components/CustomText"
import { SectionBox } from "../../styles/style"

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
      </SectionBox>
   ) 
}

export default TipSection