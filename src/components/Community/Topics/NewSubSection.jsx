import { useTheme } from "@emotion/react";
import { useScreenSize } from "../../../contexts/ScreenSizeContext";
import { SubSectionBox } from "../../../styles/style";
import CustomText from "../../../customs/components/CustomText";
import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import topicSubSectionContents from "../../../data/topicSubSectionContents";

const marginTop = "30px"; 
const content = topicSubSectionContents[1]; 
const items = content.content; 

console.log(content)

const NewSubSection = () => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 

   return (
      <SubSectionBox 
         component="article"
         container
         size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}}
         columns={12}
      >
         <CustomText 
            color={theme.palette.secondary.main}
            text={content.title.toUpperCase()}
            variant="h3"
            typography={isSmallScreen ? theme.typography.community.mobile.subSectionHeading : theme.typography.community.desktop.subSectionHeading}
         />
         <Box
            sx={{
               marginTop: marginTop
            }}
         >
         {items.map((item) => (
            <Grid2
               key={item.id}
               container
               columns={12}
               rowSpacing={1}
               size={12}
               alignItems="center"
               sx={{
                  color: theme.palette.common.white, 
                  fontSize: isSmallScreen ? theme.typography.community.mobile.subSectionContent.fontSize : theme.typography.community.desktop.subSectionContent.fontSize, 
                  fontWeight: isSmallScreen ? theme.typography.community.mobile.subSectionContent.fontWeight : theme.typography.community.desktop.subSectionContent.fontWeight, 
                  marginBottom: "30px", 
               }}
            >
                     <Grid2
                        container
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
                        justifyContent="center"
                        sx={{
                           width: "25px", 
                        }}
                     >
                        <Typography
                           fontSize="3rem"
                           variant="span"
                        >
                           •
                        </Typography>
                     </Grid2>
                     <Grid2
                        container
                     >
                        <Typography
                           fontSize="inherit"
                           fontWeight="inherit"
                        >
                           {item.category}
                        </Typography>
                     </Grid2>
                  <Grid2
                     container
                     size={12}
                  >
                        <Typography
                           typography={isSmallScreen ? theme.typography.community.mobile.subSectionTitle : theme.typography.community.desktop.subSectionTitle}
                        >
                           {item.title}
                        </Typography>
                  </Grid2>
                  <Grid2
                     container
                     columns={12} 
                     size={12}
                  >
                     <Grid2
                        container
                        sx={{
                           width: "30px"
                        }}
                     >
                        <Typography
                           color={theme.palette.secondary.main}
                           fontSize="inherit"
                           fontWeight="inherit"
                        >
                           by
                        </Typography>
                     </Grid2>
                     <Grid2>
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
      </SubSectionBox>
   )
}

export default NewSubSection