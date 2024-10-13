import Avatar from "@mui/material/Avatar"

const CustomAvatar = ({content, width="40px", height="40px"}) => {
   return (
      <>
         <Avatar
            sx={{
               width: width, 
               height: height
            }}
         >
            {content}
         </Avatar>
      </>
   )
}

export default CustomAvatar