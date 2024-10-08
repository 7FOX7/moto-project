import { useNavigate } from "react-router-dom"
import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import CustomImage from "../../../customs/components/CustomImage"
import CustomCarousel from "../../../customs/components/CustomCarousel"
import { ScrollableContainer } from "../../../styles/style"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import videoThumbnails from "../../../data/videoThumbnails"

const VideoContent = () => {
   const navigate = useNavigate(); 
   const isSmallScreen = useScreenSize(); 

   return (
      isSmallScreen ? 
         <CustomCarousel
            data={videoThumbnails}
            type="video"
         />
         : 
         <ScrollableContainer>
            <ImageList 
               cols={2}
               gap={5}
            >
               {videoThumbnails.map((thumbnail) => {
                  return (
                     <ImageListItem
                        onClick={() => navigate(`/video-view/${thumbnail.id}`, {relative: "route"})}
                        sx={{
                           cursor: "pointer"
                        }}
                     >
                        <CustomImage
                           width="100%"
                           height="100%"
                           src={thumbnail.imgSrc}
                           alt={thumbnail.imgAlt}
                        />
                        <ImageListItemBar
                           subtitle={thumbnail.description}
                        />
                     </ImageListItem>
                  )
               })}
            </ImageList>
         </ScrollableContainer>      
   )
}

export default VideoContent