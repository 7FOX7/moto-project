import { useMemo } from "react"
import { useTheme } from "@emotion/react"
import CustomImage from "../../../customs/components/CustomImage"
import CustomText from "../../../customs/components/CustomText"
import CustomButton from "../../../customs/components/CustomButton"
import Grid2 from "@mui/material/Grid2"

const imageData = {
   imgSrc: "/images/art-idle-biker.jpg", 
   imgAlt: "Default Alt"
}

const href = "mailto:kheeugene@gmail.com"

const CallToActionContent = () => {
   const theme = useTheme(); 

   const style = useMemo(() => {
      const styling = {
         fontSize: "1.1rem",
         fontWeight: 600,  
         background: theme.palette.secondary.main, 
         padding: "15px 35px"
      }
      return styling
   }, [])
   
   function handleClick() {
      window.location.href=href
   }

   return (
      <>
         <Grid2
            component="article"
            container
            columns={12}
            spacing={5}
            size={12}
            sx={{
               marginTop: "100px", 
            }}
         >
            <Grid2
               container
               spacing={0.5}
               size={{xs: 12, sm: 6, md: 6, lg: 6, xl: 6}}
               direction="column"
               alignItems="center"
            >
               <Grid2
                  container
               >
                  <CustomText 
                     text="Want to share your story with others?"
                     typography={theme.typography.blogs.callToAction.standard}
                  />
               </Grid2>
               <Grid2
                  container
               >
                  <CustomText 
                     color={theme.palette.secondary.main}
                     text="Email us!"
                     typography={theme.typography.blogs.callToAction.bigger}
                  />     
               </Grid2>
               <Grid2
                  container
               >
                  <CustomText 
                     text="Let other folks now"
                     typography={theme.typography.blogs.callToAction.standard}
                  />
               </Grid2>
               <Grid2
                  container
               >
                  <CustomButton
                     content="Email us"
                     onClick={handleClick}
                     style={style}
                  />
               </Grid2>
            </Grid2>
            <Grid2
               container
               size={{xs: 12, sm: 6, md: 6, lg: 6, xl: 6}}
            >
               <CustomImage 
                  src={imageData.imgSrc}
                  alt={imageData.imgAlt}
                  width="100%"
                  height="300px"
               />
            </Grid2>
         </Grid2>
      </>
   )
}

export default CallToActionContent


