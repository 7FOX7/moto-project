import { useTheme } from "@emotion/react";
import { useScreenSize } from "../../contexts/ScreenSizeContext";
import CustomText from "../../customs/components/CustomText";
import { SubSectionBox } from "../../styles/style";
import topicSubSectionContents from "../../data/topicSubSectionContents"
import CustomCarousel from "../../customs/components/CustomCarousel";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import CustomImage from "../../customs/components/CustomImage";

const marginTop = "30px"
const content = topicSubSectionContents[0]; 
const items = content.content; 

const HotSubSection = () => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 

   return (
      <SubSectionBox 
         component="article"
         container
         size={{xs: 12, sm: 12, md: 7, lg: 7, xl: 7}}
      >
         <CustomText 
            color={theme.palette.secondary.main}
            text={content.title.toUpperCase()}
            variant="h3"
            typography={isSmallScreen ? theme.typography.community.mobile.subSectionHeading : theme.typography.community.desktop.subSectionHeading}
         /> 
            <Box
               sx={{marginTop: marginTop}}
            >
               {isSmallScreen ?
                  <CustomCarousel
                     data={items}
                     type="art"
                  />
                  : 
                  <Grid2
                     container
                     columns={3}
                     columnSpacing={2}
                     sx={{
                        height: "450px", 
                        background: "orange"
                     }}
                  >
                     <Grid2
                        container
                        size={2}
                        sx={{
                           height: "100%", 
                           background: "red", 
                        }}
                     >
                        <CustomImage
                           src={items[0].imgSrc}
                           alt={items[0].imgAlt}
                           width="100%"
                           height="100%"
                           borderRadius="15px" 
                        />
                     </Grid2>
                     <Grid2
                        container
                        columns={1}
                        size={1}
                        sx={{
                           height: "100%", 
                           background: "green", 
                           flexDirection: "column", 
                           justifyContent: "space-between"
                        }}
                     >
                        <Grid2
                           size={1}
                           sx={{
                              height: "48%"
                           }}
                        >
                           <CustomImage
                              src={items[1].imgSrc}
                              alt={items[1].imgAlt}
                              width="100%"
                              height="100%"
                              borderRadius="15px"
                           />
                        </Grid2>
                        <Grid2
                           size={1}
                           sx={{
                              height: "48%"
                           }}
                        >
                           <CustomImage
                              src={items[2].imgSrc}
                              alt={items[2].imgAlt}
                              width="100%"
                              height="100%"
                              borderRadius="15px"
                           />
                        </Grid2>
                     </Grid2>
                  </Grid2>
               }
            </Box>
      </SubSectionBox>
   )
}

export default HotSubSection