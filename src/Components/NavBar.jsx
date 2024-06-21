import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";



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
  const navigation =
    <>
      <a className="  text-blue-500" href="#" aria-current="page">
        Home
      </a>
      <NavLink to='/AllTrainer'>
        <a className=" text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">
          All Trainer Page
        </a>
      </NavLink>

      <NavLink to='/allclasses'>
        <a className=" text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">
          All Classes Page
        </a>
      </NavLink>


      <NavLink to="/Forum">
        <a className=" text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">
          Forum
        </a>
      </NavLink>

      {user &&
        <>

          <li><NavLink to='/dashboard/AllNewsletterSubscriber'>Dashboard</NavLink></li>


        </>
      }
      {!user &&
        <>
          <li><NavLink to='/Register'>Register</NavLink></li>

        </>
      }
    </>

  const avatar =
    <>
      <div className="flex-shrink-0 group block ">

        {user && user.photoURL && user.photoURL !== 'photoURL not found' ? (
          <div className="flex items-center" data-tip={user?.displayName || 'Name not found or please reload'}>
            <img className="h-14 rounded-full" src={user.photoURL} alt="Image Description"
            />
            <div className="ms-3">
              <h3 className="font-semibold text-gray-800 dark:text-white">{user.displayName}</h3>
              <p className="text-sm font-medium text-gray-400 dark:text-neutral-500">{user.email}</p>
            </div>
          </div>
        ) : (
          <FaUserCircle className="text-6xl" />
        )}
      </div>
    </>




  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between" aria-label="Global">
        <a className="sm:order-1 flex-none text-xl font-semibold dark:text-white" href="#">Brand</a>
        <div className="sm:order-3 flex items-center gap-x-2">
          <button
            type="button" className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10" data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment" aria-label="Toggle navigation">
            <svg
              className="hs-collapse-open:hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          {/* NAV BAr Edn */}
          <div className="flex justify-center items-center gap-4">
            {
              user
                ?
                <>
                  {/* <div className="tooltip z-10 tooltip-bottom" data-tip={user?.displayName || 'Name not found or please reload'}>

                    {user && user.photoURL && user.photoURL !== 'photoURL not found' ? (
                      <div className="avatar online flex justify-center items-center" >
                        <div className="w-12 lg:w-16  rounded-full">
                          <img className="flex items-center" src={user.photoURL} alt="User" />
                        </div>

                      </div>
                    ) : (
                      <FaUserCircle className="text-6xl" />
                    )}

                  </div> */}
                  {avatar}

                  <button onClick={handleLogOut} className=" py-2 px-3 bg-white rounded-none hover:bg-[#0f2330] hover:text-[#F2F2F2] text-[#1B313F] border border-[#1B313F]">Logout</button>


                </>
                :
                <Link to='/login'>
                  <button className=" py-2 px-3 hover:bg-[#E65B56] rounded-none bg-[#212121] text-white">Login</button>
                </Link>


            }
          </div>



          {/* <button type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
            Button
          </button> */}

        </div>

        <div id="navbar-alignment"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
          <div className="flex flex-col gap-5 text-lg font-bold mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">

            {navigation}


          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;