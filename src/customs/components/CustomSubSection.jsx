import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomCarousel from "./CustomCarousel"
import CustomText from "./CustomText"
import { SubSectionBox } from "../../styles/style"
import Box from "@mui/material/Box"
import Grid2 from "@mui/material/Grid2"
import Typography from "@mui/material/Typography"

const marginTop = "30px"

const CustomSubSection = ({showCarousel, title, content}) => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 
   return (
      <SubSectionBox 
         component="section"
         container
         size={{xs: 12, sm: 12, md: 6, lg: 6, xl: 6}}
      >
         <CustomText 
            color={theme.palette.secondary.main}
            text={title.toUpperCase()}
            variant="h3"
            typography={isSmallScreen ? theme.typography.community.mobile.subSectionHeading : theme.typography.community.desktop.subSectionHeading}
         />
         {showCarousel ? 
            <Box sx={{marginTop: marginTop}}>
               <CustomCarousel
                  data={content}
                  type="art"
               />
            </Box>
            : 
            <Box sx={{marginTop: marginTop}}>
               {content.map((item) => (
                  <Grid2
                     key={item.id}
                     container
                     component="article"
                     rowSpacing={1}
                     size={12}
                     sx={{
                        position: "relative", 
                        color: theme.palette.common.white, 
                        fontSize: isSmallScreen ? theme.typography.community.mobile.subSectionContent.fontSize : theme.typography.community.desktop.subSectionContent.fontSize, 
                        fontWeight: isSmallScreen ? theme.typography.community.mobile.subSectionContent.fontWeight : theme.typography.community.desktop.subSectionContent.fontWeight, 
                        marginBottom: "30px"
                     }}
                  >
                        <Grid2
                           container
                           size={12}
                        >
                           <Grid2
                              size={5}
                           >
                              <Typography
                                 color={theme.palette.secondary.main}
                                 fontSize="inherit"
                                 fontWeight="inherit"
                              >
                                 {item.publishDate}
                              </Typography>
                           </Grid2>
                           <Grid2
                              container
                              sx={{
                                 position: "absolute", 
                                 top: "10%", 
                                 left: "29%", 
                                 transform: "translate(50%, -50%)"
                              }}
                           >
                              <Typography
                                 fontSize="4rem"
                                 variant="span"
                              >
                                 •
                              </Typography>
                           </Grid2>
                           <Grid2
                              size={7}
                           >
                              <Typography
                                 // color="inherit"
                                 fontSize="inherit"
                                 fontWeight="inherit"
                              >
                                 {item.category}
                              </Typography>
                           </Grid2>
                        </Grid2>
                        <Grid2
                           container
                           size={12}
                        >
                           <Grid2>
                              <Typography
                                 typography={isSmallScreen ? theme.typography.community.mobile.subSectionTitle : theme.typography.community.desktop.subSectionTitle}
                              >
                                 {item.title}
                              </Typography>
                           </Grid2>
                        </Grid2>
                        <Grid2
                           container 
                           size={12}
                        >
                           <Grid2
                              size={1}
                           >
                              <Typography
                                 color={theme.palette.secondary.main}
                                 fontSize="inherit"
                                 fontWeight="inherit"
                              >
                                 by
                              </Typography>
                           </Grid2>
                           <Grid2
                              size={11}
                           >
                              <Typography
                                 color={theme.palette.community.publisher.main}
                                 fontSize="inherit"
                                 fontWeight="inherit"
                              >
                                 {item.publisher}
                              </Typography>
                           </Grid2>
                        </Grid2>
                  </Grid2>
               ))}
            </Box>
         }
      </SubSectionBox>
   )
}

export default CustomSubSection