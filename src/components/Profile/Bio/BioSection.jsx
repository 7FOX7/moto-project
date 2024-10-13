import CustomSection from "../../../customs/components/CustomSection"
import BioContent from "./BioContent"

const BioSection = () => {
   return (
      <CustomSection
         headingText="Bio"
         content={<BioContent />}
      />
   )
}

export default BioSection