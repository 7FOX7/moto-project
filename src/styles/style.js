import { styled } from "@mui/material/styles";
import theme from "../themes/theme";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

export const HeaderSection = styled(AppBar)({
   position: "fixed", 
   background: "linear-gradient(90deg, rgba(0,0,60,1) 0%, rgba(0,155,162,1) 100%)",
   color: theme.palette.primary.main 
})

export const FooterSection = styled(Box)({
   position: "absolute",
   top: "100%", 
   left: 0,  
   width: "100%",  
   background: "radial-gradient(circle, rgba(0,85,93,1) 0%, rgba(3,0,40,1) 100%)", 
   color: theme.palette.primary.main
})

export const LinkContent = styled(Typography)({
   textWrap: "nowrap", 
})

export const OnboardingBox = styled(Box)({
   width: "100vw", 
   height: "100vh", 
   display: "flex", 
   alignItems: "center", 
   backgroundColor: theme.palette.grey[500],
})

export const HomeBox = styled(Box)({
   height: "100vh", 
   display: "flex", 
   alignItems: "center",
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