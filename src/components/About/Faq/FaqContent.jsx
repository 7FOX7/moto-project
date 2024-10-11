import { useState } from "react"
import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomAccordion from "../../../customs/components/CustomAccordion"
import CustomText from "../../../customs/components/CustomText"
import faqs from "../../../data/faqs"
import Grid2 from "@mui/material/Grid2"

const FaqContent = () => {
   const [expanded, setExpanded] = useState(null); 
   const isSmallScreen = useScreenSize();
   const theme = useTheme(); 
   
   function handleChange(id) {
      setExpanded(id)
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
            sx={{
               background: "red"
            }}
         >
            {faqs.map((faq) => {
               const subFaqs = faq.faqs; 
               return (
               <Grid2
                  key={faq.id}
                  component="article"
                  container
                  size={{xs: 12, sm: 12, md: 12, lg: 8, xl: 6}}
                  sx={{
                     background: "green"
                  }}
               >
                  <CustomText
                     color={theme.palette.common.black}
                     text={faq.category}
                  />
                  {subFaqs.map((faq) => (
                     <CustomAccordion
                        key={faq.id}
                        expanded={expanded == faq.id}
                        header={faq.question}
                        content={faq.answer}
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