import { useRef } from "react"
import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import useHomePageAnimation from "../../../customs/hooks/useHomePageAnimation"
import CustomVideo from "../../../customs/components/CustomVideo"
import CustomText from "../../../customs/components/CustomText"
import { ContentTextBox } from "../../../styles/style"
import { ContentRotatedVideos } from "../../../styles/style"
import { ContentBox } from "../../../styles/style"
import { VideoContainer } from "../../../styles/style"
import { VideoPaper } from "../../../styles/style"
import { VideoTextBox } from "../../../styles/style"
import homepageVideoChunks from "../../../data/homepageVideoChunks"
import Box from "@mui/material/Box"

const Content = () => {
   const contentBoxRef = useRef(null);
   const isSmallScreen = useScreenSize(); 

   useHomePageAnimation({contentBoxRef, isSmallScreen})
   return (
      <ContentBox ref={contentBoxRef}>
         {homepageVideoChunks.slice(0, 2).map((video, index) => {
            const isLeftText = index % 2 === 0
            return (
               <VideoContainer
                  key={video.id} 
                  className={`videoChunkContainer videoChunkContainer` + index}
                  sx={{
                     width: "100%", 
                     flexDirection: isSmallScreen ? "column" : "row", 
                     justifyContent: isSmallScreen ? "normal" : "space-around" 
                  }}
               >
                  {(!isLeftText && !isSmallScreen) &&  
                     <VideoTextBox 
                        className={`videoChunkText` + index}
                        sx={{margin: "15px"}}
                     >
                        <CustomText 
                           text={video.addText}
                        />
                     </VideoTextBox>
                  }
                  <VideoPaper 
                     className={`videoChunk videoChunk` + index}
                     variant="elevation"   
                     elevation={10}
                     sx={{margin: "30px"}}
                  >
                     <CustomVideo 
                        width={isSmallScreen ? "240" : "360"}
                        src={video.src}
                     />
                  </VideoPaper>
                  {(isLeftText || isSmallScreen) && 
                     <VideoTextBox 
                        className={`videoChunkText` + index}
                        sx={{margin: "15px"}}
                     >
                        <CustomText 
                           text={video.addText}
                        />
                     </VideoTextBox>
                  }
               </VideoContainer>
         )})}
         <ContentTextBox 
            className="contentTextBox"
         >
            <Box 
               className="contentTextPrimary"
            >
               <CustomText 
                  text="Why work with us?"
                  fontSize={isSmallScreen ? "2.5rem" : "4rem"}
               />
            </Box>
            <Box
               className="contentTextSecondary"
            >
               <CustomText 
                  text="Let us present to you"
                  fontSize={isSmallScreen ? "1.1rem" : "1.5rem"}
               />
            </Box>
         </ContentTextBox>
         <ContentRotatedVideos className="contentRotatedVideos">
            {homepageVideoChunks.slice(2, 5).map((video, index) => {
               const alignment = ["start", "center", "end"]
               return (
                  <VideoContainer
                     key={video.id}
                     className={`rotatedVideoContainer rotatedVideoContainer` + index}
                     sx={{
                        width: isSmallScreen ? "100%" : "50%", 
                        flexDirection: "column", 
                        alignSelf: !isSmallScreen && alignment[index] 
                     }}
                  >
                     <VideoPaper 
                        className={`rotatedVideo rotatedVideo` + index}
                        variant="elevation"   
                        elevation={10}
                        sx={{margin: "20px"}}
                     >
                        <CustomVideo 
                           width={isSmallScreen ? "240" : "360"}
                           src={video.src}
                        />
                     </VideoPaper>
                     <VideoTextBox 
                        className={`rotatedVideoText` + index}
                        sx={{margin: "5px"}}   
                     >
                        <CustomText 
                           text={video.addText}
                        />
                     </VideoTextBox>
                  </VideoContainer>
               )
            })}
         </ContentRotatedVideos>
      </ContentBox>
   )
}  

export default Content