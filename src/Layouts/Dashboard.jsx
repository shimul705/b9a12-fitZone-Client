import { NavLink, Outlet } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import {
  HiBookmark, HiChartPie, HiCurrencyDollar, HiInbox, HiLogout,
  HiPlus, HiPlusCircle, HiUser, HiViewBoards
} from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import { axiosSecure } from "../Providers/UseAxiosSecure";
import { AuthContext } from "../Providers/AuthProviders";
import Loader from "../Components/Loader/Loader";

const Dashboard = () => {
  const [userRole, setUserRole] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await axiosSecure.get(`/user?email=${user.email}`);
        setUserRole(response.data.role);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (user?.email) {
      fetchUserRole();
    }
  }, [user]);

  if (!userRole) {
    return <div className="w-screen h-screen flex items-center justify-center"><Loader></Loader></div>; // or a spinner
  }

  return (
    <div className="flex h-screen">
      <div className="mt-10 h-screen">
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items>
            {userRole === 'admin' && (
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiChartPie}>
                  Dashboard | Admin
                </Sidebar.Item>
                <NavLink to="/dashboard/allnewslettersubscriber">
                  <Sidebar.Item icon={HiViewBoards}>
                    All Newsletter Subscriber
                  </Sidebar.Item>
                </NavLink>
                <NavLink to="/dashboard/adminAllTrainer">
                  <Sidebar.Item icon={HiInbox}>
                    All Trainer
                  </Sidebar.Item>
                </NavLink>
                <NavLink to="/dashboard/AdminAppliedTrainer">
                  <Sidebar.Item icon={HiUser}>
                    Applied Trainer
                  </Sidebar.Item>
                </NavLink>
                <NavLink to="/dashboard/Balance">
                  <Sidebar.Item icon={HiCurrencyDollar}>
                    Balance
                  </Sidebar.Item>
                </NavLink>
                <NavLink to="/dashboard/AddNewClass">
                  <Sidebar.Item icon={HiPlusCircle}>
                    Add New Class
                  </Sidebar.Item>
                </NavLink>
                <NavLink to="addnewforum">
                  <Sidebar.Item icon={HiPlus}>
                    Add New Forum
                  </Sidebar.Item>
                </NavLink>
              </Sidebar.ItemGroup>
            )}
            {userRole === 'trainer' && (
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiChartPie}>
                  Dashboard | Trainer
                </Sidebar.Item>
                <NavLink to="manageslots">
                  <Sidebar.Item icon={HiViewBoards}>
                    Manage Slots
                  </Sidebar.Item>
                </NavLink>
                <NavLink to="AddNewSlot">
                  <Sidebar.Item icon={HiPlusCircle}>
                    Add New Slot
                  </Sidebar.Item>
                </NavLink>
                <NavLink to="addnewforum">
                  <Sidebar.Item icon={HiPlus}>
                    Add New Forum
                  </Sidebar.Item>
                </NavLink>
              </Sidebar.ItemGroup>
            )}
            {userRole === 'member' && (
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiChartPie}>
                  Dashboard | Member
                </Sidebar.Item>
                <NavLink to="activitylog">
                  <Sidebar.Item icon={HiViewBoards}>
                    Activity Log
                  </Sidebar.Item>
                </NavLink>
                <NavLink to="profile">
                  <Sidebar.Item icon={HiUser}>
                    Profile
                  </Sidebar.Item>
                </NavLink>
                <NavLink to="bookedtrainer">
                  <Sidebar.Item icon={HiBookmark}>
                    Booked Trainer
                  </Sidebar.Item>
                </NavLink>
              </Sidebar.ItemGroup>
            )}
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiLogout}>
                LogOut
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
