import { useState } from "react"

const useForceState = () => {
   const [, setToggle] = useState(false); 
   return () => setToggle((prevVal) => !prevVal); 
}

export default useForceState