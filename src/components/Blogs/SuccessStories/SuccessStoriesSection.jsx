import CustomSection from "../../../customs/components/CustomSection"
import SuccessStoriesContent from "./SuccessStoriesContent"

const SuccessStoriesSection = () => {
    return (
        <CustomSection
         headingText="Success Stories"
         subHeadingText="Our community is growing fast and, for that time we have some success stories. See what others had to say about us. "
         content={<SuccessStoriesContent />}
      />
    )
}

export default SuccessStoriesSection