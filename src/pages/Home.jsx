import Main from "../components/Home/Main"
import useScrollToTop from "../customs/hooks/useScrollToTop"

const Home = () => {
   useScrollToTop(); 
   return <Main />
}

export default Home
