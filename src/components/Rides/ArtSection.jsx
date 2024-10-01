import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomCarousel from "../../customs/components/CustomCarousel"
import CustomText from "../../customs/components/CustomText"
import CustomImage from "../../customs/components/CustomImage"
import { SectionBox } from "../../styles/style"
import Box from "@mui/material/Box"
import Grid2 from "@mui/material/Grid2"
import arts from "../../data/arts"

const ArtSection = () => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 

   return (
      <SectionBox component="section">
         <CustomText 
            text="Arts"
            variant="h2"
            typography={isSmallScreen ? theme.typography.global.mobile.sectionHeading : theme.typography.global.desktop.sectionHeading}
         />

         {isSmallScreen ?
            <CustomCarousel
               data={arts}
               type="art"
            />
            : 
            <Grid2
               container
               size={12}
            > 
               <CustomImage
                  src={arts[0].imgSrc}
                  alt={arts[0].imgAlt}
                  width="100%"
                  height="450px"
                  borderRadius="15px"
               />
            </Grid2>
         }
      </SectionBox>
   )
}

export default ArtSection