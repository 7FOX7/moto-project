import { useScreenSize } from "../../contexts/ScreenSizeContext"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import navLinks from "../../data/navLinks"
import Typography from "@mui/material/Typography"

const CustomListContainer = {
   header: () => {
      const isSmallScreen = useScreenSize()
      return (
         <List sx={{
            display: isSmallScreen ? "block" : "flex"
         }}>
            {navLinks.map((navLink) => {
               return (
                  <ListItem key={navLink.id}>
                     <ListItemButton>
                        <Typography sx={{textWrap: "nowrap"}}>{navLink.title}</Typography>
                     </ListItemButton>
                  </ListItem>
               )
            })}
         </List>
      )
   }, 
   default: () => {
      return (
         <p>Nothing special. Just a default</p>
      )
   }
}

export default CustomListContainer