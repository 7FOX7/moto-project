import { HomeBox } from "../../styles/style"
import Content from "./Home/Content"

const Main = () => {
   return (
      <HomeBox>
         <Content />
      </HomeBox>
   )
   /*
      1. The idea: 

      - video appearing from the bottom, 
      - after the video is visible, the text starts appearing
      - after some time, the user is scrolled to the center of the home page

      video appearing from the bottom: 

      const tl = gsap.timeline(); 

      useGsap(() => {
         tl.to(VideoComponent, {
            transfer: right to the top
         })   
      })

      <VideoComponent>
      
   */
}

export default Main
