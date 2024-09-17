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
            />
         </Toolbar>
      </HeaderAppBar>
   )
}

export default Header