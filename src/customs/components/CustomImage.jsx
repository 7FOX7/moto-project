const CustomImage = ({src, alt, width, height}) => {
   return (
      <>
         <img 
            src={src}
            alt={alt}
            draggable="false"
            style={{
               width: width, 
               height: height, 
               objectFit: "cover"
            }}
         />
      </>
   )
}

export default CustomImage