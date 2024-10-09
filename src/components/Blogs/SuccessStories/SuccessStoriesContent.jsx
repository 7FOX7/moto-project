import successStories from "../../../data/successStories"
import SuccessStory from "./SuccessStory"
import Grid2 from "@mui/material/Grid2"

const SuccessStoriesContent = () => {
   return (
      <>
         <Grid2
            container
            columns={12}
            columnSpacing={2}
            direction={{xs: "column", md: "row"}}   
            size={12}
            sx={{
               background: "green"
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