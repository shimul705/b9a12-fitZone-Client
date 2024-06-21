import { useContext } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <div className="w-[5rem] m-auto mt-44"> <span className="loading loading-bars w-[5rem]"></span> </div>
  }

  if (user) {
    return children;
  }



  return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoute;

PrivetRoute.propTypes = {
  children: PropTypes.node
}