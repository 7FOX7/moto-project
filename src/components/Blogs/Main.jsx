import CustomHeading from "../../customs/components/CustomHeading"
import Content from "../Shared/Content"
import SuccessStoriesSection from "./SuccessStories/SuccessStoriesSection"
import CallToActionSection from "./SuccessStories/CallToActionSection"

const Main = () => {
   return (
      <Content>
         <CustomHeading
            text="Blogs"
         /> 
         <SuccessStoriesSection />
         <br />
         <br />
         <CallToActionSection />
      </Content>
   )
}

export default Main