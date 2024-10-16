import HotSubSection from "./HotSubSection"
import NewSubSection from "./NewSubSection"
import BestSubSection from "./BestSubSection"
import Grid2 from "@mui/material/Grid2"

const TopicContent = () => {
   return (
      <>
         <Grid2
            component="section"
            container
            columns={12}
            columnSpacing={{md: 2, lg: 4, xl: 8}}
            rowSpacing={3}
            size={12}
         >
            <HotSubSection />
            <NewSubSection />
            <BestSubSection />
         </Grid2>
      </>
   )
}

export default TopicContent