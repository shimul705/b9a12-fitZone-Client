import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Components/ErrorPage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AllTrainer from "../Pages/AllTrainer";
import TrainerDetails from "../Pages/TrainerDetails";
import TrainerBooking from "../Pages/TrainerBooking";
import Payment from "../Pages/Payment";
import BecomeATrainer from "../Pages/BecomeATrainer";
import AllClasses from "../Pages/AllClasses";
import Forum from "../Pages/Forum";
// import Admin from "../Dashboard/Admin";
import Dashboard from "../Layouts/Dashboard";
import AllNewsletterSubscriber from "../Dashboard/AllNewsletterSubscriber";
import AdminAllTrainer from "../Dashboard/AdminAllTrainer";
import AdminAppliedTrainer from "../Dashboard/AdminAppliedTrainer";
import Balance from "../Dashboard/Balance";
import AddNewClass from "../Dashboard/AddNewClass";
import AddNewSlot from "../DashboardTrainer/AddNewSlot";
import ManageSlots from "../DashboardTrainer/ManageSlots";
import AddForum from "../DashboardCommon/AddNewForum";
import ActivityLog from "../DashboardMember/ActivityLog";
import ProfilePage from "../DashboardMember/Profile";
import BookedTrainer from "../DashboardMember/BookedTrainer";
import TrainerDetailsbyid from "../Dashboard/TrainerDetailsByID";
import PrivetRoute from "./PrivetRoute";
// import AddCraftItem from "../Pages/AddCraftItem";
// import PrivetRoute from "./PrivetRoute";
// import MyArtAndCraft from "../Pages/MyArtAndCraft";
// import Details from "../Pages/Details";
// import AllArtAndCraft from "../Pages/AllArtAndCraft";
// import Update from "../Pages/Update";
// import SubCatagory from "../Components/SubCatagory";
// import CatagoryItems from "../Pages/CatagoryItems";




const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/Register',
        element: <Register></Register>
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/CatagoryItems/:subcategory_Name',
        // element: <CatagoryItems></CatagoryItems>
      },
      {
        path: '/subCatagory',
        // element: <SubCatagory></SubCatagory>
      },

      {
        path: '/AllTrainer',
        element: <AllTrainer></AllTrainer>

      },
      {
        path: '/TrainerDetails',
        element: <TrainerDetails></TrainerDetails>

      },
      {
        path: '/trainerbooking',
        element: <PrivetRoute><TrainerBooking></TrainerBooking></PrivetRoute>

      },
      {
        path: '/payment',
        element: <PrivetRoute><Payment></Payment></PrivetRoute>

      },
      {
        path: '/Becometrainer',
        element: <PrivetRoute><BecomeATrainer></BecomeATrainer></PrivetRoute>

      },
      {
        path: '/allclasses',
        element: <AllClasses></AllClasses>

      },
      {
        path: '/Forum',
        element: <Forum></Forum>

      },
      // {
      //   path: '/dashboard',
      //   element: <Admin></Admin>

      // },

      {
        path: '/UpdateProfile',
        // element: <PrivetRoute><AddCraftItem></AddCraftItem></PrivetRoute>
      },
      {
        path: '/MyArtAndCraft',
        // element: <PrivetRoute><MyArtAndCraft></MyArtAndCraft></PrivetRoute>
      },
      {
        path: '/Update/:_id',
        // element: <PrivetRoute><Update></Update></PrivetRoute>
      },
      {
        path: '/details/:_id',
        // element: <PrivetRoute><Details></Details></PrivetRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children: [
      {
        path: 'allNewsletterSubscriber',
        element: <PrivetRoute><AllNewsletterSubscriber></AllNewsletterSubscriber></PrivetRoute>
      },
      {
        path: 'adminAllTrainer',
        element: <PrivetRoute><AdminAllTrainer></AdminAllTrainer></PrivetRoute>
      },
      {
        path: 'AdminAppliedTrainer',
        element: <PrivetRoute><AdminAppliedTrainer></AdminAppliedTrainer></PrivetRoute>
      },
      {
        path: 'Balance',
        element: <PrivetRoute><Balance></Balance></PrivetRoute>
      },
      {
        path: 'AddNewClass',
        element: <PrivetRoute><AddNewClass></AddNewClass></PrivetRoute>
      },
      {
        path: 'AddNewSlot',
        element: <PrivetRoute><AddNewSlot></AddNewSlot></PrivetRoute>
      },
      {
        path: 'manageslots',
        element: <PrivetRoute><ManageSlots></ManageSlots></PrivetRoute>
      },
      {
        path: 'addnewforum',
        element: <PrivetRoute><AddForum></AddForum></PrivetRoute>
      },
      {
        path: 'activitylog',
        element: <PrivetRoute><ActivityLog></ActivityLog></PrivetRoute>
      },
      {
        path: 'profile',
        element: <PrivetRoute><ProfilePage></ProfilePage></PrivetRoute>
      },
      {
        path: 'bookedtrainer',
        element: <PrivetRoute><BookedTrainer></BookedTrainer></PrivetRoute>
      },
      {
        path: 'trainerdetailsbyid/:id',
        element: <PrivetRoute><TrainerDetailsbyid></TrainerDetailsbyid></PrivetRoute>
      },
    ]
  }
  // {
  //   path: '/dashboard',
  //   element: <Admin></Admin>,
  //   errorElement: <ErrorPage></ErrorPage>,
  //   children: [
  //     {
  //       path: '/dashboard/admin',
  //       element: <Admin></Admin>
  //     }
  //   ]
  // }
])

export default router;