import { SocialIcon } from "react-social-icons/component"
import 'react-social-icons/email'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'

const CustomLinkIcon = ({url, href}) => {
   return (
      <>
         <SocialIcon 
            url={url} 
            href={href} 
            target="_blank"
            style={{
               width: "40px", 
               height: "40px"
            }}
         />
      </>
   )
}

export default CustomLinkIcon