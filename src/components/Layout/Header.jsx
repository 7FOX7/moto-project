import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../../contexts/ScreenSizeContext";
import { HeaderSection } from "../../styles/style";
import CustomIconButton from "../../customs/components/CustomIconButton"
import CustomSwipeableDrawer from "../../customs/components/CustomSwipeableDrawer";
import CustomListContainer from "../../customs/components/CustomListContainer";
import CustomLink from "../../customs/components/CustomLink";
import CustomImage from "../../customs/components/CustomImage";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar"
import MenuIcon from '@mui/icons-material/Menu';

const anchor = "right"
const List = CustomListContainer.header

const Header = () => {
   const [open, setOpen] = useState(false); 
   const navigate = useNavigate(); 
   const isSmallScreen = useScreenSize();

   const content = 
      <CustomImage 
         src="/images/fox-logo.png" 
         alt="Fox Logo"
         width="60px"
         height="60px"   
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
                  onClick={() => navigate('/', {relative: "route"})}
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