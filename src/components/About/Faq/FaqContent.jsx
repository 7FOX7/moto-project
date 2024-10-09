import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomAccordion from "../../../customs/components/CustomAccordion"
import CustomText from "../../../customs/components/CustomText"
import faqs from "../../../data/faqs"
import Grid2 from "@mui/material/Grid2"

const FaqContent = () => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 
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
            {faqs.map((faq) => (
               <Grid2
                  component="article"
                  container
                  size={{xs: 12, sm: 12, md: 12, lg: 8, xl: 6}}
                  sx={{
                     background: "green"
                  }}
               >
                  <CustomText
                     text={faq.category}
                     typography={isSmallScreen ? theme.typography.about.mobile.faqSection.category : theme.typography.about.mobile.faqSection.category }
                  />
               </Grid2>
            ))}
         </Grid2>
      </>
   )
}

export default FaqContent