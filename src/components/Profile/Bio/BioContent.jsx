import { useScreenSize } from "../../../contexts/ScreenSizeContext"
import { useSelectedUser } from "../../../contexts/SelectedUserContext";
import { useTheme } from "@emotion/react";
import CustomContentContainer from "../../../customs/components/CustomContentContainer";

const BioContent = () => {
   const isSmallScreen = useScreenSize(); 
   const {selectedUser} = useSelectedUser(); 
   const theme = useTheme(); 

   const {bio} = selectedUser
   return (
      <>
         <CustomContentContainer
            showMargin={isSmallScreen ? false : true}
            showTransBox={isSmallScreen ? false : true}
            content={bio}
            typography={isSmallScreen ? theme.typography.profile.mobile.bioText : theme.typography.profile.desktop.bioText}
         />
      </>
   )
}

export default BioContent