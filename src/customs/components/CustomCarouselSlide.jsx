import { memo } from "react"
import { useNavigate } from "react-router-dom"
import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomText from "./CustomText"
import CustomImage from "./CustomImage"
import { StyledPaper } from "../../styles/style"
import { MarginBox } from "../../styles/style"
import { TipSectionBox } from "../../styles/style"
import { EventTypeBox } from "../../styles/style"
import Grid2 from "@mui/material/Grid2"
import Rating from "@mui/material/Rating"
import Link from "@mui/material/Link"


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
      const navigate = useNavigate()
      return (
         <StyledPaper
            onClick={() => navigate(`/video-view/${item.id}`, {relative: "route"})}
            sx={{
               width: "230px", 
               height: "170px"
            }}
         >
            <CustomImage 
               width="100%"
               height="100%"
               src={item.imgSrc} 
               alt={item.imgAlt}   
            />
         </StyledPaper>
      )
   }
   else if(type === "event") {
      return (
         <StyledPaper 
            sx={{
               position: "relative", 
               width: "230px", 
               height: "320px", 
               flexDirection: "column", 
            }}
         >
            <CustomImage
               width="100%"
               height="200px"
               src={item.imgSrc}
               alt={item.imgAlt}
               borderRadius="15px 15px 0px 0px" 
            />
            <Grid2
               container
               rowSpacing={1}
               size={12}
               padding="10px"
            >
               <Grid2
                  container
                  size={12}
               >
                  <CustomText 
                     color={theme.palette.secondary.dark}
                     text={item.title}
                     typography={theme.typography.rides.eventTitle}
                  />
               </Grid2>
               <Grid2 
                  container
                  size={12}
               >
                  <CustomText 
                     color={theme.palette.common.black}
                     text={item.date}
                  />
               </Grid2>
               <Grid2
                  container
                  size={12}
               >
                  <CustomText 
                     color={theme.palette.common.black}
                     text={"At " + item.place}
                  />
               </Grid2>
               <EventTypeBox>
                  <CustomText
                     text={item.type}
                  />
               </EventTypeBox>
            </Grid2>
         </StyledPaper>
      )
   }
   else if(type === "art") {
      return (
         <StyledPaper 
            sx={{
               width: "230px", 
               height: "230px"
            }}
         >
            <CustomImage
               width="100%"
               height="100%"
               src={item.imgSrc}
               alt={item.imgAlt}
               borderRadius="15px" 
            />
         </StyledPaper>
      )
   }
   else if(type === "tip") {
      const navigate = useNavigate(); 
      return (
         <TipSectionBox>
            <MarginBox>
               <StyledPaper 
                  sx={{
                     width: "100%", 
                     height: "230px"
                  }}
               >
                  <CustomImage 
                     width="100%"
                     height="100%"
                     src={item.imgSrc}
                     alt={item.imgAlt}
                     borderRadius="15px"
                  />
               </StyledPaper>
            </MarginBox>
            <MarginBox>
               <CustomText
                  color={theme.palette.secondary.main}
                  text={item.title}
                  typography={theme.typography.global.mobile.tipTitle}
               />
            </MarginBox>
            <MarginBox>
               <CustomText
                  text={`${item.textContent.substring(0, 150)}...`}
               />
            </MarginBox>
            <MarginBox>
               <Link 
                  component="button"
                  onClick={() => navigate(`/video-view/${item.id}`, {relative: "route"})}
                  sx={{ 
                     color: theme.palette.secondary.dark,
                     textDecorationColor: theme.palette.secondary.dark
                  }}
               >
                  <CustomText 
                     color="inherit"
                     text="Read More"
                  />
               </Link>
            </MarginBox>
         </TipSectionBox>
      )
   }
}

) 
export default CustomCarouselSlide