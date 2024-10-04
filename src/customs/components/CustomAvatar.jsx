import Avatar from "@mui/material/Avatar"

const CustomAvatar = ({content}) => {
   return (
      <>
         <Avatar
            width="40px"
            height="40px"
         >
            {content}
         </Avatar>
      </>
   )
}

export default CustomAvatar