import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import Box from "@mui/material/Box"
import CustomCarousel from "./CustomCarousel"
import CustomText from "./CustomText"
import { SubSectionBox } from "../../styles/style"
import Grid2 from "@mui/material/Grid2"

const CustomSubSection = ({showCarousel, title, content}) => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 
   return (
      <SubSectionBox component="section">
         <CustomText 
            color="inherit"
            text={title}
            variant="h3"
            typography={isSmallScreen ? theme.typography.global.mobile.sectionHeading : theme.typography.global.desktop.sectionHeading}
         />
         <Box>
            {showCarousel ? 
               <CustomCarousel
                  data={content}
                  type="art"
               />
               : 
               content.map((item) => (
                  <Grid2
                     key={item.id}
                     container
                     component="article"
                     size={12}
                  >
                     <Grid2
                        container
                        size={12}
                     >
                        <Grid2
                           size={5}
                        >
                           <CustomText
                              text={item.publishDate}
                           />
                        </Grid2>
                        <Grid2
                           size={1}
                        >
                           •
                        </Grid2>
                        <Grid2
                           size={6}
                        >
                           <CustomText
                              text={item.category}
                           />
                        </Grid2>
                     </Grid2>
                     <Grid2
                        container
                        size={12}
                     >
                        <Grid2>
                           <CustomText
                              text={item.title}
                              variant="h4"
                           />
                        </Grid2>
                     </Grid2>
                     <Grid2
                        container 
                        size={12}
                     >
                        <Grid2
                           size={5}
                        >
                           <CustomText
                              text="by"
                           />
                        </Grid2>
                        <Grid2
                           size={7}
                        >
                           <CustomText
                              text={item.publisher}
                           />
                        </Grid2>
                     </Grid2>
                  </Grid2>
               ))
            }
         </Box>
      </SubSectionBox>
   )
}

export default CustomSubSection