import { useScreenSize } from "../../contexts/ScreenSizeContext"
import CustomHeading from "../../customs/components/CustomHeading"
import Content from "../Shared/Content"
import ProfileSection from "./ProfileSection"
import TipSection from "./TipSection"
import TopicSection from "./TopicSection"
import Grid2 from "@mui/material/Grid2"

const Main = () => {
   const isSmallScreen = useScreenSize()
   return (
      <Content>
         <CustomHeading
            text="Community"
         />
         {isSmallScreen ? 
            <>
               <TopicSection />
               <ProfileSection />
               <TipSection />  
            </>
            : 
            <Grid2
               container
               size={12}
            >
               <p>You are on a large Screen</p>
            </Grid2>
         }
      </Content>
   )
}

export default Main 