import { Fragment } from "react";
import CustomAvatar from "../../customs/components/CustomAvatar"
import Grid2 from "@mui/material/Grid2"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ProfileContainer } from "../../styles/style";
import CustomText from "../../customs/components/CustomText";
import CustomButton from "../../customs/components/CustomButton";
import { Divider } from "@mui/material";

/*
   TODO: make this a custom component in case you will have more profile lists
*/

const Profiles = ({users}) => {
   return (
         <>
            {users.map((user, index) => (
               <Fragment key={user.id}>
                  <ProfileContainer
                     container
                     size={12}
                  >
                     <Grid2
                        container
                        columnSpacing={2}
                     >
                        <CustomAvatar
                           content={user.username.charAt(0)}
                        />
                        <Grid2>
                           <CustomText 
                              text={user.username}
                           />
                           <Grid2
                              container
                              alignItems="center"
                           >
                              <Grid2
                                 sx={{
                                    color: "#fff"
                                 }}
                              >
                                 <FavoriteIcon color="inrerit" />
                              </Grid2>
                              <Grid2
                                 sx={{marginLeft: "5px"}}
                              >
                                 <CustomText
                                    text={user.likes}
                                 />
                              </Grid2>
                           </Grid2>
                        </Grid2>
                     </Grid2>
                     <Grid2
                        container
                     >
                        <CustomButton 
                           content="View Profile"
                        />
                     </Grid2>
                  </ProfileContainer>
                  {
                     index < users.length - 1 && 
                     <>
                        <br />
                        <Divider 
                           variant="middle"
                        />
                        <br />
                     </>
                  }
               </Fragment>
            ))}
         </>
      )
}

export default Profiles
