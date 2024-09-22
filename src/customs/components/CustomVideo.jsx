const borderRadius = "15px"

const CustomVideo = ({width, src}) => {
   return (
      <>
         <video 
            autoPlay={true}
            muted={true}
            loop={true}
            width={width}
            style={{
               borderRadius: borderRadius 
            }}
         >
            <source 
               src={src} 
               type="video/webm" 
            />
            <source 
               src={src} 
               type="video/mp4" 
            />
         </video>
      </>
   )
}

export default CustomVideo