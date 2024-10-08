import CustomHeading from "../../customs/components/CustomHeading"
import Content from "../Shared/Content"
import ProfileSection from "./Profiles/ProfileSection"
import TipSection from "./Tips/TipSection"
import TopicSection from "./Topics/TopicSection"

const Main = () => {
   return (
      <Content>
         <CustomHeading
            text="Community"
         /> 
            <TopicSection />
            <ProfileSection />
            <TipSection />  
      </Content>
   )
}

export default Main 