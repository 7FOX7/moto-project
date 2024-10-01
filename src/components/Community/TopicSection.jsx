import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomText from "../../customs/components/CustomText"
import CustomSubSection from "../../customs/components/CustomSubSection"
import { SectionBox } from "../../styles/style"
import topicSubSectionContents from "../../data/topicSubSectionContents"

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
         {
            topicSubSectionContents.map((topicSubSectionContent, index) => {
               return (
                  <CustomSubSection
                     key={topicSubSectionContent.id}
                     title={topicSubSectionContent.title}
                     content={topicSubSectionContent.content}
                     showCarousel={index === 0 && true}
                  />
               )
            })
         }
      </SectionBox>
   ) 
}

export default TopicSection