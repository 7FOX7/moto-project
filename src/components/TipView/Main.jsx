import { useScreenSize } from "../../contexts/ScreenSizeContext"
import Content from "../Shared/Content"
import TipViewSection from "./TipViewSection"
import Grid2 from "@mui/material/Grid2"

const Main = () => {
   const isSmallScreen = useScreenSize()    
   return (
      <Content>
         <Grid2
            container
            columns={12}
            size={12}
            justifyContent="center"
            sx={{
               marginTop: isSmallScreen ? "150px" : "220px", 
            }}
         >
            <Grid2
               container
               columns={12}
               size={{xs: 12, sm: 10, md: 6, lg: 6, xl: 6}}
            >
               <TipViewSection />
            </Grid2>
         </Grid2>
      </Content>
   )   
}

export default Main