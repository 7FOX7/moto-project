import { useRef } from "react"
import { useCallback } from "react"
import { useGSAP } from "@gsap/react"
import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import gsap from "gsap"
import CustomVideo from "../../../customs/components/CustomVideo"
import CustomText from "../../../customs/components/CustomText"
import SplitType from "split-type"
import { ContentTextBox } from "../../../styles/style"
import { ContentRotatedVideos } from "../../../styles/style"
import { ContentBox } from "../../../styles/style"
import { VideoContainer } from "../../../styles/style"
import { VideoPaper } from "../../../styles/style"
import { VideoTextBox } from "../../../styles/style"
import homepageVideoChunks from "../../../data/homepageVideoChunks"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Box from "@mui/material/Box"

gsap.registerPlugin(ScrollTrigger)

const Content = () => {
   const contentBoxRef = useRef(null);
   const isSmallScreen = useScreenSize(); 
   useGSAP(() => {
      gsap.set('.videoChunkContainer', {
         visibility: "hidden"
      })
      gsap.set('.videoChunk', {
         transformOrigin: "center"
      })
      ScrollTrigger.create({
         trigger: "", 
      })
      const master = gsap.timeline()
      master
         .add(part1())
         .add(part2(), ">")
         .add(part3(), ">")
         .add(part4(), ">")

   }, {dependencies: [], scope: contentBoxRef.current})

   const part1 = useCallback(() => {
      const videoChunkText = new SplitType('.videoChunkText0', {types: "chars"})
      const chars = videoChunkText.chars

      gsap.set(chars, {
         opacity: 0
      })
      const tl = gsap.timeline()
      tl
         .fromTo('.videoChunkContainer0',
         {
            y: 1000
         }, 

         { 
            visibility: "visible", 
            y: 120, 
            duration: 1.2, 
            ease: "power3.in", 
         })
         .to('.videoChunk0', {
            scale: isSmallScreen ? 1.33 : 1.6,
            duration: 1, 
            ease: "power2.inOut"
         }, "+=0.3")
         .to('.videoChunk0', {
            rotate: -10, 
            scale: 1, 
            duration: 0.3, 
            ease: "power2.in"
         })
         .to(chars, {
            opacity: 1, 
            stagger: 0.1, 
         }, "+=1")

      return tl
   }, [])

   const part2 = useCallback(() => {
      const videoChunkContainer = gsap.utils.toArray(['.videoChunkContainer1'])[0]
      const contentTextBox = gsap.utils.toArray(['.contentTextBox'])[0]
      const videoChunkText = new SplitType('.videoChunkText1', {types: "chars"})
      const chars = videoChunkText.chars

      gsap.set(chars, {
         opacity: 0, 
      })
      const tl = gsap.timeline()
      const spinningVideoChunk = gsap.timeline()
      spinningVideoChunk
         .to('.videoChunk1',    
            {
               rotate: 360, 
               repeat: -1,  
               ease: "sine", 
               duration: 0.18
            })
            .pause()

      tl 
         .fromTo(videoChunkContainer, 
         {
            y: 1000, 
         },
         {
            visibility: "visible",
            y: 160,
            onStart: () => spinningVideoChunk.play()
         })
         .to('.videoChunk1', {
            onStart: () => {
               spinningVideoChunk.pause()
               videoChunkContainer.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
            } 
         }, "+=0.7")
         .to('.videoChunk1', {
            rotate: 15
         }, ">")
         .to(chars, {
            opacity: 1, 
            stagger: 0.1,
         }, "+=1")
         .to(window, {
            onStart: () => contentTextBox.scrollIntoView({behavior: "smooth"})
         }, "+=0.5")

      return tl 
   }, [])

   const part3 = useCallback(() => {
      const rotatedVideoContainer0 = gsap.utils.toArray(['.rotatedVideoContainer0'])[0]
      const contentTextPrimary = gsap.utils.toArray(['.contentTextPrimary'])[0]
      const contentTextSecondary = new SplitType('.contentTextSecondary', {types: "chars"})
      const chars = contentTextSecondary.chars

      gsap.set(contentTextPrimary, {
         opacity: 0, 
         scale: 0.1, 
      })
      gsap.set(chars, {
         opacity: 0, 
      })
      const textRevealing = gsap.timeline({defaults: {duration: 1}})
      textRevealing
         .to(contentTextPrimary, {
            opacity: 1, 
            scale: 1, 
         })
         .to(chars, {
            opacity: 1, 
            stagger: 0.1
         }, "+=1")
         .pause()
      const tl = gsap.timeline()
      tl
         .to(contentTextPrimary, {
            onStart: () => textRevealing.play(), 
         }, "+=0.5")
         .to(window, {
            onStart: () => rotatedVideoContainer0.scrollIntoView({behavior: "smooth"})
         }, "+=5")
      return tl
   }, [])

   const part4 = useCallback(()  => {
      const rotatedVideoTexts = gsap.utils.toArray([".rotatedVideoText0", ".rotatedVideoText1", ".rotatedVideoText2"])
      const videoContainers = gsap.utils.toArray(['.rotatedVideoContainer'])
      gsap.set(videoContainers, {
         opacity: 0, 
         rotateY: "90deg",
         transformOrigin: "left"
      })
      const tl = gsap.timeline()

      tl.add(animation())
      
      function animation() {
         const tl = gsap.timeline()
         videoContainers.map((videoContainer, index, arr) => {
            const rotatedVideoText = new SplitType(rotatedVideoTexts[index], {types: "words"})
            const words = rotatedVideoText.words
            gsap.set(words, {
               opacity: 0,
               y: 30
            })
            tl
               .to(videoContainer, {
                  opacity: 1, 
                  rotateY: "0deg", 
                  duration: 1, 
               })
               .to(words, {
                  opacity: 1, 
                  y: 0, 
                  stagger: 0.2,  
                  onComplete: () => {
                     index !== arr.length -1 && videoContainer.scrollIntoView({behavior: "smooth"}) 
                  }
               }, "+=1")
         })
         return tl
      }
      return tl
   }, [])

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