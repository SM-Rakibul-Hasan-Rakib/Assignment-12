// import React from 'react';
// import { useContext, useEffect, useState } from "react";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
// import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import UserContext from "../../Context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setuser } = useContext(UserContext);
  const from = location.state?.from?.pathname || "/";
  // const captchRef = useRef(null);

  const [disabled, setDisabled] = useState(true);
  console.log("state in the location login in page", location.state);
  const { signIn } = useContext(AuthContext);

  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      // setuser(user);
      // console.log(user);
      localStorage.setItem("userData", JSON.stringify(user));
      const data = localStorage.getItem("userData");

      if (data) {
        setuser(true);
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your login Success!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };
  // const handleValidateCaptcha = (e) => {
  //   const value = e.target.value;
  //   if (validateCaptcha(value)) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //   }
  // };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:1/2 font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Login</button> */}
                <input
                  // {TODO : apply disabled for re captcha}
                  // disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="login"
                  name=""
                  id=""
                />
              </div>
            </form>
            <p className="text-center my-3 text-xl">
              <small>
                New Here?{" "}
                <Link to="/signup">
                  <span className="font-bold text-orange-400 underline">
                    Create an Account
                  </span>
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

// import { Link, useLocation, useNavigate } from "react-router-dom";
// import img from "../../assets/BannerImg/papeer.png";
// import React, { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// import Swal from "sweetalert2";

// const Login = () => {
//   const { signIn, signInWithGoogle } = useContext(AuthContext);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.drom?.pathname || "/";

//   const handleLogin = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);
//     signIn(email, password).then((result) => {
//       const user = result.user;
//       console.log(user);
//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Your work has been saved",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//       navigate(from, { replace: true });
//     });
//   };

//   // google sign In

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Your work has been saved",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     } catch (error) {
//       console.log(error);
//       Swal.fire({
//         title: "Already Login?",
//         text: "That thing is still around?",
//         icon: "question",
//       });
//     }
//   };

//   return (
//     <div>
//       <div className="my-12 mt-24 flex justify-center items-center min-h-[calc(100vh-306px)] ">
//         <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl   bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_4px] bg-no-repeat bg-bottom">
//           <div className="hidden bg-cover bg-center lg:block lg:w-1/2">
//             <h1 className="text-3xl text-center mx-auto mt-5 font-bold underline">
//               Login Now!
//             </h1>
//             <img className="mt-20" src={img} alt=""></img>
//           </div>

//           <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
//             <div className="flex justify-center mx-auto">
//               <img className="w-auto h-24 sm:h-8" src={img} alt="" />
//             </div>

//             <p className="mt-3 text-xl text-center text-gray-600 ">
//               Welcome back!
//             </p>

//             <div
//               onClick={handleGoogleSignIn}
//               // onClick={handleGoogleSignIn}
//               className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
//             >
//               <div className="px-4 py-2">
//                 <svg className="w-6 h-6" viewBox="0 0 40 40">
//                   <path
//                     d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
//                     fill="#FFC107"
//                   />
//                   <path
//                     d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
//                     fill="#FF3D00"
//                   />
//                   <path
//                     d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
//                     fill="#4CAF50"
//                   />
//                   <path
//                     d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
//                     fill="#1976D2"
//                   />
//                 </svg>
//               </div>

//               <span className="w-5/6 px-4 py-3 font-bold text-center">
//                 Sign in with Google
//               </span>
//             </div>

//             <div className="flex items-center justify-between mt-4">
//               <span className="w-1/5 border-b  lg:w-1/4"></span>

//               <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
//                 or login with email
//               </div>

//               <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
//             </div>
//             <form onSubmit={handleLogin}>
//               <div className="mt-4">
//                 <label
//                   className="block mb-2 text-sm font-medium text-gray-600 "
//                   htmlFor="LoggingEmailAddress"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   id="LoggingEmailAddress"
//                   autoComplete="email"
//                   name="email"
//                   className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
//                   type="email"
//                 />
//               </div>

//               <div className="mt-4">
//                 <div className="flex justify-between">
//                   <label
//                     className="block mb-2 text-sm font-medium text-gray-600 "
//                     htmlFor="loggingPassword"
//                   >
//                     Password
//                   </label>
//                 </div>

//                 <input
//                   id="loggingPassword"
//                   autoComplete="current-password"
//                   name="password"
//                   className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
//                   type="password"
//                 />
//               </div>
//               <div className="mt-6">
//                 <button
//                   type="submit"
//                   className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
//                 >
//                   Sign In
//                 </button>
//               </div>
//             </form>

