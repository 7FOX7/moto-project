const CustomImage = ({src, alt, width, height, borderRadius}) => {
   return (
      <>
         <img 
            src={src}
            alt={alt}
            draggable="false"
            style={{
               width: width, 
               height: height, 
               objectFit: "fill", 
               borderRadius: borderRadius && borderRadius
            }}
         />
      </>
   )
}

export default CustomImage