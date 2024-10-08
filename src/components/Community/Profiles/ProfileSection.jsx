import CustomSection from "../../../customs/components/CustomSection"
import ProfileContent from "./ProfileContent"

const ProfileSection = () => {
   return (
      <CustomSection
         headingText="Profiles"
         subHeadingText="Chat, Connect, Make Friends"
         content={<ProfileContent />}
      />
   ) 
}

export default ProfileSection