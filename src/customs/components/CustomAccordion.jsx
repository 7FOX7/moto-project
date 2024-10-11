import CustomText from "./CustomText"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CustomAccordion = ({expanded, header, content, onChange}) => {
   return (
      <>
         <Accordion
            expanded={expanded}
            onChange={onChange}
         >
            <AccordionSummary
               expandIcon={<KeyboardArrowDownIcon />}
            >
               <CustomText
                  color="black"        // use theme if using black color
                  text={header}
               />
            </AccordionSummary>
            <AccordionDetails>
               <CustomText
                  color="black"         // same goes here
                  text={content}
               />
            </AccordionDetails>
         </Accordion>
      </>
   )
}

export default CustomAccordion