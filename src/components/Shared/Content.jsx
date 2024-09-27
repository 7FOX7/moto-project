import { useRef } from "react"
import { ContentBox } from "../../styles/style"

const Content = ({children}) => {
   const contentBoxRef = useRef(null)
   return (
      <ContentBox ref={contentBoxRef}>
         {children}
      </ContentBox>
   )
}

export default Content