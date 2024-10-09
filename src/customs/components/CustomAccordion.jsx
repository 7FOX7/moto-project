import CustomText from "./CustomText"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"

const CustomAccordion = ({header, content}) => {
   return (
      <>
         <Accordion>
            <AccordionSummary>
               <CustomText
                  color="black"        // use theme if using black color
                  text={header}
               />
            </AccordionSummary>
            <AccordionDetails>
               <CustomText
                  color="black"         // same goes here
                  text="Still something to prove"
               />
            </AccordionDetails>
         </Accordion>
      </>
   )
}

export default CustomAccordion