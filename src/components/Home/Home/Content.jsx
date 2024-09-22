import { useCallback } from "react"
import { useGSAP } from "@gsap/react"
import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import gsap from "gsap"
import CustomVideo from "../../../customs/components/CustomVideo"
import CustomText from "../../../customs/components/CustomText"
import SplitType from "split-type"
import { VideoChunkContainer } from "../../../styles/style"
import { VideoChunk } from "../../../styles/style"
import { VideoChunkText } from "../../../styles/style"
import homepageVideoChunks from "../../../data/homepageVideoChunks"

const Content = () => {
   const isSmallScreen = useScreenSize(); 
   useGSAP(() => {
      gsap.set('.videoChunkContainer', {
         opacity: 0,   
      })
      gsap.set('.videoChunk', {
         transformOrigin: "center"
      })
      const master = gsap.timeline()
      master
         .add(part1())
         .add(part2(), ">")

   }, {dependencies: []})

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
            opacity: 1, 
            y: 120, 
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

      return tl
   }, [])

   const part2 = useCallback(() => {
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
               duration: 0.15
            })
            .pause()

      tl 
         .fromTo('.videoChunkContainer1', 
         {
            y: 1000, 
         },
         {
            opacity: 1, 
            y: 160,
            onStart: () => spinningVideoChunk.play()   
         })
         .to('.videoChunk1', {
            onStart: () => spinningVideoChunk.pause(), 
         }, "+=1.2")
         .to('.videoChunk1', {
            rotate: 15
         }, ">")
         .to(chars, {
            opacity: 1, 
            stagger: 0.1,
         }, "+=1")

      return tl 
   }, [])

   return (
         homepageVideoChunks.map((video, index) => {
            const isLeftText = index % 2 === 0
            return (
               <VideoChunkContainer 
                  key={video.id} 
                  className={`videoChunkContainer videoChunkContainer` + index}
                  sx={{
                     flexDirection: isSmallScreen ? "column" : "row", 
                     justifyContent: isSmallScreen ? "normal" : "space-around" 
                  }}
               >
                  {(!isLeftText && !isSmallScreen) &&  
                     <VideoChunkText className={`videoChunkText videoChunkText` + index}>
                        <CustomText 
                           text={video.addText}
                        />
                     </VideoChunkText>
                  }
                  <VideoChunk 
                     className={`videoChunk videoChunk` + index}
                     variant="elevation"   
                     elevation={10}
                  >
                     <CustomVideo 
                        width={isSmallScreen ? "260" : "360"}
                        src={video.src}
                     />
                  </VideoChunk>
                  {(isLeftText || isSmallScreen) && 
                     <VideoChunkText className={`videoChunkText videoChunkText` + index}>
                        <CustomText 
                           text={video.addText}
                        />
                     </VideoChunkText>
                  }
               </VideoChunkContainer>
         )})
   )
}  

export default Content

/*
   if you want them appear in zigzag order (text1 appears from the left, text2 appears from the right, text3 appears
   from the left etc.)

   then, you can easily achieve this by using modules and the power of flexbox container
*/