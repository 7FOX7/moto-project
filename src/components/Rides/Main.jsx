import Content from "../Shared/Content"
import VideoSection from "./VideoSection"
import EventSection from "./EventSection"
import ArtSection from "./ArtSection"
import Heading from "./Heading"

const contentHeight = "300vh"
const Main = () => {
   return (
      <Content 
         height={contentHeight}
      >
         <Heading />         
         <VideoSection />
         <EventSection />
         <ArtSection />
      </Content>
   )
}

export default Main