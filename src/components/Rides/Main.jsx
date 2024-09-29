import { useScreenSize } from "../../contexts/ScreenSizeContext"
import Content from "../Shared/Content"
import VideoSection from "./VideoSection"
import EventSection from "./EventSection"
import ArtSection from "./ArtSection"
import Heading from "./Heading"
import Grid2 from "@mui/material/Grid2"

const contentHeight = "300vh"
const Main = () => {
   const isSmallScreen = useScreenSize()
   return (
      <Content 
         height={contentHeight}
      >
         <Heading />
         {!isSmallScreen ?
            <Grid2
               container
               columnSpacing={{md: 3, lg: 4, xl: 4}} 
               size={12}
               justifyContent="center"
            >
               <Grid2
                  container
                  size={3}
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
                  size={4}
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