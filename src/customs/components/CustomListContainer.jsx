import { useScreenSize } from "../../contexts/ScreenSizeContext"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import navLinks from "../../data/navLinks"
import Typography from "@mui/material/Typography"
import CustomNavLink from "./CustomNavLink"

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
                     {/* <ListItemButton>
                        <Typography sx={{textWrap: "nowrap"}}>{navLink.title}</Typography>
                     </ListItemButton> */}
                     <CustomNavLink path={navLink.path} title={navLink.title} bold={false} />
                  </ListItem>
               )
            })}
         </List>
      )
   }, 
   footer: () => {
      const isSmallScreen = useScreenSize()
      return (
         <List>
            <img
               src="/images/fox_logo.png" 
               style={{
                  width: "200px", 
                  height: "200px", 
               }} 
            />
            {navLinks.map((navLink) => {
               return (
                  <ListItem key={navLink.id}>
                     {/* <CustomNavLink path={navLink.path} text={navLink.title} bold={true} />
                     {navLink.subLinks && navLink.subLinks.length > 0 && (
                        <List>
                           {navLink.subLinks.map((subLink) => {
                              return (
                                 <ListItem key={subLink.id}>
                                    <CustomNavLink path={subLink.path} text={subLink.title} bold={false} />
                                 </ListItem>
                              )
                           })}
                        </List>
                     )} */}
                     <ListItemButton>
                        {navLink.title}
                     </ListItemButton>
                  </ListItem>
               )
            })}
         </List>
      )
   }
}

export default CustomListContainer

/*
   assume I have an array which contains the nav links: 

   const navLinks = [
   {
      id: "workoutLink", 
      title: "Workout", 
      path: "/workout", 
      subLinks: [
         {
            id: "workoutVideos", 
            title: "Videos", 
            path: "/videos"
         }, 
         {
            id: "workoutPrograms", 
            title: "Programs", 
            path: "/programs"
         }, 
      ] 
   },
   {
      ... other links
   } 

   and, I have a Component which displays the links in the List. The code looks like this: 

   const CustomListContainer = () => {
      return (
         <List>
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
   }

   but, what if I want to also display the sublinks? The code could look like this: 

   const CustomListContainer = () => {
      return (
         <List>
            {navLinks.map((navLink) => {
               return (
                  <ListItem key={navLink.id}>
                     <ListItemButton>
                        <Typography sx={{textWrap: "nowrap"}}>{navLink.title}</Typography>
                     </ListItemButton>
                     {navLink.map((subLink) => {
                        <ListItemButton>
                           <Typography sx={{textWrap: "nowrap"}}>{subLink.title}</Typography>
                        </ListItemButton>
                     })}
                  </ListItem>
               )
            })}
         </List>
      )   
   }

   the question is: should I create a different ListItem for the subLink, or I should fit both 
   mainLink and subLink inside a single ListItem? The code with the separate ListItem can look like: 

   const CustomListContainer = () => {
      return (
         <List>
            {navLinks.map((navLink) => {
               return (
                  <ListItem key={navLink.id}>
                     <ListItemButton>
                        <Typography sx={{textWrap: "nowrap"}}>{navLink.title}</Typography>
                     </ListItemButton>
                  </ListItem>
                  {navLink.map((subLink) => {
                     <ListItem key={subLink.id}>
                        <ListItemButton>
                           <Typography sx={{textWrap: "nowrap"}}>{subLink.title}</Typography>
                        </ListItemButton>
                     </ListItem>
                  })}
               )
            })}
         </List>
      )   
   }

   <ListItem key={navLink.id}>
      <ListItemButton>
         <Typography sx={{ textWrap: 'nowrap' }}>{navLink.title}</Typography>
      </ListItemButton>
      {navLink.subLinks && navLink.subLinks.length > 0 && (
         <List component="div" disablePadding>
            {navLink.subLinks.map((subLink) => (
               <ListItem key={subLink.id}>
                  <ListItemButton>
                     <Typography sx={{ textWrap: 'nowrap' }}>{subLink.title}</Typography>
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      )}
   </ListItem>
*/