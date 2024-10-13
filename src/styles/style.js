import { styled } from "@mui/material/styles";
import theme from "../themes/theme";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";

export const LayoutBox = styled(Box)({
   position: "relative",
   height: "100%"
})

export const HeaderSection = styled(AppBar)({
   position: "fixed", 
   background: "linear-gradient(90deg, rgba(0,0,60,1) 0%, rgba(0,155,162,1) 100%)",
   color: theme.palette.primary.main 
})

export const FooterSection = styled(Box)({
   position: "relative",
   bottom: 0, 
   left: 0,  
   width: "100%",  
   zIndex: 100, 
   background: "radial-gradient(circle, rgba(0,85,93,1) 0%, rgba(3,0,40,1) 100%)", 
   color: theme.palette.primary.main
})

export const OnboardingBox = styled(Box)({
   width: "100%", 
   height: "100%", 
   backgroundColor: theme.palette.grey[500],
})

export const ContentBox = styled(Box)({
   position: "relative", 
   width: "100%",   
   padding: "10px 12px",
   marginBottom: "30px"
})

export const StyledAccordion = styled(Accordion)({
   width: "100%", 
   background: "transparent"
})

export const ContentTextBox = styled(Box)({
   position: "absolute", 
   top: "15%", 
   left: 0, 
   width: "100%", 
   height: "300px",
   display: "flex", 
   flexDirection: "column", 
   justifyContent: "center", 
   alignItems: "center", 
   padding: "10px", 
   scrollMarginTop: "110px"
})

export const ContentRotatedVideos = styled(Box)({
   position: "absolute", 
   top: "25%", 
   left: 0, 
   width: "100%", 
   display: "flex", 
   flexDirection: "column", 
   justifyContent: "center", 
   alignItems: "center", 
   padding: "10px", 
})

export const ContentReviewCarousel = styled(Box)({
   position: "absolute", 
   top: "35%", 
   left: 0, 
   width: "100%", 
   display: "flex",   
   alignItems: "center", 
   padding: "10px", 
   scrollMarginTop: "110px"
})

export const ReviewTextBox = styled(Box)({
   height: "200px",  
})

export const ReviewCarouselBox = styled(Box)({
   height: "250px", 
})

export const ContentRevealComponent = styled(Box)({
   position: "absolute", 
   top: "42%", 
   left: 0, 
   width: "100%",
   height: "4%",
   display: "flex", 
   alignItems: "end", 
})

export const RevealingComponent = styled(Box)({
   width: "fit-content", 
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

export const VideoContainer = styled(Box)({
   display: "flex", 
   alignItems: "center",
   scrollMarginTop: "95px"
})

export const StyledPaper = styled(Paper)({
   display: "flex",  
   borderRadius: "15px", 
})

export const VideoTextBox = styled(Box)({
   
})

export const SectionBox = styled(Box)({
   width: "100%",
   display: "flex", 
   flexDirection: "column",
   alignItems: "start", 
})

export const EventTypeBox = styled(Box)({
   position: "absolute", 
   top: "50%",
   left: "5px", 
   backgroundColor: theme.palette.grey[600], 
   padding: "4px 10px", 
   borderRadius: "25px"
})

export const ScrollableContainer = styled(Box)({ 
   height: "450px", 
   overflowY: "auto", 
   overflowX: "hidden", 
   backgroundColor: theme.palette.grey[300],
   padding: "12px"
})

export const EmbeddedVideoContainer = styled(Box)({
   width: "100%", 
   height: "100%", 
   display: "flex",
   justifyContent: "center", 
   alignItems: "center", 
})

export const SubSectionBox = styled(Grid2)({
   height: "100%", 
   alignItems: "start",  
   marginTop: "15px", 
})

export const SearchSectionContainer = styled(Grid2)({ 
   width: "100%"
})

export const SearchBarContainer = styled(Box)({
   width: "100%"
})

export const SearchBar = styled(TextField)({
   background: theme.palette.common.white, 
})

export const SearchListContainer = styled(Grid2)({
   width: "100%", 
   height: "400px", 
   marginTop: "20px", 
   overflowY: "auto"
})

export const ProfileContainer = styled(Grid2)({
   height: "100px", 
   alignItems: "center",
   justifyContent: "space-between", 
   padding: "10px"
})

export const StyledButton = styled(Button)({
   borderRadius: "25px",
   backgroundColor: theme.palette.common.black 
})

export const TipSectionBox = styled(Box)({
   width: "300px", 
   height: "500px", 
})

export const MarginBox = styled(Box)({
   margin: "10px", 
   display: "flex", 
   justifyContent: "center", 
})

export const FaqCategoryBox = styled(Box)({
   width: "100%", 
   display: "flex", 
   justifyContent: "center", 
   alignItems: "center"
})

export const FaqCategoryLine = styled(Box)({
   height: "1.5px",  
   width: "25%",
   marginInline: "10px", 
   background: theme.palette.common.white, 
})