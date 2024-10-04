import { useScreenSize } from "../../contexts/ScreenSizeContext"
import { useTheme } from "@emotion/react"
import CustomText from "../../customs/components/CustomText"
import { SectionBox } from "../../styles/style"
import CustomSearchSection from "../../customs/components/CustomSearchSection"
import Profiles from "./Profiles"
import users from "../../data/users"

const placeholderText = "Seach by username..."

const ProfileSection = () => {
   const isSmallScreen = useScreenSize(); 
   const theme = useTheme(); 

   function renderProfiles(users) {
      return <Profiles users={users} />
   }

   function filterFunc(searchQuery) {
      if (!searchQuery) return users;
      return users.filter((user) =>
         user.username.toLowerCase().includes(searchQuery.toLowerCase())
      );
   }

   return (
      <SectionBox component="section">
         <CustomText 
            text="Profiles"
            variant="h2"
            typography={isSmallScreen ? theme.typography.global.mobile.sectionHeading : theme.typography.global.desktop.sectionHeading}
         />
         <CustomText 
            text="Chat, Connect, Make Friends"
            variant="h3"
            typography={isSmallScreen ? theme.typography.global.mobile.sectionHeadingSmaller : theme.typography.global.desktop.sectionHeadingSmaller}
         />
         <br />
         <CustomSearchSection 
            dataList={users}
            renderItems={renderProfiles}
            filterFunc={filterFunc}
            placeholder={placeholderText}
         />
      </SectionBox>
   ) 
}

export default ProfileSection