import CustomCarousel from "../../../customs/components/CustomCarousel"
import tips from "../../../data/tips"

const TipContent = () => {
   return (
      <>
         <CustomCarousel
            data={tips}
            type="tip"
         />
      </>
   )
}

export default TipContent