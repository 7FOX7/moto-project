import CustomSection from "../../../customs/components/CustomSection"
import ActivityContent from "./ActivityContent"

const ActivitySection = () => {
   return (
      <CustomSection
         headingText="Activity"
         content={<ActivityContent />}
      />
   )
}

export default ActivitySection