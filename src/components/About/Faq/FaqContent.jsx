import { useState } from "react"
import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomAccordion from "../../../customs/components/CustomAccordion"
import CustomText from "../../../customs/components/CustomText"
import { FaqCategoryBox } from "../../../styles/style"
import { FaqCategoryLine } from "../../../styles/style"
import faqs from "../../../data/faqs"
import Grid2 from "@mui/material/Grid2"

const FaqContent = () => {
   const [expanded, setExpanded] = useState(null); 
   const isSmallScreen = useScreenSize();
   const theme = useTheme(); 
   
   function handleChange(id) {
      expanded === id ? setExpanded(null) : setExpanded(id)
   }

   return (
      <>
         <Grid2
            component="section"
            container
            columns={12}
            columnSpacing={4}
            direction="column"
            size={12}
            alignItems="center"
         >
            {faqs.map((faq) => {
               const subFaqs = faq.faqs; 
               return (
               <Grid2
                  key={faq.id}
                  component="article"
                  container
                  size={{xs: 12, sm: 12, md: 12, lg: 10, xl: 8}}
                  justifyContent="center"
               >
                  <FaqCategoryBox>
                     <FaqCategoryLine />
                     <CustomText
                        color={theme.palette.common.white}
                        text={faq.category}
                        typography={isSmallScreen ? theme.typography.about.mobile.faqSection.category : theme.typography.about.desktop.faqSection.category}
                     />
                     <FaqCategoryLine />
                  </FaqCategoryBox>
                  {subFaqs.map((faq) => (
                     <CustomAccordion
                        key={faq.id}
                        expanded={expanded === faq.id}
                        header={`Q: ${faq.question}`}
                        content={`A: ${faq.answer}`}
                        background="rgba(0, 0, 0, 0.4)"
                        onChange={() => handleChange(faq.id)}
                     />
                  ))}
               </Grid2>
               )
            })}
         </Grid2>
      </>
   )
}

export default FaqContent

/*
   
*/