import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import CustomCarousel from "../../../customs/components/CustomCarousel"
import CustomImage from "../../../customs/components/CustomImage"
import Grid2 from "@mui/material/Grid2"
import arts from "../../../data/arts"

const ArtContent = () => {
   const isSmallScreen = useScreenSize();  
   return (
      <>
         {isSmallScreen ?
            <CustomCarousel
               data={arts}
               type="art"
            />
            : 
            <Grid2
               container
               size={12}
            > 
               <CustomImage
                  src={arts[0].imgSrc}
                  alt={arts[0].imgAlt}
                  width="100%"
                  height="450px"
                  borderRadius="15px"
               />
            </Grid2>
         }         
      </>
   )
}

export default ArtContent