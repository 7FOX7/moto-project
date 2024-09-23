import { useRef } from "react"
import { useCallback } from "react"
import { useGSAP } from "@gsap/react"
import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import gsap from "gsap"
import CustomVideo from "../../../customs/components/CustomVideo"
import CustomText from "../../../customs/components/CustomText"
import SplitType from "split-type"
import { ContentTextBox } from "../../../styles/style"
import { ContentBox } from "../../../styles/style"
import { VideoChunkContainer } from "../../../styles/style"
import { VideoChunk } from "../../../styles/style"
import { VideoChunkText } from "../../../styles/style"
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
            scale: isSmallScreen ? 1.33 : 1.7,
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
         .fromTo('.videoChunkContainer1', 
         {
            y: 1000, 
         },
         {
            visibility: "visible",
            y: 160,
            onStart: () => spinningVideoChunk.play()   
         })
         .to('.videoChunk1', {
            onStart: () => spinningVideoChunk.pause(), 
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
            onStart: () => textRevealing.play() 
         }, "+=0.5")
      return tl
   }, [])

   return (
      <ContentBox ref={contentBoxRef}>
         {homepageVideoChunks.slice(0, 2).map((video, index) => {
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
                        width={isSmallScreen ? "240" : "360"}
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
         )})}
         <ContentTextBox 
            className="contentTextBox"
            sx={{
               scrollMarginTop: isSmallScreen ? 0 : "120px"
            }}
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
      </ContentBox>
   )
}  

export default Content

/*
   1. Idea: 

   now, once we have two video chunks animated, we want to add an animation, so
   the user is scrolled to a certain point, and, once he is there, we want to make the stagger animation, 
   where three videos will appear

   2. Problem: 

   we need to create a trigger, by entering on which, the animation will be played. - Or, we can just start the 
   animation without using scroll trigger at all

   after we have written a short code on CodeSandbox (where we were using gsap.utils.toArray()), we were able to figure out how to select specific group of components, and then animate them. 

   now, our task: once we have a collection of boxes we want to animate, we need to first show them (set visibility to visible): 

   const videoChunks = gsap.utils.toArray('.video1', 'video2', 'video3')

   tl.
      to('videoChunks', {
         visibility: "visible", 
         stagger: 1
      })
*/