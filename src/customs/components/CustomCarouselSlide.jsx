import { memo } from "react"
import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomText from "./CustomText"
import { StyledPaper } from "../../styles/style"
import { Grid2 } from "@mui/material"
import Rating from "@mui/material/Rating"

const CustomCarouselSlide = memo(function CustomCarouselSlide(props) {
   const isSmallScreen = useScreenSize()
   const theme = useTheme()
   const {item, type} = props
   if(type === "review") {
      return (
         <StyledPaper 
            variant="elevation"
            elevation={8}
            sx={{
               width: isSmallScreen ? "230px" : "300px", 
               height: isSmallScreen ? "200px" : "230px", 
               padding: "20px"
            }}
         >
            <Grid2
               container
               columnSpacing={3}
               size={12}
            >
               <Grid2 
                  container
                  size={12}
                  justifyContent="start"
               >
                  <CustomText 
                     color={theme.palette.common.black}
                     text={item.publisher}
                     typography={theme.typography.global.boldText}
                  />
               </Grid2>
               <Grid2
                  size={5}
               >
                  <Rating 
                     value={item.value}
                     readOnly
                     size={isSmallScreen ? "small" : "medium"}
                  />
               </Grid2>
               <Grid2
                  size={7}
               >
                  <CustomText
                     color={theme.palette.common.black}
                     text={item.publishDate}
                  />
               </Grid2>
               <Grid2
                  size={12}
               >
                  {item.content}
               </Grid2>
            </Grid2>
         </StyledPaper>
      )
   }
   else if(type === "video") {
      return (
         <StyledPaper>
            <p>Hello from <strong>VIDEO</strong></p>
         </StyledPaper>
      )
   }
}

) 
export default CustomCarouselSlide