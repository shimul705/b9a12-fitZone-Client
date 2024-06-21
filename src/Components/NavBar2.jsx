import { Link, NavLink } from "react-router-dom";
import 'animate.css';
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";
import { toast } from 'react-toastify';



const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('user Loged Out succesfully');
        toast.success("You have successfully logged out");
      })
      .catch(error => {
        console.error(error);
        if (error.message) {
          // If the error has a message property (e.g., Firebase error)
          toast.error(error.message);
        } else {
          // If the error does not have a message property (generic error)
          toast.error("An error occurred. Please try again later.");
        }
      })
  }

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle dark mode class on the HTML element
    document.documentElement.classList.toggle('dark');
  };

  const subNavLinks =
    <>
      {
        user &&
        <>
          <NavLink to='/UpdateProfile'>
            <li className='shimul border-2 dark:bg-dark-background border-background rounded-lg dark:text-slate-400 group flex cursor-pointer flex-col'>
              <a className='rounded-sm'>Add Volunteer Post</a>
              <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </NavLink>
          <NavLink to='/ManageMyPost'>
            <li className='shimul border-2 dark:bg-dark-background border-background rounded-lg dark:text-slate-400 group flex cursor-pointer flex-col'>
              <a className='rounded-sm'>Manage My Post</a>
              <span className="p-0 mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </NavLink>
        </>
      }
    </>



  // const navLinks = <>

  //   <li className="shimul border-2 border-background rounded-lg dark:text-slate-400"><NavLink to='/'>Home</NavLink></li>
  //   <li><NavLink to='/AllArtAndCraft'>Need Volunteer Page</NavLink></li>
  //   {user &&
  //     <>
  //       <li><NavLink>
  //         <a>My Profile</a>
  //         <ul className="p-2">
  //           {subNavLinks}
  //         </ul>
  //       </NavLink></li>


  //     </>
  //   }
  //   {!user &&
  //     <>
  //       <li><NavLink to='/Register'>Register</NavLink></li>

  //     </>
  //   }




  // </>
  return (
    <div className='border-b-4 bg-heading dark:bg-dark-background shadow-lg z-10'>
      <div className="navbar md:w-10/12 m-auto py-6 p-0">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
              <li className="shimul border-2 border-background  rounded-lg dark:text-slate-400"><NavLink to='/'>Home</NavLink></li>
              <li className="shimul border-2 border-background rounded-lg dark:text-slate-400"><NavLink to='/AllArtAndCraft'>Need Volunteer Page</NavLink></li>
              {
                user &&
                <li>
                  <details>
                    <summary>My Profile</summary>
                    <ul className="shadow-xl dark:bg-black p-2 w-64 rounded-sm z-10">

                      {subNavLinks}

                    </ul>
                  </details>
                </li>
              }

            </ul>
          </div>
          <div className="h-16">
            <a className="h-full">
              {
                darkMode ?

                  <img className="h-full" src="https://i.ibb.co/gmfCqBS/Black-White-Minimalist-Logo-1-removebg-preview.png" alt="" />

                  :

                  <img className="h-full" src="https://i.ibb.co/W5TWXwz/Black-White-Minimalist-Logo-removebg-preview.png" alt="" />


              }
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 color-primary text-lg font-lato font-semibold">
            <li className="shimul border-2 border-background rounded-lg dark:text-slate-400"><NavLink to='/'>Home</NavLink></li>
            <li className="shimul border-2 border-background rounded-lg dark:text-slate-400"><NavLink to='/AllArtAndCraft'>Need Volunteer Page</NavLink></li>
            {
              user &&
              <li className="shimul border-2 border-background rounded-lg dark:text-slate-400">
                <details>
                  <summary>My Profile</summary>
                  <ul className="shadow-xl p-2 w-64 rounded-sm z-10">
                    {subNavLinks}
                  </ul>
                </details>
              </li>
            }
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <button
            className="bg-secondary dark:bg-background text-white dark:text-secondary px-4 py-2 rounded-lg"
            onClick={toggleDarkMode}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

          {
            user
              ?
              <>
                <div className="tooltip z-10 tooltip-bottom" data-tip={user?.displayName || 'Name not found or please reload'}>

                  {user && user.photoURL && user.photoURL !== 'photoURL not found' ? (
                    <div className="avatar online flex justify-center items-center" >
                      <div className="w-12 lg:w-16  rounded-full">
                        <img className="flex items-center" src={user.photoURL} alt="User" />
                      </div>

                    </div>
                  ) : (
                    <FaUserCircle className="text-6xl" />
                  )}

                </div>

                <button onClick={handleLogOut} className="btn bg-[#05264E] hover:bg-[#0f2330] text-[#F2F2F2] border border-[#1B313F]">Logout</button>


              </>
              :
              <Link to='/login'>
                <button className="btn hover:bg-[#E65B56] bg-[#212121] text-white">Login</button>
              </Link>


          }




        </div>
      </div>




    </div>
  );
};

{/*  */ }


export default NavBar;