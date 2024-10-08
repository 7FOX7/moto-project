import CustomSection from "../../../customs/components/CustomSection"
import TopicContent from "./TopicContent";

const TopicSection = () => { 
   return (
      <CustomSection
         headingText="Topics"
         content={<TopicContent />}
      />
   ) 
}

export default TopicSection