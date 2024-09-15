import { useScreenSize } from "../../contexts/ScreenSizeContext";
import { LoadingBarContainer } from "../../styles/style";
import { BorderLinearProgress } from "../../styles/style";

const CustomLoadingBar = ({ progress }) => {
   const isSmallScreen = useScreenSize(); 
   return (
      <LoadingBarContainer>
         <BorderLinearProgress
            sx={{
               width: isSmallScreen ? "60%" : "30%"
            }} 
            variant="determinate"
            value={progress} 
         />
      </LoadingBarContainer>
   )
}
 
export default CustomLoadingBar