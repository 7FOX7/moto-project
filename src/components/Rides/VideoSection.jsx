import { useNavigate } from "react-router-dom"
import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomText from "../../customs/components/CustomText"
import CustomImage from "../../customs/components/CustomImage"
import CustomCarousel from "../../customs/components/CustomCarousel"
import { SectionBox } from "../../styles/style"
import { ScrollableContainer } from "../../styles/style"
import Box from "@mui/material/Box"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import videoThumbnails from "../../data/videoThumbnails"

const VideoSection = () => {
   const navigate = useNavigate(); 
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme();

   return (
      <SectionBox component="section">
         <CustomText 
            text="Videos"
            variant="h2"
            typography={isSmallScreen ? theme.typography.global.mobile.sectionHeading : theme.typography.global.desktop.sectionHeading}
         />
         {isSmallScreen ? 
            <CustomCarousel
               data={videoThumbnails}
               type="video"
            />
            : 
            <ScrollableContainer>
               <ImageList 
                  cols={2}
                  gap={5}
                  sx={{padding: "10px"}}
               >
                  {videoThumbnails.map((thumbnail) => {
                     return (
                        <ImageListItem
                           key={thumbnail.id}
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
         }
      </SectionBox>
   )
}

export default VideoSection