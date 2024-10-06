import CustomHeading from "../../customs/components/CustomHeading"
import Content from "../Shared/Content"
import ProfileSection from "./ProfileSection"
import TipSection from "./TipSection"
import TopicSection from "./TopicSection"
import Grid2 from "@mui/material/Grid2"

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