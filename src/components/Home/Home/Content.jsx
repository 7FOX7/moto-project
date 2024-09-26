import { useRef } from "react"
import { useTheme } from "@emotion/react"
import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import useHomePageAnimation from "../../../customs/hooks/useHomePageAnimation"
import CustomVideo from "../../../customs/components/CustomVideo"
import CustomText from "../../../customs/components/CustomText"
import CustomCarousel from "../../../customs/components/CustomCarousel"
import CustomImage from "../../../customs/components/CustomImage"
import { ContentBox } from "../../../styles/style"
import { ContentTextBox } from "../../../styles/style"
import { ContentRotatedVideos } from "../../../styles/style"
import { ContentReviewCarousel } from "../../../styles/style"
import { ContentRevealComponent } from "../../../styles/style"
import { ReviewTextBox } from "../../../styles/style"
import { ReviewCarouselBox } from "../../../styles/style"
import { RevealingComponent } from "../../../styles/style"
import { VideoContainer } from "../../../styles/style"
import { StyledPaper } from "../../../styles/style"
import { VideoTextBox } from "../../../styles/style"
import homepageVideoChunks from "../../../data/homepageVideoChunks"
import homepageReviews from "../../../data/homepageReviews"
import Box from "@mui/material/Box"

const Content = () => {
   const contentBoxRef = useRef(null);
   const theme = useTheme(); 
   const isSmallScreen = useScreenSize(); 
   useHomePageAnimation(contentBoxRef, isSmallScreen)
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
                  <StyledPaper 
                     className={`videoChunk videoChunk` + index}
                     variant="elevation"   
                     elevation={10}
                     sx={{margin: "30px"}}
                  >
                     <CustomVideo 
                        width={isSmallScreen ? "240" : "360"}
                        src={video.src}
                     />
                  </StyledPaper>
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
                  typography={isSmallScreen ? 
                     theme.typography.home.mobile.contentTextPrimary 
                     : 
                     theme.typography.home.desktop.contentTextPrimary
                  }
               />
            </Box>
            <Box
               className="contentTextSecondary"
            >
               <CustomText 
                  text="Let us present to you"
                  typography={isSmallScreen ? 
                     theme.typography.home.mobile.contentTextSecondary 
                     : 
                     theme.typography.home.desktop.contentTextSecondary
                  }
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
                     <StyledPaper 
                        className={`rotatedVideo rotatedVideo` + index}
                        variant="elevation"   
                        elevation={10}
                        sx={{margin: "20px"}}
                     >
                        <CustomVideo 
                           width={isSmallScreen ? "240" : "360"}
                           src={video.src}
                        />
                     </StyledPaper>
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
         <ContentReviewCarousel 
            className="contentReviewCarousel"
            sx={{
               flexDirection: isSmallScreen ? "column" : "row",
               justifyContent: !isSmallScreen && "space-between"
            }}
         >
            <ReviewTextBox  
               sx={{
                  width: isSmallScreen ? "100%" : "35%",
               }}
            >
               <CustomText 
                  text="Trusted By Millions of People"
                  typography={isSmallScreen ? 
                     theme.typography.home.mobile.reviewPrimaryText 
                     : 
                     theme.typography.home.desktop.reviewPrimaryText
                  }
               />
               <br />
               <CustomText 
                  text="Don't take our word for it - See what others had to say about us"
                  typography={isSmallScreen ? 
                     theme.typography.home.mobile.reviewSecondaryText 
                     : 
                     theme.typography.home.desktop.reviewSecondaryText
                  }
               />
            </ReviewTextBox>
            <ReviewCarouselBox 
               sx={{
                  width: isSmallScreen ? "100%" : "60%"
               }}
            >
               <CustomCarousel 
                  data={homepageReviews}
                  type="review"
               />
            </ReviewCarouselBox>
         </ContentReviewCarousel>
         <ContentRevealComponent className="contentRevealComponent">
            <RevealingComponent className="revealingComponent">
               <CustomImage 
                  src="/images/motorcycle-cartoon.webp"
                  alt="Motorcycle cartoon"
                  width={isSmallScreen ? "350px" : "500px"}
                  height={isSmallScreen ? "350px" : "500px"}
               />
            </RevealingComponent>
         </ContentRevealComponent>
      </ContentBox>
   )
}  

export default Content


