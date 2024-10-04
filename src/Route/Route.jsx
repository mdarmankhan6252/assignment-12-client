import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPage from "../components/ErrorPage";
import Dashboard from "../dashboard/dashboard";
import MainDashboard from "../dashboard/MainDashboard";
import AddNews from "../dashboard/AddNews";
import AllNews from "../dashboard/AllNews";
import NewsItem from "../components/NewsItem";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
     path: "/",
     element: <Root/>,
     errorElement:<ErrorPage/>,
     children:[
      {
         index:true,
         element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/item/:id',
        element:<PrivateRoute><NewsItem/></PrivateRoute>
      }
     ]
   },
   {
    path:'/dashboard',
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      {
        path:'',
        element:<MainDashboard/>
      },
      {
        path:'addNews',
        element:<AddNews/>
      },
      {
        path:'allNews',
        element:<AllNews/>
      }
    ]
   }
 ]);
export default router;