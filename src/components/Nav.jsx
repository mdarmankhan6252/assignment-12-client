import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { CiMenuBurger } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { FaUser } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import './Nav.css'

const Nav = () => {
   const { user, logOut } = useAuth()
   const [scrollPosition, setScrollPosition] = useState(0)
   const [showNav, setShowNav] = useState(true)
   const [menu, setMenu] = useState(false)
   const [menu2, setMenu2] = useState(false)

   const handleMenu = () => {
      setMenu(!menu)
   }
   const handleMenu2 = () => {
      setMenu2(!menu2)
   }
   const sigOut = () => {
      logOut()
   }

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollPos = window.scrollY;

         if (currentScrollPos < scrollPosition) {
            setShowNav(true)
         }
         else {
            setShowNav(false)
         }
         setScrollPosition(currentScrollPos)
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [scrollPosition])


   return (
      <nav className={`fixed z-10 top-0 right-0 left-0  py-5  bg-gray-100/80  backdrop-blur-xl transition-transform duration-500 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
         <div className='flex items-center justify-between max-w-7xl mx-auto px-2 relative'>
            <Link to='/' className=' items-center space-x-2 hidden sm:flex'>
               <img src={logo} alt="logo" className='w-10' />
               <div className='font-semibold text-lg leading-5'>
                  World's<br />News
               </div>
            </Link>
            <ul className='*:uppercase space-x-5 font-semibold text-gray-700 sm:block hidden'>
               <NavLink to='/'>home</NavLink>
               <NavLink to='/about'>About</NavLink>
               <NavLink to='/allArticles'>All Articles</NavLink>
            </ul>

            <div onClick={handleMenu} className='text-3xl cursor-pointer sm:hidden'>
               {menu ? <IoCloseOutline /> : <RiMenu2Fill />}
            </div>

            {user ? <div onClick={handleMenu2} className='border py-2 rounded-md shadow-[0px_0px_3px_0px] shadow-gray-500 px-3 space-x-2 flex items-center cursor-pointer'>
               <CiMenuBurger />
               {user.photoURL ? <img src={user?.photoURL} alt="" /> :
                  <FaUser />}
            </div> : <Link to='/register' className='py-1.5 px-8 border-2 border-orange-500 rounded-md font-semibold hover:bg-orange-500 hover:text-white duration-300'>Register</Link>}

            {/* small screen */}

            <ul className={` *:uppercase font-semibold text-gray-700 absolute flex flex-col space-y-6 top-[74px] pl-2 h-screen  pr-10 bg-gray-800/80 backdrop-blur-3xl sm:hidden duration-500  ${menu ? 'left-0' : '-left-[220px]'} pt-6 text-white`}>
               <Link to='/' className=' items-center space-x-2 flex'>
                  <img src={logo} alt="logo" className='w-10' />
                  <div className='font-semibold text-lg leading-5'>
                     World's<br />News
                  </div>
               </Link>

               <NavLink to='/addArticles'>Add Articles</NavLink>
               <NavLink to='/allArticles'>All Articles</NavLink>
               <NavLink to='/subscription'>Subscription</NavLink>
               <NavLink to='/dashboard'>Dashboard</NavLink>
               <NavLink to='/myArticles'>My Articles</NavLink>
               <NavLink to='/premiumArticles'>Premium Articles</NavLink>
            </ul>

            {/* login , register, logout */}


            <div className={`absolute right-[70px] top-[38px] py-3 px-3 bg-white space-y-4 rounded-md border text-center cursor-pointer ${menu2 ? 'scale-100' : 'scale-0'} duration-300`}>
               <Link to='/dashboard' className='font-semibold block'>Dashboard</Link>
               <p onClick={() => { sigOut(); handleMenu2() }} className='font-semibold text-red-500 '>Log out</p>
            </div>

         </div>
      </nav>
   );
};

export default Nav;

