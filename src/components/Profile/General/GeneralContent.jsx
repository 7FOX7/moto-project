import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import { useSelectedUser } from "../../../contexts/SelectedUserContext";
import { useTheme } from "@emotion/react";
import { SemiTransparentBox } from "../../../styles/style";
import CustomAvatar from "../../../customs/components/CustomAvatar";
import CustomText from "../../../customs/components/CustomText";
import Grid2 from "@mui/material/Grid2"
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import DateRangeIcon from '@mui/icons-material/DateRange';

const GeneralContent = () => {
   const isSmallScreen = useScreenSize(); 
   const {selectedUser} = useSelectedUser(); 
   const theme = useTheme();
   
   const {username, email, registrationDate, likes} = selectedUser 
   return (
      <>
         <Grid2
            container
            columns={12}
            size={12}
            sx={{
               position: "relative", 
            }}
         > 
            {!isSmallScreen && 
               <SemiTransparentBox
                  sx={{
                     background: theme.palette.secondary.main
                  }}
               />
            }
            <Grid2
               container
               size={12}
               justifyContent="center"
            >
               <CustomAvatar 
                  width="150px"
                  height="150px"
                  content={username.charAt(0)}
               />
            </Grid2>
            <Grid2
               container
               size={12}
               justifyContent="center"
            >
               <CustomText 
                  color={theme.palette.secondary.main}
                  text={username}
                  typography={isSmallScreen ? theme.typography.profile.mobile.generalContentUsername : theme.typography.profile.desktop.generalContentUsername}
               />
            </Grid2>
            <Grid2
               container
               rowSpacing={{xs: 2, md: 3}}
               columns={12}
               size={12}
            >
               <Grid2
                  container
                  rowSpacing={0.5}
                  direction="column"
                  alignItems="center"
                  size={{xs: 12, sm: 2, md: 12, lg: 2, xl: 2}}
               >
                  <FavoriteIcon />
                  <CustomText 
                     text={likes}
                  />
               </Grid2>
               <Grid2
                  container
                  rowSpacing={0.5}
                  direction="column"
                  alignItems="center"
                  size={{xs: 12, sm: 7, md: 12, lg: 7, xl: 7}}
               >
                  <EmailIcon />
                  <CustomText
                     text={email}
                  />
               </Grid2>
               <Grid2
                  container 
                  rowSpacing={0.5}
                  direction="column"
                  alignItems="center"
                  size={{xs: 12, sm: 3, md: 12, lg: 3, xl: 3}}
               >
                  <DateRangeIcon />
                  <CustomText
                     text={registrationDate}
                  />
               </Grid2>
            </Grid2>
         </Grid2>
      </>
   )
}

export default GeneralContent