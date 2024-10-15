import { memo } from "react"
import Typography from "@mui/material/Typography"

const CustomText = memo(function CustomText(props) {
   const { 
      text, 
      typography, 
      variant="body1", 
      color="primary",
      textAlign="center",
      wordBreak="normal"
   } = props
   
   return (
      <>
         <Typography 
            color={color}
            variant={variant}
            typography={typography}
            sx={{
               textAlign: textAlign,
               wordBreak: wordBreak
            }}
         >
            {text}
         </Typography>
      </>
   )
})

export default CustomText