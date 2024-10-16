import { useState } from "react"
import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomSearchBar from "./CustomSearchBar"
import { SearchSectionContainer } from "../../styles/style"
import { SearchListContainer } from "../../styles/style"
import Grid2 from "@mui/material/Grid2"

const CustomSearchSection = ({dataList, renderItems, filterFunc, placeholder}) => {
   const [filteredList, setFilteredList] = useState(dataList);
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 

   function handleChange(e) {
      const searchQuery = e.target.value; 
      const filtered = filterFunc(searchQuery)
      setFilteredList(filtered)
   }

   return (
      <>   
         <SearchSectionContainer
            container
            columns={12}
            justifyContent="center"
         >
            <Grid2
               container
               size={{xs: 10, sm: 6, md: 5, lg: 5, xl: 4}}
            >
               <CustomSearchBar 
                  placeholder={placeholder}
                  onChange={handleChange}    
               />
            </Grid2>
            <SearchListContainer
               container
               size={12}
               spacing={1}
               sx={{
                  background: isSmallScreen && theme.palette.secondary.dark
               }}
            >
               {renderItems(filteredList)}
            </SearchListContainer>
         </SearchSectionContainer>
      </>
   )   
}

export default CustomSearchSection