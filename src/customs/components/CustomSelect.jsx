import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

const CustomSelect = ({selectedOption, options, onChange, backgroundColor="white", color="black", showAll=true}) => {
   return (
      <>
         <Select
            value={selectedOption}
            onChange={onChange}
            sx={{
               width: "160px", 
               backgroundColor: backgroundColor, 
               color: color
            }}
         >
            {showAll && 
               <MenuItem value="All">
                  <em>All</em>
               </MenuItem>
            }
            {options.map((option) => {
               return (
                  <MenuItem 
                     key={option.id}
                     value={option.name}
                  >
                     {option.name}
                  </MenuItem>
               ) 
            })}
         </Select>
      </>
   )
}

export default CustomSelect

