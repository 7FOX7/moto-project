import IconButton from "@mui/material/IconButton"

const CustomIconButton = ({icon, onClick, ariaLabel}) => {
   return (
      <>
         <IconButton 
            onClick={onClick} 
            color="inherit"
            aria-label={ariaLabel}
         >
            {icon}
         </IconButton>
      </>
   )
}

export default CustomIconButton