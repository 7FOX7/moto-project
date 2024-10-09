import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import { SectionBox } from "../../styles/style"
import CustomText from "./CustomText"

const CustomSection = ({headingText, subHeadingText, content}) => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 
   return (
      <>
         <SectionBox
            component="section"
         >
            <CustomText 
               color={theme.palette.secondary.main}
               text={headingText}
               variant="h2"
               typography={isSmallScreen ? theme.typography.global.mobile.sectionHeading : theme.typography.global.desktop.sectionHeading}
               textAlign="left"
            />
            {subHeadingText && 
               <CustomText 
                  text={subHeadingText}
                  variant="h3"
                  typography={isSmallScreen ? theme.typography.global.mobile.sectionHeadingSmaller : theme.typography.global.desktop.sectionHeadingSmaller}
                  textAlign="left"
               />
            }  
            <br />
            <br />
            {content}
         </SectionBox>
      </>
   )
}

export default CustomSection