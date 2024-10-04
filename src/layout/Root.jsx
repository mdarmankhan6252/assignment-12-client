import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../Shared/Footer";

const Root = () => {
   return (
      <div className="">
         <Nav />
         <div className="">
            <Outlet />
         </div>
         <Footer/>
      </div>
   );
};

export default Root;