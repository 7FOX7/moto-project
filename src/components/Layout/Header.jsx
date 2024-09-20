import { useState } from "react";
import { useScreenSize } from "../../contexts/ScreenSizeContext";
import { HeaderSection } from "../../styles/style";
import CustomIconButton from "../../customs/components/CustomIconButton"
import CustomSwipeableDrawer from "../../customs/components/CustomSwipeableDrawer";
import CustomListContainer from "../../customs/components/CustomListContainer";
import CustomLink from "../../customs/components/CustomLink";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar"
import MenuIcon from '@mui/icons-material/Menu';

const anchor = "right"
const List = CustomListContainer.header

const Header = () => {
   const isSmallScreen = useScreenSize()
   const [open, setOpen] = useState(false)

   const content = 
      <img
         src="/images/fox_logo.png" 
         alt="Fox Logo"
         draggable="false"
         style={{
            width: "60px", 
            height: "60px",
            objectFit: "cover" 
         }} 
      />

   const handleOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   return (
      <>
         <HeaderSection>
            <Toolbar>
               <CustomLink 
                  path="/"
                  content={content}
                  ariaLabel="Navigate to Home Page"
               />            
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
         </HeaderSection>
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