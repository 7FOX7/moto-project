import CustomSection from "../../../customs/components/CustomSection"
import FaqContent from "./FaqContent"

const FaqSection = () => {
   return (
      <CustomSection
         headingText="FAQ"
         content={<FaqContent />}
      />
   )
}

export default FaqSection