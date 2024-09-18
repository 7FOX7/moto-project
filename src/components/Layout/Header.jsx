import { useState } from "react";
import { useScreenSize } from "../../contexts/ScreenSizeContext";
import { HeaderAppBar } from "../../styles/style";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar"
import CustomIconButton from "../../customs/components/CustomIconButton"
import CustomSwipeableDrawer from "../../customs/components/CustomSwipeableDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import CustomListContainer from "../../customs/components/CustomListContainer";

const anchor = "right"
const List = CustomListContainer.header

const Header = () => {
   const isSmallScreen = useScreenSize()
   const [open, setOpen] = useState(false)

   const handleOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   return (
      <>
         <HeaderAppBar>
            <Toolbar>
               <Box sx={{flexGrow: 1}} />
               {isSmallScreen ?
                  <CustomIconButton 
                     onClick={handleOpen} 
                     icon={<MenuIcon />}
                     ariaLabel="Open Main Navigation"
                  />
                  : 
                  <List />
               }
            </Toolbar>
         </HeaderAppBar>
         {isSmallScreen && 
            <CustomSwipeableDrawer 
            list={<List />}
            anchor={anchor}
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
         />
         }
      </>
   )
}

export default Header

/*
1. the idea: to add the list of links that will open on 'menu' icon click

 
  
   
*/