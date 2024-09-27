import { HomeBox } from "../../styles/style"
import Content from "./Home/Content"

const Main = () => {
   return (
      <HomeBox>
         <Content />
      </HomeBox>
   )
}

export default Main

/*
   I have a problem: 
   
   Let's assume I have the following folder structure: 

   |
   |
   components
   |
   |
    ______ Home 
         |
         |
          ____ Main.jsx
          ____ Home 
              |
              |
               ____ Content.jsx

    ______ Workout
         |
         |
          ____ Main.jsx
          ____ Workout
              |
              | 
               ____ Content.jsx

   |
   | 
   customs
   |
   | 
    ____ Hooks
        |
        |
         ____ useHomePageAnimation.js

   

now, Content.jsx looks like this: 

import { useRef } from "react"
import useHomePageAnimation from "../../../customs/hooks/useHomePageAnimation"
... there are other imports 

const Content = () => {
   const contentBoxRef = useRef(null);
   useHomePageAnimation(contentBoxRef, isSmallScreen)
   return (
      <ContentBox ref={contentBoxRef}>
         // custom components are here
      </ContentBox>
   )
}  

export default Content

and 'useHomePageAnimation' is a custom hook, which basically does the GSAP animation part. Please, pay attention 
that the ref 'contentBoxRef' is used as a scope: 

const useHomePageAnimation = (contentBoxRef, isSmallScreen) => {
   useGSAP(() => {
      const master = gsap.timeline()
      master
         .add(part1())
         .add(part2(), ">")
         .add(part3(), ">")
         .add(part4(), ">")
         .add(part5(), "+=1")
   
   }, {dependencies: [], scope: contentBoxRef.current})

   // functions were omitted
}

export default useHomePageAnimation


now, I do want to add another component to the 'components' folder (Lets say 'Workout') which I want to wrap into the 'Content' component, too. And, my question is: will it cause any problems if I extract 'Content' component into the 'Shared'
folder inside the 'components' folder ? will it be ok to keep reference to the same component and use as a wrapper for multiple components ? or, is there a work around?
*/