import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomText from "../../customs/components/CustomText"
import { SectionBox } from "../../styles/style"
import HotSubSection from "./HotSubSection"
import NewSubSection from "./NewSubSection"
import BestSubSection from "./BestSubSection"
import Grid2 from "@mui/material/Grid2"

// TODO: add selectionBox/categories to the TopicSection

const TopicSection = () => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 
   return (
      <SectionBox component="section">
         <CustomText 
            text="Topics"
            variant="h2"
            typography={isSmallScreen ? theme.typography.global.mobile.sectionHeading : theme.typography.global.desktop.sectionHeading}
         />
         <Grid2
            component="section"
            container
            columns={12}
            columnSpacing={4}
            size={12}
         >
            <HotSubSection />
            <NewSubSection />
            <BestSubSection />
         </Grid2>
      </SectionBox>
   ) 
}

export default TopicSection

