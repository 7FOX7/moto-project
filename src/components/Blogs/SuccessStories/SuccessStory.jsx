import { useSelectedStory } from "../../../contexts/SelectedStoryContext";
import { useScreenSize } from "../../../contexts/ScreenSizeContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import CustomImage from "../../../customs/components/CustomImage";
import CustomLink from "../../../customs/components/CustomLink";
import CustomText from "../../../customs/components/CustomText";
import Grid2 from "@mui/material/Grid2"
import Box from "@mui/material/Box";

const imgHeight = "300px"; 

const SuccessStory = ({story}) => {
   const {setSelectedStory} = useSelectedStory(); 
   const isSmallScreen = useScreenSize();
   const navigate = useNavigate(); 
   const theme = useTheme(); 
   const {
      id, 
      title, 
      imgSrc, 
      imgAlt, 
      textContent, 
      linkText, 
   } = story
   
   function handleClick() {
      navigate(`${id}`, {relative: "path"})
      setSelectedStory(story)
   }

   return (
      <Grid2
         component="article"
         container
         direction={{xs: "column", sm: "row", md: "row", lg: "row", xl: "row"}}
         columns={12}
         size={12}
         spacing={2}
      >
         <Grid2
            container
            size={{xs: 12, sm: 6, md: 5.5, lg: 4.5, xl: 4.5}}
         >
            <CustomImage 
               src={imgSrc}
               alt={imgAlt}
               width="100%"
               height={imgHeight}
            />
         </Grid2>
         <Grid2
            container
            direction="column"
            size={{xs: 12, sm: 6, md: 6, lg: 6, xl: 6}}
         >
            <Box
               sx={{
                  textAlign: isSmallScreen ? "center" : "left", 
               }}
            >
               <CustomText
                  color={theme.palette.secondary.main}
                  textAlign="inherit"
                  text={title}
                  typography={theme.typography.global.sectionContentTitle}
               />
               <CustomText
                  textAlign="inherit"
                  text={`${textContent.substring(0, 200)}...`}
               />
               <br />
               <br />
               <CustomLink
                  content={linkText}
                  underline="always"
                  color={theme.palette.secondary.main}
                  typography={theme.typography.global.linkText}
                  textDecorationColor={theme.palette.secondary.main}
                  onClick={handleClick}
               />
            </Box>
         </Grid2>
      </Grid2>
   )
}

export default SuccessStory

