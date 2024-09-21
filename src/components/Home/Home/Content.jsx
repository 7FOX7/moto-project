import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { VideoChunkContainer } from "../../../styles/style"
import { VideoChunk } from "../../../styles/style"
import homepageVideoChunks from "../../../data/homepageVideoChunks"

const Content = () => {
   const videoChunkContainerRef = useRef(null)
   useGSAP(() => {
      const tl = gsap.timeline(); 
      gsap.to(videoChunkContainerRef.current, {
         opacity: 0
      })
   }, {dependencies: [], scope: videoChunkContainerRef})
   return (
      <VideoChunkContainer ref={videoChunkContainerRef}>
         {homepageVideoChunks.map((video, index) => {
            return (
               <VideoChunk 
                  key={video.id}
                  className={`videoContainer` + index}   
               >
                  <video 
                     autoPlay={true}
                     muted={true}
                     loop={true}
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
         )})}
      </VideoChunkContainer>
   )
}  

export default Content

/*
   lets say I have 12 components which I want to animate with the GSAP. 

   As you know, in react app, it is usually a good practice to refer to the element with the '
*/