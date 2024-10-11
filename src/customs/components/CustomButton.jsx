import { StyledButton } from "../../styles/style"

const CustomButton = ({content, style, onClick}) => {
   return (
      <>
         <StyledButton 
            sx={style}
            onClick={onClick} 
         >
            {content}
         </StyledButton>
      </>
   ) 
}

export default CustomButton