import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { IoIosArrowRoundDown } from "react-icons/io";
import { axiosSecure } from "../Providers/UseAxiosSecure";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (data) => {
    const { email, password, Name, URL } = data;
    try {
      await createUser(email, password);
      await updateUserProfile(Name, URL);

      const userinfo = {
        email: email.toLowerCase(),
        name: Name,
        role: 'member',
      };

      await axiosSecure.post('/user', userinfo);

      toast.success("You have successfully Signed Up using your email & password.");
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error(error.message || "An error occurred. Please try again later.");
    }
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then(async (result) => {
        console.log(result.user);
        const userinfo = {
          email: result.user?.email.toLowerCase(),
          name: result.user?.displayName,
          role: 'member',
        };
        await axiosSecure.post('/user', userinfo);
        navigate('/');
        toast.success("You have successfully Signed Up using your Google account.");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message || "An error occurred. Please try again later.");
      });
  };

  const handleGithubSignUp = () => {
    signInWithGithub()
      .then(async (result) => {
        toast.success("You have successfully Signed Up using your GitHub account.");
        console.log(result.user);
        const userinfo = {
          email: result.user?.email.toLowerCase(),
          name: result.user?.displayName,
          role: 'member',
        };
        await axiosSecure.post('/user', userinfo);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message || "An error occurred. Please try again later.");
      });
  };

  return (
    <div>
      <Helmet>
        <title>FitZone | Register</title>
      </Helmet>
      <div className="h-screen grid items-center estatebg2 font-jost">
        <div className="flex flex-col gap-4 items-center m-auto lg:w-1/4">
          <div data-aos='fade-in' className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <hr className="border-t mt-4 border-slate-500 opacity-70" />
          </div>
          <div data-aos='fade-up' className="shadow-2xl w-full p-6 rounded-xl bg-slate-200 bg-opacity-10 ">
            <form onSubmit={handleSubmit(handleRegister)}>

              <div data-aos='fade-up' className="form-control my-2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register('Name', {
                  required: 'This field is required'
                })} placeholder="Your Name" className="input input-bordered w-full" />
                <div>
                  {errors.Name && <p className="text-red-500 font-bold">{errors.Name.message}</p>}
                </div>
              </div>

              <div data-aos='fade-up' className="form-control my-2">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input type="email" {...register('email', {
                  required: 'This field is required'
                })} placeholder="Your email" className="input input-bordered w-full" required />
                <div>
                  {errors.email && <p className="text-red-500 font-bold">{errors.email.message}</p>}
                </div>
              </div>

              <div data-aos='fade-up' className="form-control my-2">
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <div className="w-full flex items-center relative">
                  <input
                    type={showPassword ? 'text' : "password"}
                    placeholder="Your password"
                    className="input input-bordered w-full"
                    {...register('password', {
                      required: 'This field is required with 6+ characters, 1 uppercase, 1 lowercase.',
                      validate: {
                        hasUpperCase: value => /[A-Z]/.test(value) || "Password must have at least 1 uppercase character",
                        hasLowerCase: value => /[a-z]/.test(value) || "Password must have at least 1 lowercase character"
                      },
                      minLength: {
                        value: 6,
                        message: 'Password must have minimum 6 characters'
                      }
                    })}
                    required />
                  <span onClick={() => setShowPassword(!showPassword)} className="absolute right-0 mr-4 text-xl">
                    {showPassword ? <VscEye /> : <VscEyeClosed />}
                  </span>
                </div>
                <div>
                  {errors.password && <p className="text-red-500 font-bold">{errors.password.message}</p>}
                </div>
              </div>

              <div data-aos='fade-up' className="form-control my-2">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input type="text" {...register('URL')} placeholder="Your Photo URL" className="input input-bordered w-full" />
              </div>

              <div data-aos='fade-up' className="my-2 flex justify-between">
                <p>Already have an account?</p>
                <Link to='/Login'>
                  <button className="link ml-4 link-info font-bold mr-4">Login</button>
                </Link>
              </div>

              <div data-aos='fade-up' className="form-control mt-6">
                <button className="py-2 w-full glass text-white hover:bg-[#c04c48] bg-[#E65B56]">Register</button>
              </div>

              <div data-aos='fade-up' className="grid gap-2 text-center my-4">
                <hr className="border-t border-slate-500 opacity-70" />
                <p className="text-white flex items-center justify-center">
                  <IoIosArrowRoundDown />OR<IoIosArrowRoundDown />
                </p>
                <hr className="border-t border-slate-500 opacity-70" />
              </div>

              <div data-aos='fade-up' onClick={handleGoogleSignUp} className="my-2 text-center flex justify-center py-2 bg-blue-400 items-center w-full cursor-pointer">
                <FcGoogle />
                <p className="text-center">Sign Up With Google</p>
              </div>
              <div onClick={handleGithubSignUp} className="btn hover:bg-gray-600 border-none text-white my-2 py-2 justify-center bg-gray-800 text-center flex items-center w-full cursor-pointer">
                <FaGithub />
                <p className="text-center">Sign Up With GitHub</p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;







// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProviders";

// import { useForm } from "react-hook-form"
// import { toast } from 'react-toastify';
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";
// import { VscEye, VscEyeClosed } from "react-icons/vsc";
// import { IoIosArrowRoundDown } from "react-icons/io";
// import UseAxiosSecure, { axiosSecure } from "../Providers/UseAxiosSecure";







// const Register = () => {

//   const {
//     register,
//     handleSubmit,
//     // watch,
//     formState: { errors },
//   } = useForm()


//   const { createUser, updateUserProfile, signInWithGoogle, signInWithgithub } = useContext(AuthContext);
//   console.log(createUser);

//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false)

//   // const handleRegister = (data) => {

//   //   const { email, password, Name, URL } = data;
//   //   console.log(data);

//   //   // console.log(e.currentTarget);
//   //   const form = new FormData(data.currentTarget);
//   //   console.log(form);

//   //   createUser(email, password, Name, URL)
//   //     .then((result) => {
//   //       toast.success("You have successfully Signed Up using your email & password.");
//   //       const userinfo = {
//   //         email: email,
//   //         name: Name,
//   //         role: 'member'
//   //       };
//   //       console.log(userinfo);

//   //       // Save user to the database
//   //       UseAxiosSecure.post('/user', userinfo)
//   //         .then(res => {
//   //           console.log(res.data);
//   //         })
//   //       updateUserProfile(Name, URL)
//   //         .then(() => {
//   //           navigate('/')
//   //           console.log(result.user);
//   //         })

//   //     })
//   //     .catch(error => {
//   //       console.error(error);
//   //       if (error.message) {

//   //         toast.error(error.message);
//   //       } else {

//   //         toast.error("An error occurred. Please try again later.");
//   //       }
//   //     })
//   // }

//   const handleRegister = async (data) => {
//     const { email, password, Name, URL } = data;
//     try {
//       await createUser(email, password);
//       await updateUserProfile(Name, URL);

//       const userinfo = {
//         email: email,
//         name: Name,
//         role: 'member'
//       };

//       await axiosSecure.post('/user', userinfo);

//       toast.success("You have successfully Signed Up using your email & password.");
//       navigate('/');
//     } catch (error) {
//       console.error(error);
//       toast.error(error.message || "An error occurred. Please try again later.");
//     }
//   };


//   const handleGoogleSignUp = () => {
//     signInWithGoogle()
//       .then(result => {
//         console.log(result.user);
//         const userinfo = {
//           email: result.user?.email,
//           name: result.user?.displayName,
//           role: 'member'
//         }
//         UseAxiosSecure.post('/user', userinfo)
//           .then(res => {
//             console.log(res.data);
//           })
//         navigate('/');
//         toast.success("You have successfully Signed Up using your Google account.");
//       })
//       .catch(error => {
//         console.error(error);
//         if (error.message) {

//           toast.error(error.message);
//         } else {

//           toast.error("An error occurred. Please try again later.");
//         }
//       })
//   }

//   const handleGithubSignUp = () => {
//     signInWithgithub()
//       .then(result => {
//         toast.success("You have successfully Signed Up using your GitHub account.");
//         console.log(result.user);
//         const userinfo = {
//           email: result.user?.email,
//           name: result.user?.displayName,
//           role: 'member'
//         }
//         UseAxiosSecure.post('/user', userinfo)
//           .then(res => {
//             console.log(res.data);
//           })
//         navigate('/');

//       })
//       .catch(error => {
//         console.error(error);
//         if (error.message) {

//           toast.error(error.message);
//         } else {

//           toast.error("An error occurred. Please try again later.");
//         }
//       })
//   }


