import CustomSection from "../../../customs/components/CustomSection"
import SuccessStoriesContent from "./SuccessStoriesContent"

const SuccessStoriesSection = () => {
   return (
      <CustomSection
         headingText="Success Stories"
         subHeadingText="Our community is growing fast. See what others have to share"
         content={<SuccessStoriesContent />}
      />
   )
}

export default SuccessStoriesSection