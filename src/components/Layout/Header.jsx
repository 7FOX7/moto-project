import { HeaderAppBar } from "../../styles/style";
import Toolbar from "@mui/material/Toolbar"
import CustomIconButton from "../../customs/components/CustomIconButton"
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
   const handleClick = () => {
      console.log('you clicked')
   }

   return (
      <HeaderAppBar>
         <Toolbar>
            <CustomIconButton 
               onClick={handleClick} 
               icon={<MenuIcon />}
               ariaLabel="Open Main Navigation"
            />
         </Toolbar>
      </HeaderAppBar>
   )
}

export default Header


// 1. the idea: to add the list of links that will open on 'menu' icon click

/* 
   procedure: 

   our data folder structure could look like: 

   data 
   |
   |
    ---- navLinks.js 


   
*/