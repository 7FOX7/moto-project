import { useState } from "react";
import { useEffect } from "react";
import CustomLoadingBar from "../../customs/components/CustomLoadingBar";
import { OnboardingBox } from "../../styles/style";

const Main = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [loadingProgress, setLoadingProgress] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setLoadingProgress((prevVal) => {
            if (prevVal >= 110) {
               clearInterval(interval);
               setIsLoading(false);
               return 110;
            }
            return prevVal + 1;
         });
      }, 60);

      return () => clearInterval(interval);
   }, []);

   if (!isLoading) {
      return <p>it stopped loading</p>
   }
   return (
      <OnboardingBox>
         <CustomLoadingBar progress={loadingProgress} />
      </OnboardingBox>
   )
}

export default Main
