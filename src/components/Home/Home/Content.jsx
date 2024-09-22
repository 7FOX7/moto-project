import { useCallback } from "react"
import { useGSAP } from "@gsap/react"
import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import gsap from "gsap"
import CustomText from "../../../customs/components/CustomText"
import SplitType from "split-type"
import { VideoChunkContainer } from "../../../styles/style"
import { VideoChunk } from "../../../styles/style"
import { VideoChunkText } from "../../../styles/style"
import homepageVideoChunks from "../../../data/homepageVideoChunks"

const borderRadius = "15px"

const Content = () => {
   const isSmallScreen = useScreenSize(); 
   useGSAP(() => {
      gsap.set('.videoChunkContainer', {
         opacity: 0,  
         y: 1000, 
         xPercent: isSmallScreen ? 0 : 9
      })
      gsap.set('.videoChunk', {
         transformOrigin: "center"
      })
      const master = gsap.timeline()
      master
         .add(part1())

   }, {dependencies: []})

   const part1 = useCallback(() => {
      const videoChunkText = new SplitType('.videoChunkText0', {types: "chars"})
      const chars = videoChunkText.chars
      gsap.set(chars, {
         opacity: 0
      })
      const tl = gsap.timeline()
      tl
         .to('.videoChunkContainer0', { 
            opacity: 1, 
            y: 150, 
            duration: 1.2, 
            ease: "power3.in", 
         })
         .to('.videoChunk0', {
            scale: isSmallScreen ? 1.4 : 1.7,
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
   }, [])

   return (
         homepageVideoChunks.map((video, index) => {
            return (
               <VideoChunkContainer 
                  key={video.id} 
                  className={`videoChunkContainer videoChunkContainer` + index}
                  sx={{
                     flexDirection: isSmallScreen ? "column" : "row"
                  }}
               >
                  <VideoChunk 
                     className={`videoChunk videoChunk` + index}
                     variant="elevation"   
                     elevation={10}
                  >
                     <video 
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        width={isSmallScreen ? "260" : "360"}
                        style={{
                           borderRadius: borderRadius 
                        }}
                     >
                        <source 
                           src={video.src} 
                           type="video/webm" 
                        />
                        <source 
                           src={video.src} 
                           type="video/mp4" 
                        />
                     </video>
                  </VideoChunk>
                  <VideoChunkText className={`videoChunkText videoChunkText` + index}>
                     <CustomText 
                        text={video.addText}
                     />
                  </VideoChunkText>
               </VideoChunkContainer>
         )})
   )
}  

export default Content

/*
   lets say I have 12 components which I want to animate with the GSAP. 

   As you know, in react app, it is usually a good practice to refer to the element with the '
*/