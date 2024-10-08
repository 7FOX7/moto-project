import CustomSearchSection from "../../../customs/components/CustomSearchSection"
import users from "../../../data/users"
import Profiles from "./Profiles"

const placeholderText = "Seach by username..."

const ProfileContent = () => {
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
      <>
         <CustomSearchSection 
            dataList={users}
            renderItems={renderProfiles}
            filterFunc={filterFunc}
            placeholder={placeholderText}
         />
      </>
   )
}

export default ProfileContent