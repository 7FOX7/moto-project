import { useState } from "react";
import { useTheme } from "@emotion/react";
import { useScreenSize } from "../../../contexts/ScreenSizeContext";
import CustomText from "../../../customs/components/CustomText";
import CustomSelect from "../../../customs/components/CustomSelect";
import { SubSectionBox } from "../../../styles/style";
import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import topicSubSectionContents from "../../../data/topicSubSectionContents"; 
import subSectionCategories from "../../../data/subSectionCategories";

const marginTop = "30px"
const content = topicSubSectionContents[2]; 
const items = content.content; 

const BestSubSection = () => {
   const [filteredItems, setFilteredItems] = useState([...items])
   const [selectedCategory, setSelectedCategory] = useState(subSectionCategories[0].name); 
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 

   const handleChange = (e) => {
      const selectedCategory = e.target.value
      const filteredItems = items.filter(item => item.category === selectedCategory)
      setSelectedCategory(selectedCategory)
      setFilteredItems(filteredItems)
   }

   const handleClick = (category) => {
      const selectedCategory = category
      const filteredItems = items.filter(item => item.category === selectedCategory)
      setSelectedCategory(selectedCategory)
      setFilteredItems(filteredItems)
   }

   return (
      <SubSectionBox 
         component="article"
         container
         size={12}
         columns={12}
      >
         <CustomText 
            color={theme.palette.secondary.main}
            text={content.title.toUpperCase()}
            variant="h3"
            typography={isSmallScreen ? theme.typography.community.mobile.subSectionHeading : theme.typography.community.desktop.subSectionHeading}
         />
         <Grid2 
            container
            size={{md: 9, lg: 9, xl: 9}}
            sx={{
               marginLeft: "20px",
            }}
         >
            {isSmallScreen ? 
               <CustomSelect 
                  selectedOption={selectedCategory}
                  options={subSectionCategories}
                  onChange={handleChange}
                  showAll={false}
               />
               : 
               <Grid2 
                  container
                  columnSpacing={2}
               >
                  {subSectionCategories.map((category) => (
                     <Link 
                        key={category.id}
                        component="button"
                        onClick={() => handleClick(category.name)}
                        sx={{
                           textDecorationColor: theme.palette.secondary.main
                        }}
                     >
                        <CustomText
                           color={theme.palette.secondary.main}
                           text={category.name}
                           typography={isSmallScreen ? theme.typography.community.mobile.subSectionCategory : theme.typography.community.desktop.subSectionCategory}
                        />
                     </Link>
                  ))}
               </Grid2>
            }
         </Grid2>
         <Box
            sx={{
               height: "600px", 
               marginTop: marginTop,
               overflowY: "auto"
            }}
         >
            {filteredItems.map((item) => (
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
                              width: "30px", 
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

export default BestSubSection