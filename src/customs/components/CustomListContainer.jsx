import { useScreenSize } from "../../contexts/ScreenSizeContext"
import CustomNavLink from "./CustomNavLink"
import CustomLinkIcon from "./CustomLinkIcon"
import CustomText from "./CustomText"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Grid from '@mui/material/Grid2'
import navLinks from "../../data/navLinks"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"
import networkLinks from "../../data/networkLinks"

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
                     <CustomNavLink 
                        path={navLink.path} 
                        title={navLink.title}
                        bold={true}    
                     />
                  </ListItem>
               )
            })}
         </List>
      )
   }, 
   footer: () => {
      return (
         <Box sx={{
            padding: "20px 25px"
         }}>
            <Grid
            container
            columns={12}
            size={12}
         >
            <Grid 
               size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}}
            >
               <img
                  src="/images/fox_logo.png" 
                  draggable="false"
                  style={{
                     width: "100px", 
                     height: "100px", 
                  }} 
               />
            </Grid>
            <Grid 
               container 
               columns={12}
               columnSpacing={12}
               rowSpacing={3}
               size={{xs: 12, sm: 12, md: 8, lg: 8, xl: 8}}
            >
               {navLinks.map((navLink) => {
                  return (
                        <Grid 
                        key={navLink.id} 
                        size={{xs: 12, sm: 6, md: 2, lg: 2, xl: 2}}
                     >
                        <CustomNavLink 
                           path={navLink.path} 
                           title={navLink.title}
                           bold={true} 
                        />
                        {navLink.subLinks && navLink.subLinks.length > 0 && (
                           navLink.subLinks.map((subLink) => {
                              return (
                                 <Grid 
                                    key={subLink.id}
                                 >
                                    <CustomNavLink 
                                       path={subLink.path} 
                                       title={subLink.title} 
                                       secondary={true} 
                                    />
                                 </Grid>
                              )
                           })
                        )}
                     </Grid>
                  )
               })}
            </Grid>
         </Grid>
         <br />
         <Divider orientation="horizontal" sx={{background: "white"}} />
         <br />
         {/* TODO: Create a custom component that will contain the text */}
         <Grid
            container
            columns={12}
            size={12}
            alignItems="center"
         >
            <Grid 
               size={{xs: 12, sm: 12, md: 8, lg: 8, xl: 8}}
            >
               <CustomText 
                  text="Copyright &copy; 2024 7FOX7. All rights reserved." 
                  secondary={true}
                  variant="body2"
               />
            </Grid>
            <Grid
               container
               columnSpacing={{xs: 6, sm: 6, md: 6, lg: 6, xl: 2}}
               size={{xs: 12, sm: 8, md: 4, lg: 4, xl: 4}}
            >
               {networkLinks.map((networkLink) => {
                  return (
                     <Grid 
                        key={networkLink.id} 
                        size={1}
                     >
                        <CustomLinkIcon 
                           url={networkLink.url} 
                           href={networkLink.href} 
                        />
                     </Grid>
                  )
               })}
            </Grid>
         </Grid>
         </Box>
      )
   }
}

export default CustomListContainer
