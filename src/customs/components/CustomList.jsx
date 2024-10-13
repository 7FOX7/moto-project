import CustomText from "./CustomText"

const CustomList = ({values, textColor="primary", textTypography, listColor, listValueSize}) => {
   return (
      <>
         <ul
            style={{
               fontSize: listValueSize,
               color: listColor
            }}
         >
            {values.map((value, index) => (
               <li key={index}>
                  {typeof(value) === "string" ?
                     <CustomText 
                        color={textColor}
                        text={value}
                        typography={textTypography}
                        textAlign="left"
                     />
                     : 
                     value
                  }
               </li>
            ))}
         </ul>
      </>
   )
}

export default CustomList