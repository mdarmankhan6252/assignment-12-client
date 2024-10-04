import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../assets/logo.png'
import './Dashboard.css'
const Dashboard = () => {
   return (
      <section className="flex">
         <div className="min-w-48 bg-pink-200 h-screen p-4">
            <Link to='/' className=' items-center space-x-2 hidden sm:flex mb-6'>
               <img src={logo} alt="logo" className='w-10' />
               <div className='font-semibold text-lg leading-5'>
                  World's<br />News
               </div>
            </Link>

            <ul className="*:font-semibold *:py-2 *:pl-3 *:pr-6 flex flex-col space-y-6 *:border-2 uppercase">
               <NavLink to='/dashboard'>Admin home</NavLink>
               <NavLink to='/dashboard/addNews'>Add News</NavLink>
               <NavLink to='/dashboard/allNews'>All news</NavLink>
            </ul>
         </div>

         <div className="pl-6 w-full">
            <Outlet/>
         </div>

      </section>
   );
};

export default Dashboard;