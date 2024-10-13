import CustomSection from "../../../customs/components/CustomSection"
import GeneralContent from "./GeneralContent"

const GeneralSection = () => {
   return (
      <CustomSection
         content={<GeneralContent />}
      />
   )
}

export default GeneralSection


/*

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

*/