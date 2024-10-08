import CustomSection from "../../../customs/components/CustomSection";
import VideoContent from "./VideoContent";

const VideoSection = () => {
   return (
      <CustomSection
         headingText="Videos"
         content={<VideoContent />}
         sectionWidth="fit-content"
      />
   )
}

export default VideoSection