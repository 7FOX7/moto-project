import CustomHeading from "../../customs/components/CustomHeading"
import Content from "../Shared/Content"
import SuccessStoriesSection from "./SuccessStories/SuccessStoriesSection"

const Main = () => {
   return (
      <Content>
         <CustomHeading
            text="Blogs"
         /> 
         <SuccessStoriesSection />
      </Content>
   )
}

export default Main