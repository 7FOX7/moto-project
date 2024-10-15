import { useCallback } from "react"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import SplitType from "split-type"

gsap.registerPlugin(ScrollTrigger)
const useHomePageAnimation = (contentRef, isSmallScreen) => {
   useGSAP(() => {
      const revealIndex = isSmallScreen ? 400 : 550; 
      const pinDuration = innerHeight * 9
      const xMove = innerWidth + revealIndex
      gsap.set('.videoChunkContainer', {
         visibility: "hidden"
      })
      gsap.set('.videoChunk', {
         transformOrigin: "center"
      })
      gsap.set('.revealingComponent', {
         xPercent: -110 
      })
      
      gsap.to('.revealingComponent', {
         scrollTrigger: {
            trigger: ".contentRevealComponent", 
            start: "top top", 
            end: `+=${pinDuration} 100px`,
            pin: true,
            scrub: true, 
         }, 
         x: xMove, 
      })

      const master = gsap.timeline()
      master
         .add(part1())
         .add(part2(), ">")
         .add(part3(), ">")
         .add(part4(), ">")
         .add(part5(), "+=1")
   
   }, {dependencies: [], scope: contentRef.current})

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

   const part5 = useCallback(() => {
      const contentReviewCarousel = gsap.utils.toArray('.contentReviewCarousel')[0]
      const tl = gsap.timeline()

      tl
         .to(window, {
            onStart: () => contentReviewCarousel.scrollIntoView({behavior: "smooth"})
         })

      return tl
   }, [])
}

export default useHomePageAnimation