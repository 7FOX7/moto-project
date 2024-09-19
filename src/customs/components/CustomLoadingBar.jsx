import { useScreenSize } from "../../contexts/ScreenSizeContext";
import { LoadingBarContainer } from "../../styles/style";
import { BorderLinearProgress } from "../../styles/style";

const CustomLoadingBar = () => {
   const isSmallScreen = useScreenSize(); 
   return (
      <>
         <LoadingBarContainer>
            <BorderLinearProgress
               sx={{
                  width: isSmallScreen ? "60%" : "30%"
               }} 
            />
         </LoadingBarContainer>
      </>
   )
}
 
export default CustomLoadingBar