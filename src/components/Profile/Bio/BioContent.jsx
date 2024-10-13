import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import { useSelectedUser } from "../../../contexts/SelectedUserContext";
import { useTheme } from "@emotion/react";
import CustomText from "../../../customs/components/CustomText";
import { SemiTransparentBox } from "../../../styles/style";
import Grid2 from "@mui/material/Grid2"

const BioContent = () => {
   const isSmallScreen = useScreenSize(); 
   const {selectedUser} = useSelectedUser(); 
   const theme = useTheme(); 

   const {bio} = selectedUser
   return (
      <>
         <Grid2
            container
            columns={12}
            size={12}
            justifyContent="center"
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
               sx={{
                  margin: !isSmallScreen ? "20px" : 0,   
                  padding: "20px", 
                  background: theme.palette.common.black
               }}
            >
               <CustomText
                  text={bio}
                  textAlign="left"
                  typography={isSmallScreen ? theme.typography.profile.mobile.bioText : theme.typography.profile.desktop.bioText}
               />
            </Grid2> 
         </Grid2>
      </>
   )
}

export default BioContent