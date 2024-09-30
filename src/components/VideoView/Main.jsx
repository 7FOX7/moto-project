import { useParams } from "react-router-dom"
import { useScreenSize } from "../../contexts/ScreenSizeContext";
import Content from "../Shared/Content"
import { EmbeddedVideoContainer } from "../../styles/style";
import videoThumbnails from "../../data/videoThumbnails";

const contentHeight = "100vh"

const Main = () => {
   const {id} = useParams();
   const isSmallScreen = useScreenSize() 
   const video = videoThumbnails.find((video) => video.id === id)
   
   return (
      <Content
         height={contentHeight}
      >
         <EmbeddedVideoContainer>
            <iframe
               width={isSmallScreen ? "320px" : "800px"}
               height={isSmallScreen ? "220px" : "400px"}
               src={video.embeddedUrl}
               title={video.title}
               referrerPolicy="strict-origin-when-cross-origin"
            />
         </EmbeddedVideoContainer>
      </Content>
   )   
}

export default Main