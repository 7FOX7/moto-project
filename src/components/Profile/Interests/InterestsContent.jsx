import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import { useSelectedUser } from "../../../contexts/SelectedUserContext";
import { useTheme } from "@emotion/react";
import { SemiTransparentBox } from "../../../styles/style";
import { ColorBox } from "../../../styles/style";
import CustomList from "../../../customs/components/CustomList";
import Grid2 from "@mui/material/Grid2"

const InterestsContent = () => {
   const isSmallScreen = useScreenSize(); 
   const {selectedUser} = useSelectedUser();
   const theme = useTheme(); 
   
   const updatedArr = []; 
   const {interests} = selectedUser

   interests?.map((interest) => {
      return updatedArr.push(interest.name)
   })

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
            {isSmallScreen ?
               <ColorBox 
                  sx={{
                     background: theme.palette.common.black
                  }}
               />
               : 
               <SemiTransparentBox
                  sx={{
                     background: theme.palette.secondary.main
                  }}
               />
            }
            <Grid2
               container
               size={12}
            >
               <CustomList
                  values={updatedArr}
                  textColor={theme.palette.secondary.main}
                  textTypography={isSmallScreen ? theme.typography.profile.mobile.interestListValue : theme.typography.profile.desktop.interestListValue}
                  listColor={theme.palette.common.white}
                  listValueSize={isSmallScreen ? "1.5rem" : "2rem"}
               />
            </Grid2>
         </Grid2>
      </>
   )
}

export default InterestsContent