import Main from "../components/Onboarding/Main"
import useScrollToTop from "../customs/hooks/useScrollToTop"

const Onboarding = () => {
   useScrollToTop(); 
   return <Main />   
}

export default Onboarding