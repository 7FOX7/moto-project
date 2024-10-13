import Main from "../components/StoryView/Main"
import useScrollToTop from "../customs/hooks/useScrollToTop"

const StoryView = () => {
   useScrollToTop(); 
   return <Main />
}

export default StoryView