import Grid2 from "@mui/material/Grid2"

const SuccessStoriesContent = () => {
    return (
        <>
            <Grid2
               component="section"
               container
               columns={12}
               columnSpacing={2} 
               size={12}
               sx={{
                  background: "green"
               }}
            >
                <p>still something to prove</p>
            </Grid2>
        </>
    )
}

export default SuccessStoriesContent

/*
    sample implementation: 

    successStoriesContent = () => {
        return (
            <Box>

            </Box>
        )    
    }
*/