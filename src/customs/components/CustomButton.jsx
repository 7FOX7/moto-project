import Box from "@mui/material/Box"
import { StyledButton } from "../../styles/style"

const CustomButton = ({content}) => {
   return (
      <>
         <Box>
            <StyledButton>
               {content}
            </StyledButton>
         </Box>
      </>
   ) 
}

export default CustomButton