import { useSelectedTip } from "../../contexts/SelectedTipContext";
import { useScreenSize } from "../../contexts/ScreenSizeContext";
import { useTheme } from "@emotion/react"
import CustomText from "../../customs/components/CustomText";
import CustomContentContainer from "../../customs/components/CustomContentContainer"
import Grid2 from "@mui/material/Grid2";

const TipViewContent = () => {
   const {selectedTip} = useSelectedTip(); 
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
                           text={selectedTip.title}
                           typography={isSmallScreen ? theme.typography.global.mobile.contentTitle : theme.typography.global.desktop.contentTitle}
                        />
                     </Grid2>
                     <Grid2
                        container
                        size={12}
                     >
                        <CustomText
                           text={selectedTip.textContent}
                           textAlign="left"
                        />
                     </Grid2>
                     <br />
                     <Grid2
                        container
                        spacing={1}
                        size={12}
                        sx={{
                           color: "rgba(255, 255, 255, 0.7)"
                        }}
                     >
                        <CustomText
                           color="inherit"
                           text={'Made with love by'}
                        />
                        <CustomText
                           color={theme.palette.secondary.main}
                           text={'7FOX7'}
                        />
                     </Grid2>
                  </Grid2>
               </>
            }
         />
      </>
   )
}

export default TipViewContent