import { styled } from "@mui/material/styles";
import theme from "../themes/theme";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

export const LayoutBox = styled(Box)({
   position: "relative",
   height: "900vh"
})

export const HeaderSection = styled(AppBar)({
   position: "fixed", 
   background: "linear-gradient(90deg, rgba(0,0,60,1) 0%, rgba(0,155,162,1) 100%)",
   color: theme.palette.primary.main 
})

export const FooterSection = styled(Box)({
   position: "absolute",
   bottom: 0, 
   left: 0,  
   width: "100%",  
   zIndex: 100, 
   background: "radial-gradient(circle, rgba(0,85,93,1) 0%, rgba(3,0,40,1) 100%)", 
   color: theme.palette.primary.main
})

export const LinkContent = styled(Typography)({
   textWrap: "nowrap", 
})

export const OnboardingBox = styled(Box)({
   width: "100%", 
   height: "100%", 
   backgroundColor: theme.palette.grey[500],
})

export const HomeBox = styled(Box)({
   width: "100%", 
   height: "900vh",  
   padding: "10px", 
})

export const ContentBox = styled(Box)({
   position: "relative", 
   width: "100%", 
   height: "100%", 
})

export const ContentTextBox = styled(Box)({
   position: "absolute", 
   top: "30%", 
   left: 0, 
   width: "100%", 
   height: "300px",
   display: "flex", 
   flexDirection: "column", 
   justifyContent: "center", 
   alignItems: "center", 
   padding: "10px"
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

export const VideoChunkContainer = styled(Box)({
   width: "100%",  
   display: "flex", 
   alignItems: "center",
})

export const VideoChunk = styled(Paper)({
   display: "flex",  
   borderRadius: "15px",
   margin: "30px" 
})

export const VideoChunkText = styled(Box)({
   margin: "20px"
})

/*
   <VideoChunkContainer sx={{d: flex, fd: column, yada ... }}>
      <VideoChunk />
      <VideoChunk />
      <VideoChunk />
      <VideoChunk />
      ... 

   </VideoChunkContainer>

   assuming <VideoChunk /> will contain also the text inside: 

   <VideoWithText sx={{display: "flex", width: "100%", isMobile: "fd: column" : "row", }}>
      <VideoChunk>
         <video />
      </VideoChunk>
      <TextContainer />
   </VideoWithText>
*/ 

