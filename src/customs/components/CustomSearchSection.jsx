import { useState } from "react"
import CustomSearchBar from "./CustomSearchBar"
import { SearchSectionContainer } from "../../styles/style"
import { SearchListContainer } from "../../styles/style"

const CustomSearchSection = ({dataList, renderItems, filterFunc, placeholder}) => {
   const [filteredList, setFilteredList] = useState(dataList);
   
   function handleChange(e) {
      const searchQuery = e.target.value; 
      const filtered = filterFunc(searchQuery)
      setFilteredList(filtered)
   }

   return (
      <SearchSectionContainer>
         <CustomSearchBar 
            placeholder={placeholder}
            onChange={handleChange}    
         />
         <SearchListContainer>
            {renderItems(filteredList)}
         </SearchListContainer>
      </SearchSectionContainer>
   )   
}

export default CustomSearchSection