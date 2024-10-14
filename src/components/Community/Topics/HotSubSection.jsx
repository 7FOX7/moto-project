import { useTheme } from "@emotion/react";
import { useScreenSize } from "../../../contexts/ScreenSizeContext";
import CustomText from "../../../customs/components/CustomText";
import { SubSectionBox } from "../../../styles/style";
import { StyledPaper } from "../../../styles/style";
import topicSubSectionContents from "../../../data/topicSubSectionContents"
import Grid2 from "@mui/material/Grid2";
import CustomImage from "../../../customs/components/CustomImage";

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
         columns={12}
         size={{xs: 12, sm: 12, md: 8, lg: 7, xl: 7}}
      >
         <CustomText 
            color={theme.palette.secondary.main}
            text={content.title.toUpperCase()}
            variant="h3"
            typography={isSmallScreen ? theme.typography.community.mobile.subSectionHeading : theme.typography.community.desktop.subSectionHeading}
         /> 
            <Grid2
               container
               columns={12}
               size={12}
               sx={{marginTop: marginTop}}
            >
               {isSmallScreen ? 
                  <Grid2
                     container
                     spacing={2}
                     direction={{xs: "column", sm: "row"}}
                     justifyContent="center"
                     alignItems="center"
                     size={12}
                  >
                     {items.map((item) => (
                        <Grid2
                           key={item.id}
                           container
                        >
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
                        </Grid2>
                     ))}
                  </Grid2>
                  : 
                  <Grid2
                     container
                     size={12}
                     columnSpacing={2}
                     sx={{
                        height: "450px", 
                     }}
                  >
                     <Grid2
                        container
                        size={7}
                        sx={{
                           height: "100%", 
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
                        size={4}
                        sx={{
                           height: "100%", 
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
            </Grid2>
      </SubSectionBox>
   )
}

export default HotSubSection