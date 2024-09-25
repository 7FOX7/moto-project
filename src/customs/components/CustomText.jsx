import { memo } from "react"
import Typography from "@mui/material/Typography"

const CustomText = memo(function CustomText(props) {
   const {
      color="primary", 
      text, 
      secondary=false,  
      variant="body1", 
      typography
   } = props
   
   return (
      <>
         <Typography 
            color={secondary ? "global.secondaryTextContent.main" : color}
            variant={variant}
            typography={typography}
            sx={{
               textAlign: "center"
            }}
         >
            {text}
         </Typography>
      </>
   )
})

export default CustomText