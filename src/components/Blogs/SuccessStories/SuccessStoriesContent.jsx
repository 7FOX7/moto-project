import successStories from "../../../data/successStories"
import SuccessStory from "./SuccessStory"
import Grid2 from "@mui/material/Grid2"

const SuccessStoriesContent = () => {
   return (
      <>
         <Grid2
            container
            columns={12}
            rowSpacing={8}
            direction="column"   
            size={12}
            sx={{
               marginTop: "50px"
            }}
         >
            {successStories.map((story) => (
               <SuccessStory
                  key={story.id} 
                  story={story}
               />
            ))}
         </Grid2>
      </>
   )
}

export default SuccessStoriesContent