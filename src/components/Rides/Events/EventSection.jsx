import CustomSection from "../../../customs/components/CustomSection"
import EventContent from "./EventContent"

const EventSection = () => {
   return (
      <CustomSection 
         headingText="Events"
         content={<EventContent />}
         sectionWidth="fit-content"
      />
   )
}

export default EventSection