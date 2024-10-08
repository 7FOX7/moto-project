import CustomSection from "../../../customs/components/CustomSection";
import ArtContent from "./ArtContent";

const ArtSection = () => {
   return (
      <CustomSection
         headingText="Arts"
         content={<ArtContent />}
      />
   )
}

export default ArtSection