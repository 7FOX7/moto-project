import CustomSection from "../../../customs/components/CustomSection";
import TipContent from "./TipContent";

const TipSection = () => {
   return (
      <CustomSection
         headingText="Tips"
         subHeadingText="See what folks find useful"
         content={<TipContent />}
      />
   ) 
}

export default TipSection