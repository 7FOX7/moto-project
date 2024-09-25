import { useScreenSize } from "../../contexts/ScreenSizeContext";
import CustomCarouselSlide from "./CustomCarouselSlide";
import { Swiper } from "swiper/react"
import { SwiperSlide } from "swiper/react"
import "swiper/css"; 

const CustomCarousel = ({data, type}) => {
   const isSmallScreen = useScreenSize(); 
   return (
      <>
         <Swiper
            slidesPerView="auto"
            spaceBetween={isSmallScreen ? 20 : 80}
            centeredSlides={true}
            loop={true}
            allowTouchMove={true}
            grabCursor={true}
            style={{
               height: "100%", 
            }}
         >
            {data.map((item) => {
               return (      
                  <SwiperSlide 
                     key={item.id}
                     style={{
                        width: isSmallScreen ? "230px" : "300px", 
                        height: isSmallScreen ? "80%" : "90%",   
                        alignSelf: "center", 
                     }}
                  >
                     <CustomCarouselSlide 
                        item={item}
                        type={type}
                     />               
                  </SwiperSlide>
               )
            })}
         </Swiper>
      </>
   )
}

export default CustomCarousel