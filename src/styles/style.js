import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import theme from "../themes/theme";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";

export const HeaderAppBar = styled(AppBar)({
   position: "fixed", 
   background: "linear-gradient(90deg, rgba(0,0,60,1) 0%, rgba(0,155,162,1) 100%)",
   color: theme.palette.primary.main 
})

export const OnboardingBox = styled(Box)({
   width: "100vw", 
   height: "100vh", 
   display: "flex", 
   alignItems: "center", 
   backgroundColor: theme.palette.grey[500],
})

export const LoadingBarContainer = styled(Box)({
   width: "100%", 
   height: "100vh",
   display: "flex", 
   justifyContent: "center", 
   alignItems: "center",
   backgroundColor: theme.palette.common.black,
})

export const BorderLinearProgress = styled(LinearProgress)({
   boxShadow: theme.shadows.borderLinearProgress[1],
   height: 4,  
   borderRadius: theme.shape.borderLinearProgress.borderRadius, 
   [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[700], 
   }, 
   [`& .${linearProgressClasses.bar}`]: {
      borderRadius: theme.shape.borderLinearProgress.borderRadius, 
      background: theme.palette.global.borderLinearProgress.main, 
   }
})