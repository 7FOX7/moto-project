import { useTheme } from "@emotion/react"
import Avatar from "@mui/material/Avatar"
import CustomText from "./CustomText"

const CustomAvatar = ({content, width="40px", height="40px", largerText=false}) => {   
   const theme = useTheme();
   return (
      <>
         <Avatar
            sx={{
               width: width, 
               height: height
            }}
         >
            {largerText ? 
               <CustomText
                  text={content}
                  typography={theme.typography.global.avatar}
               />
               :
               content 
            }
         </Avatar>
      </>
   )
}

export default CustomAvatar