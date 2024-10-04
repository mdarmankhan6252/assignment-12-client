import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
   const {user, loading} = useAuth()

   if(loading){
      return <p className="flex items-center justify-center w-full h-screen text-2xl font-semibold">Loading...</p>
   }

   if(user){
      return children
   }
   return <Navigate to="/login"/>
};

export default PrivateRoute;