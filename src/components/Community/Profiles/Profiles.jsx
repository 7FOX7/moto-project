import { useScreenSize } from "../../../contexts/ScreenSizeContext";
import { useTheme } from "@emotion/react";
import CustomAvatar from "../../../customs/components/CustomAvatar"
import Grid2 from "@mui/material/Grid2"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ProfileContainer } from "../../../styles/style";
import CustomText from "../../../customs/components/CustomText";
import CustomButton from "../../../customs/components/CustomButton";

const Profiles = ({users}) => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 
   return (
         <>
            {users.map((user) => (
                  <ProfileContainer
                     key={user.id}
                     container
                     size={{xs: 12, sm: 5.9, md: 5.9, lg: 3.9, xl: 3.9}}
                     sx={{
                        background: !isSmallScreen && theme.palette.secondary.dark, 
                        borderRadius: !isSmallScreen ? "15px" : 0 
                     }}
                  >
                     <Grid2
                        container
                        columnSpacing={1.5}
                        alignItems="center"
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
                     <CustomButton 
                        content="View Profile"
                     />
                  </ProfileContainer>
            ))}
         </>
      )
}

export default Profiles
