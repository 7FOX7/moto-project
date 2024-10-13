import CustomSection from "../../../customs/components/CustomSection";
import InterestsContent from "./InterestsContent";

const InterestsSection = () => {
   return (
      <CustomSection
         headingText="Interests"
         content={<InterestsContent />}
      />
   )
}

export default InterestsSection