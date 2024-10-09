import { StyledButton } from "../../styles/style"

const CustomButton = ({content, style}) => {
   return (
      <>
         <StyledButton sx={style}>
            {content}
         </StyledButton>
      </>
   ) 
}

export default CustomButton