//   return (
//     <div>
//       <Helmet>
//         <title>FitZone | Register</title>
//       </Helmet>
//       <div className="h-screen grid items-center estatebg2 font-jost">
//         <div className="flex flex-col gap-4 items-center m-auto lg:w-1/4">
//           <div data-aos='fade-in' className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold ">Register now!</h1>
//             <hr className="border-t mt-4 border-slate-500 opacity-70" />
//           </div>
//           <div data-aos='fade-up' className="shadow-2xl w-full p-6 rounded-xl bg-slate-200 bg-opacity-10 ">
//             <form onSubmit={handleSubmit(handleRegister)}>

//               <div data-aos='fade-up' className="form-control my-2">
//                 <label className="label">
//                   <span className="label-text ">Name</span>
//                 </label>
//                 <input type="text" {...register('Name')} placeholder="Your Name" className="input input-bordered w-full" />
//                 {/* <div>
//                   {errors.Name && <p className="text-red-500 font-bold">{errors.Name.message}</p>}
//                 </div> */}
//               </div>

//               <div data-aos='fade-up' className="form-control my-2">
//                 <label className="label">
//                   <span className="label-text ">Email*</span>
//                 </label>
//                 <input type="email" {...register('email', {
//                   required: {
//                     value: true,
//                     message: 'This field is required'
//                   }
//                 })} placeholder="Your email" className="input input-bordered w-full" required />
//                 <div>
//                   {errors.email && <p className="text-red-500 font-bold">{errors.email.message}</p>}
//                 </div>
//               </div>

//               <div data-aos='fade-up' className="form-control my-2">
//                 <label className="label">
//                   <span className="label-text ">Password*</span>
//                 </label>
//                 <div className="w-full flex items-center relative">
//                   <input
//                     type={showPassword ? 'text' : "password"}
//                     placeholder="Your password"
//                     className="input input-bordered w-full"
//                     {...register('password', {
//                       required: {
//                         value: true,
//                         message: 'This field is required with 6+ characters, 1 uppercase, 1 lowercase.'
//                       },
//                       validate: {
//                         hasUpperCase: value => /[A-Z]/.test(value) || "Password must have at least 1 uppercase character",
//                         hasLowerCase: value => /[a-z]/.test(value) || "Password must have at least 1 lowercase character"
//                       },
//                       minLength: {
//                         value: 6,
//                         message: 'Password Must have minimum 6 characters'
//                       }

//                     })} required />
//                   <span onClick={() => setShowPassword(!showPassword)} className="absolute right-0 mr-4 text-xl">
//                     {
//                       showPassword ? <VscEye /> : <VscEyeClosed />
//                     }
//                   </span>
//                 </div>
//                 <div>
//                   {errors.password && <p className="text-red-500 font-bold">{errors.password.message}</p>}
//                 </div>
//               </div>

//               <div data-aos='fade-up' className="form-control my-2">
//                 <label className="label">
//                   <span className="label-text ">PhotoUrl</span>
//                 </label>
//                 <input type="text" {...register('URL')} placeholder="Your Photo URL" className="input input-bordered w-full" />
//               </div>

//               <div data-aos='fade-up' className="my-2 flex justify-between">
//                 <p className="">Already have an account?</p>
//                 <Link to='/Login'>
//                   <button className="link ml-4 link-info font-bold mr-4">Login</button>
//                 </Link>

//               </div>

//               <div data-aos='fade-up' className="form-control mt-6">
//                 <button className="py-2 w-full glass text-white hover:bg-[#c04c48] bg-[#E65B56]">Register</button>
//               </div>

//               <div data-aos='fade-up' className="grid gap-2 text-center my-4">
//                 <hr className="border-t border-slate-500 opacity-70" />
//                 <p className="text-white flex items-center justify-center">
//                   <IoIosArrowRoundDown />OR<IoIosArrowRoundDown />
//                 </p>
//                 <hr className="border-t border-slate-500 opacity-70" />
//               </div>

//               <div data-aos='fade-up' onClick={handleGoogleSignUp} className="my-2 text-center flex justify-center py-2 bg-blue-400 items-center w-full ">
//                 <FcGoogle />
//                 <p className="text-center">SignUp With Google</p>
//               </div>
//               <div onClick={handleGithubSignUp} className="btn hover:bg-gray-600 border-none text-white my-2 py-2 justify-center bg-gray-800 text-center flex items-center w-full">
//                 <FaGithub />
//                 <p className="text-center">SignUp With GitHub</p>
//               </div>

//             </form>
//           </div>
//         </div>
//       </div>
//     </div >
//   );
// };

// export default Register;


