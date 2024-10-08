import { useScreenSize } from "../../contexts/ScreenSizeContext"
import CustomHeading from "../../customs/components/CustomHeading"
import Content from "../Shared/Content"
import VideoSection from "./Videos/VideoSection"
import EventSection from "./Events/EventSection"
import ArtSection from "./Arts/ArtSection"
import Grid2 from "@mui/material/Grid2"

const Main = () => {
   const isSmallScreen = useScreenSize()
   return (
      <Content>
         <CustomHeading
            text="Rides"
         />
         {!isSmallScreen ?
            <Grid2
               component="section"
               container
               columns={12}
               columnSpacing={2} 
               size={12}
            >
               <Grid2
                  container
                  size={3.5}
               >
                  <ArtSection />
               </Grid2>
               <Grid2
                  container
                  size={5}
               >
                  <VideoSection />
               </Grid2>
               <Grid2
                  container
                  size={3.5}
               >
                  <EventSection />
               </Grid2>
            </Grid2>
            :
            <>
               <VideoSection />
               <EventSection />
               <ArtSection />
            </> 
         }
      </Content>
   )
}

export default Main