//             <div className="flex items-center justify-between mt-4">
//               <span className="w-1/5 border-b  md:w-1/4"></span>

//               <Link
//                 to="/signup"
//                 className="text-xs text-gray-500 uppercase  hover:underline"
//               >
//                 or sign up
//               </Link>

//               <span className="w-1/5 border-b  md:w-1/4"></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// // import { Link } from "react-router-dom";
// // import img from "../../assets/BannerImg/papeer.png";

// // import { AuthContext } from "../../provider/AuthProvider";
// // import { useContext } from "react";

// // const handleLogin = (event) => {
// //   event.preventDefault();
// //   const form = event.target;
// //   const email = form.email.value;
// //   const password = form.password.value;
// //   console.log(email, password);
// //   signIn(email, password).then((result) => {
// //     const user = result.user;
// //     console.log(user);
// //   });
// // };

// // const { signIn } = useContext(AuthContext);
// // const Login = () => {
// //   return (
// //     <div>
// //       <div className="my-12 mt-24 flex justify-center items-center min-h-[calc(100vh-306px)] ">
// //         <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl   bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_4px] bg-no-repeat bg-bottom">
// //           <div className="hidden bg-cover bg-center lg:block lg:w-1/2">
// //             <h1 className="text-3xl text-center mx-auto mt-5 font-bold underline">
// //               Login Now!
// //             </h1>
// //             <img className="mt-20" src={img} alt=""></img>
// //           </div>

// //           <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
// //             <div className="flex justify-center mx-auto">
// //               <img className="w-auto h-24 sm:h-8" src={img} alt="" />
// //             </div>

// //             <p className="mt-3 text-xl text-center text-gray-600 ">
// //               Welcome back!
// //             </p>

// //             <div
// //               // onClick={handleGoogleSignIn}
// //               className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
// //             >
// //               <div className="px-4 py-2">
// //                 <svg className="w-6 h-6" viewBox="0 0 40 40">
// //                   <path
// //                     d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
// //                     fill="#FFC107"
// //                   />
// //                   <path
// //                     d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
// //                     fill="#FF3D00"
// //                   />
// //                   <path
// //                     d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
// //                     fill="#4CAF50"
// //                   />
// //                   <path
// //                     d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
// //                     fill="#1976D2"
// //                   />
// //                 </svg>
// //               </div>

// //               <span className="w-5/6 px-4 py-3 font-bold text-center">
// //                 Sign in with Google
// //               </span>
// //             </div>

// //             <div className="flex items-center justify-between mt-4">
// //               <span className="w-1/5 border-b  lg:w-1/4"></span>

// //               <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
// //                 or login with email
// //               </div>

// //               <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
// //             </div>
// //             <form onSubmit={handleLogin}>
// //               <div className="mt-4">
// //                 <label
// //                   className="block mb-2 text-sm font-medium text-gray-600 "
// //                   htmlFor="LoggingEmailAddress"
// //                 >
// //                   Email Address
// //                 </label>
// //                 <input
// //                   id="LoggingEmailAddress"
// //                   autoComplete="email"
// //                   name="email"
// //                   className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
// //                   type="email"
// //                 />
// //               </div>

// //               <div className="mt-4">
// //                 <div className="flex justify-between">
// //                   <label
// //                     className="block mb-2 text-sm font-medium text-gray-600 "
// //                     htmlFor="loggingPassword"
// //                   >
// //                     Password
// //                   </label>
// //                 </div>

// //                 <input
// //                   id="loggingPassword"
// //                   autoComplete="current-password"
// //                   name="password"
// //                   className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
// //                   type="password"
// //                 />
// //               </div>
// //               <div className="mt-6">
// //                 <button
// //                   type="submit"
// //                   className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
// //                 >
// //                   Sign In
// //                 </button>
// //               </div>
// //             </form>

// //             <div className="flex items-center justify-between mt-4">
// //               <span className="w-1/5 border-b  md:w-1/4"></span>

// //               <Link
// //                 to="/register"
// //                 className="text-xs text-gray-500 uppercase  hover:underline"
// //               >
// //                 or sign up
// //               </Link>

// //               <span className="w-1/5 border-b  md:w-1/4"></span>
// //               <p>
// //                 <small>New here?</small>
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ------------------- */}
// //     </div>
// //   );
// // };

// // export default Login;
