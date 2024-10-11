import { useScreenSize } from "../../contexts/ScreenSizeContext";
import { useTheme } from "@emotion/react";
import CustomText from "./CustomText"
import { StyledAccordion } from "../../styles/style";
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CustomAccordion = ({expanded, header, content, background, onChange}) => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 
   return (
      <>
         <StyledAccordion
            expanded={expanded}
            onChange={onChange}
            sx={{
               background: background
            }}
         >
            <AccordionSummary
               expandIcon={<KeyboardArrowDownIcon color="primary"/>}
            >
               <CustomText
                  color={theme.palette.secondary.main}        // use theme if using black color
                  text={header}
                  typography={isSmallScreen ? theme.typography.global.mobile.accordionHeader : theme.typography.global.desktop.accordionHeader}
               />
            </AccordionSummary>
            <AccordionDetails>
               <CustomText
                  text={content}
                  textAlign="left"
                  typography={isSmallScreen ? theme.typography.global.mobile.accordionContent : theme.typography.global.desktop.accordionContent}
               />
            </AccordionDetails>
         </StyledAccordion>
      </>
   )
}

export default CustomAccordion