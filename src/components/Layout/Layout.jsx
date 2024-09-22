import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import { LayoutBox } from "../../styles/style"

const Layout = () => {
   return (
      <LayoutBox>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </LayoutBox>
   )   
}

export default Layout