import { useScreenSize } from "../../../contexts/ScreenSizeContext";
import { useTheme } from "@emotion/react";
import CustomImage from "../../../customs/components/CustomImage";
import CustomLink from "../../../customs/components/CustomLink";
import CustomText from "../../../customs/components/CustomText";
import Grid2 from "@mui/material/Grid2"
import Box from "@mui/material/Box";

const imgHeight = "300px"; 

const SuccessStory = (props) => {
   const isSmallScreen = useScreenSize();
   const theme = useTheme(); 
   const {
      title, 
      imgSrc, 
      imgAlt, 
      textContent, 
      linkText, 
   } = props.story
   
   return (
      <Grid2
         component="article"
         container
         direction={isSmallScreen ? "column" : "row"}
         columns={12}   // you mihgt probably use 'size' prop instead
         // size={12}   We are temporarily comment this out,to checkc if we can acutally control the size of the chilld grids with the 'columns' prop of the parent Grid2
         spacing={2}
      >
         <Grid2
            container
            size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}}
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
            size={{xs: 12, sm: 12, md: 6, lg: 6, xl: 6}}
            sx={{
               background: "red"
            }}
            alignItems="center"    // might probably switch to justifyContent
         >
            <Box
               sx={{
                  textAlign: "left"
               }}
            >
               <CustomText
                  textAlign="left"
                  text={title}
               />
               <CustomText
                  textAlign="left"
                  text={textContent}
               />
               <CustomLink
                  content={linkText}
                  underline="always"
                  color={theme.palette.secondary.main}
                  textDecorationColor={theme.palette.secondary.main}
                  // TODO: add 'typography' property
               />
            </Box>
         </Grid2>
         <Grid2>

         </Grid2>
      </Grid2>
   )
}

export default SuccessStory