import { useNavigate } from "react-router-dom";
import { useSelectedStory } from "../../contexts/SelectedStoryContext";
import { useScreenSize } from "../../contexts/ScreenSizeContext";
import { useTheme } from "@emotion/react"
import CustomText from "../../customs/components/CustomText";
import CustomContentContainer from "../../customs/components/CustomContentContainer"
import Grid2 from "@mui/material/Grid2";
import CustomImage from "../../customs/components/CustomImage";

const StoryViewContent = () => {
   const {selectedStory} = useSelectedStory(); 
   const navigate = useNavigate();
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme();

   return (
      <>
         <CustomContentContainer
            showMargin={true}
            showTransBox={true}
            content={
               <>
                  <Grid2
                     container
                     direction="column"
                     rowSpacing={3}
                     size={12}
                     alignItems="center"
                     justifyContent="center"
                  >
                     <Grid2
                        container
                     >
                        <CustomText 
                           color={theme.palette.secondary.main}
                           text={selectedStory.title}
                           typography={isSmallScreen ? theme.typography.global.mobile.contentTitle : theme.typography.global.desktop.contentTitle}
                        />
                     </Grid2>
                     <Grid2
                        container
                        size={{xs: 10, sm: 8, md: 12, lg: 10, xl: 10}}
                     >
                        <CustomImage 
                           src={selectedStory.imgSrc}
                           alt={selectedStory.imgAlt}
                           width="100%"
                           height={isSmallScreen ? "180px" : "320px"}
                        />
                     </Grid2>
                     <Grid2
                        container
                        size={{xs: 10, sm: 8, md: 12, lg: 10, xl: 10}}
                     >
                        <CustomText
                           text={selectedStory.textContent}
                           textAlign="left"
                        />
                     </Grid2>
                     <br />
                     <Grid2
                        container
                        spacing={2}
                        size={{xs: 10, sm: 8, md: 12, lg: 10, xl: 10}}
                        sx={{
                           color: "rgba(255, 255, 255, 0.7)"
                        }}
                     >
                        <CustomText
                           color="inherit"
                           text={`by ${selectedStory.publisher}`}
                        />
                        <CustomText
                           color="inherit"
                           text={`${selectedStory.publishDate}`}
                        />
                     </Grid2>
                  </Grid2>
               </>
            }
         />
      </>
   )
}

export default StoryViewContent