import { memo } from "react"
import Typography from "@mui/material/Typography"

const CustomText = memo(function CustomText(props) {
   const {
      text, 
      secondary=false, 
      bold=false, 
      variant="body1", 
      fontSize
   } = props
   return (
      <>
         <Typography 
            color={secondary ? "global.secondaryTextContent.main" : "primary"}
            variant={variant}
            typography={bold && "global.boldText"}
            fontSize={fontSize}
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