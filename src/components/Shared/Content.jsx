import { useRef } from "react"
import { ContentBox } from "../../styles/style"
import { useScreenSize } from "../../contexts/ScreenSizeContext"

const Content = ({children, height, useAnimation}) => {
   const contentRef = useRef(null)
   const isSmallScreen = useScreenSize()
   useAnimation && useAnimation(contentRef, isSmallScreen)
   return (
      <ContentBox
         ref={contentRef} 
         sx={{
            height: height
         }}
      >
         {children}
      </ContentBox>
   )
}

export default Content