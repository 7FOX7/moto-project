import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomImage from "../../../customs/components/CustomImage"
import CustomText from "../../../customs/components/CustomText"
import CustomButton from "../../../customs/components/CustomButton"
import Grid2 from "@mui/material/Grid2"
import Box from "@mui/material/Box"


const imageData = {
   imgSrc: "/images/art-idle-biker.jpg", 
   imgAlt: "Default Alt"
}

const CallToActionContent = () => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 
   return (
      <>
         <Grid2
            component="article"
            container
            direction={isSmallScreen ? "column" : "row"}
            columns={12}   // you mihgt probably use 'size' prop instead
            // size={12}   We are temporarily comment this out,to checkc if we can acutally control the size of the chilld grids with the 'columns' prop of the parent Grid2
            spacing={2}
            sx={{
               background: "red"
            }}
         >
            <Grid2
               container
               size={{xs: 12, sm: 12, md: 6, lg: 6, xl: 6}}
               direction="column"
            >
               <Box>
                  <CustomText 
                     text="Want to share your story with others?"
                     variant="h3"
                  />
               </Box>
               <Box>
                  <CustomText 
                     text="Email us!"
                     variant="h3"
                  />
               </Box>     
               <Box>
                  <CustomText 
                     text="Let other folks now"
                     variant="h3"
                  />
               </Box>
               <Box>
                  <CustomButton
                     content="Email us"
                  />
               </Box>
            </Grid2>
            <Grid2
               container
               size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}}
            >
               <CustomImage 
                  src={imageData.imgSrc}
                  alt={imageData.imgAlt}
                  width="100%"
                  height="300px"
               />
            </Grid2>
         </Grid2>
      </>
   )
}

export default CallToActionContent


