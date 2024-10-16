const borderRadius = "15px"

const CustomVideo = ({width, src}) => {
   return (
      <>
         <video 
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            width={width}
            style={{
               borderRadius: borderRadius 
            }}
         >
            <source 
               src={src} 
               type="video/mp4" 
            />
            <source 
               src={src} 
               type="video/webm" 
            />
         </video>
      </>
   )
}

export default CustomVideo