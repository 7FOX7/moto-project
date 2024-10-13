
import { useScreenSize } from "../../contexts/ScreenSizeContext";
import { useTheme } from "@emotion/react";
import Content from "../Shared/Content";
import CustomHeading from "../../customs/components/CustomHeading";
import { SemiTransparentBox } from "../../styles/style";
import GeneralSection from "./General/GeneralSection";
import InterestsSection from "./Interests/InterestsSection";
import ActivitySection from "./Activity/ActivitySection";
import BioSection from "./Bio/BioSection";
import Grid2 from "@mui/material/Grid2";

const Main = () => { 
   const theme = useTheme(); 
   const isSmallScreen = useScreenSize();    
   
   return (
      <Content>
         <CustomHeading 
            text="Profile"
         />
            <Grid2
               container
               columns={12}
               columnSpacing={2}
               size={12}
               sx={{
                  position: "relative"
               }}
            >
               {isSmallScreen ?
                  <>
                     <SemiTransparentBox
                        sx={{
                           background: theme.palette.secondary.main
                        }} 
                     />
                     <GeneralSection />
                     <br />
                     <BioSection />
                     <br />
                     <InterestsSection />
                     <br />
                     <ActivitySection />
                  </> 
                  : 
                  <>
                     <Grid2
                        container
                        rowSpacing={4}
                        size={3}
                     >
                        <GeneralSection />
                        <InterestsSection />
                     </Grid2>
                     <Grid2
                        container
                        size={6}
                     >
                        <ActivitySection />
                     </Grid2>
                     <Grid2
                        container
                        size={3}
                     >
                        <BioSection />
                     </Grid2>
                  </>
               }
            </Grid2>  
         
      </Content>
   )
}

export default Main


/*

import CustomHeading from "../../customs/components/CustomHeading"
import Content from "../Shared/Content"
import SuccessStoriesSection from "./SuccessStories/SuccessStoriesSection"
import CallToActionSection from "./SuccessStories/CallToActionSection"

const Main = () => {
   return (
      <Content>
         <CustomHeading
            text="Blogs"
         /> 
         <SuccessStoriesSection />
         <br />
         <br />
         <CallToActionSection />
      </Content>
   )
}

export default Main

*/