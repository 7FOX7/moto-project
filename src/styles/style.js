import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import theme from "../themes/theme";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";

export const OnboardingBox = styled(Box)({
   width: "100vw", 
   height: "100vh", 
   display: "flex", 
   alignItems: "center", 
   backgroundColor: theme.palette.common.black, 
})

export const LoadingBarContainer = styled(Box)({
   width: "100%", 
   display: "flex", 
   justifyContent: "center"
})

export const BorderLinearProgress = styled(LinearProgress)({
   height: 4, 
   borderRadius: theme.shape.borderLinearProgress.borderRadius, 
   [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[700]
   }, 
   [`& .${linearProgressClasses.bar}`]: {
      borderRadius: theme.shape.borderLinearProgress.borderRadius, 
      backgroundColor: theme.palette.global.borderLinearProgress.main
   }
})