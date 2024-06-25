import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaHome } from "react-icons/fa";
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Helmet } from "react-helmet-async";
import UseAxiosSecure from "../Providers/UseAxiosSecure";


const Login = () => {



  const { signInUser, signInWithGoogle, signInWithgithub } = useContext(AuthContext);

  const axiosSecure = UseAxiosSecure();

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form);


    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset()
        toast.success("You have successfully logged in using your email and password.");
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.error(error);
        if (error.message) {

          toast.error(error.message);
        } else {

          toast.error("An error occurred. Please try again later.");
        }

      })
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        toast.success("You have successfully logged in using your Google account.");
        console.log(result.user);
        const userinfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          role: 'member'
        }
        axiosSecure.post('/user', userinfo)
          .then(res => {
            console.log(res.data);
          })
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.error(error);
        if (error.message) {
          toast.error(error.message);
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      })
  }

  const handleGithubSignIn = () => {
    signInWithgithub()
      .then(result => {
        toast.success("You have successfully logged in using your GitHub account.");
        console.log(result.user);
        const userinfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          role: 'member'
        }
        axiosSecure.post('/user', userinfo)
          .then(res => {
            console.log(res.data);
          })
        navigate(location?.state ? location.state : '/');

      })
      .catch(error => {
        console.error(error);
        if (error.message) {

          toast.error(error.message);
        } else {

          toast.error("An error occurred. Please try again later.");
        }
      })
  }






  return (
    <div className="estatebg2 font-jost">
      <Helmet>
        <title>FitZone | Login</title>
      </Helmet>
      <div className="h-screen grid items-center ">
        <div className="flex flex-col gap-4 items-center m-auto lg:w-1/4">
          <div data-aos='fade-in' className="text-center lg:text-left">
            <h1 className="text-5xl font-jost font-bold">Login now!</h1>
            <hr className="border-t mt-4 border-slate-500 opacity-70" />
            <Link to='/'>
              <div className="btn border-none hover:text-black py-2 gap-5 justify-center text-white my-2 bg-[#44b2fc] rounded-xl text-center flex items-center w-full cursor-pointer">
                <FaHome />
                <p className="text-center">Back To Home</p>
              </div>
            </Link>
          </div>

          <div data-aos='fade-up' className="shadow-2xl w-full p-6 rounded-xl bg-slate-200 bg-opacity-20">
            <form onSubmit={handleLogin}>



              <div data-aos='fade-up' className="form-control my-2">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input type="email" name="email" placeholder="Your email" className="input input-bordered w-full" required />
              </div>

              <div data-aos='fade-up' className="form-control my-2">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? 'text' : "password"}
                    name="password"
                    placeholder="Your password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span onClick={() => setShowPassword(!showPassword)} className="absolute right-0 mr-4 text-xl">
                    {
                      showPassword ? <VscEye /> : <VscEyeClosed />
                    }
                  </span>
                </div>
              </div>





              <div data-aos='fade-up' className="form-control mt-6">
                <button type="submit" className="py-2 w-full text-white hover:bg-[#c04c48] bg-[#E65B56]">Login</button>
              </div>

              <div data-aos='fade-up' className="mt-2 flex justify-between pr-4">
                <p className="">Do not have an account?

                </p>
                <Link to='/Register'>
                  <button className="link ml-4 link-info font-bold">Register</button>
                </Link>
              </div>

              <div data-aos='fade-up' className="grid gap-2 text-center my-4">
                <hr className="border-t border-slate-500 opacity-70" />
                <p className="text-white">OR</p>
                <hr className="border-t border-slate-500 opacity-70" />
              </div>

              <div data-aos='fade-up' onClick={handleGoogleSignIn} className="btn my-2 text-center flex items-center w-full py-2 justify-center cursor-pointer">
                <FcGoogle />
                <p className="text-center ">Login With Google</p>
              </div>
              <div  onClick={handleGithubSignIn} className="btn border-none hover:text-black py-2 justify-center text-white my-2 bg-[#324A5A] text-center flex items-center w-full cursor-pointer">
                <FaGithub />
                <p className="text-center">Login With GitHub</p>
              </div>




            </form>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Login;