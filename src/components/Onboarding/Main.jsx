import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OnboardingBox } from "../../styles/style";
import CustomLoadingBar from "../../customs/components/CustomLoadingBar";

const Main = () => {
   const [loadingProgress, setLoadingProgress] = useState(0);
   const navigate = useNavigate(); 

   useEffect(() => {
      const interval = setInterval(() => {
         setLoadingProgress((prevVal) => {
            if (prevVal >= 109) {
               clearInterval(interval);
               return prevVal; 
            }
            return prevVal + 1
         });
      }, 45);

      return () => clearInterval(interval);
   }, []);

   useEffect(() => {
      if (loadingProgress >= 109) {
         navigate('/home', {relative: "route"});
      }
   }, [loadingProgress, navigate]);

   return (
      <OnboardingBox>
         <CustomLoadingBar progress={loadingProgress} />
      </OnboardingBox>
   )
}

export default Main