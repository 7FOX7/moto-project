import { SearchBarContainer } from "../../styles/style"
import { SearchBar } from "../../styles/style"

const CustomSearchBar = ({placeholder, onChange}) => {
   return (
      <SearchBarContainer>
         <SearchBar 
            fullWidth 
            placeholder={placeholder} 
            onChange={onChange}
         />
      </SearchBarContainer>
   )
}

export default CustomSearchBar