import { Link, Navigate, useNavigate } from "react-router-dom";
// import logo from "../../assets/2.png";
import img from "../../assets/BannerImg/signup.jpg";

// import { toast } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Signup = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, user, setUser, signInWithGoogle } =
    useContext(AuthContext);
  // console.log(createUser);
  // handleSignupp()
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, password, name, photo);

    createUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
        updateUserProfile(name, photo)
          .then(() => {
            console.log("Success");
            toast.success("Register Success");
          })
          .catch((error) => {
            console.log(error);
            toast.warning("Invalid ");
          });
        // setUser({ ...user });
        // toast.success("Register Success");
      })
      .catch(() => {
        // toast.warning("invalid Credential");
        // console.log();
      });

    console.log(err);
    //   toast.error(err?.message);
    // }
  };

  // handlegoogle login
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Signin successful");
      navigate("/"); // Corrected usage of navigate here
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  // const handleGoogleSignIn = async () => {
  //   try {
  //     await signInWithGoogle();
  //     toast.success("Signin successful");
  //     Navigate("/");
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err?.message);
  //   }

  return (
    <div className="flex mt-8 justify-center items-center min-h-[calc(100vh-306px)]">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            {/* <img className="w-auto h-16 sm:h-8" src={img} alt="" /> */}
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Get Your Free Account Now.
          </p>

          <div
            onClick={handleGoogleSignIn}
            className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
              or Register with email
            </div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleSignup}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="name"
              >
                Username
              </label>
              <input
                id="name"
                autoComplete="name"
                name="name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                id="photo"
                autoComplete="photo"
                name="photo"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
        <div className="hidden bg-cover bg-center lg:block lg:w-1/2">
          <img src={img} alt="" />
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Signup;

// import { useForm } from "react-hook-form";
// // import { AuthContext } from "../Provider/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";

// import Swal from "sweetalert2";
// import toast from "react-hot-toast";
// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";

// // import React from 'react';

// const SignUp = () => {
//   const { createUser, signInWithGoogle, updateUserProfaile } =
//     useContext(AuthContext);
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     // watch,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     createUser(data.email, data.password).then((result) => {
//       const loggedUser = result.user;
//       console.log(loggedUser);
//       updateUserProfaile(data.name, data.PhotoUrl)
//         .then(() => {
//           console.log("user profile info updated");
//           reset();
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "User Created Successfully!",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           navigate("/login");
//         })
//         .catch((error) => console.log(error));
//     });
//   };

//   // google sign in
//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//       toast.success("Signin successful");
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//       toast.error(err?.message);
//     }
//   };

//   // console.log(watch("example")); // watch input value by passing the name of it
//   return (
//     <>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">SignUp now!</h1>
//             <p className="py-6">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//           </div>
//           <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <input
//                   defaultValue="test"
//                   {...register("name", { required: true })}
//                   type="name"
//                   name="name"
//                   placeholder="Type your name"
//                   className="input input-bordered"
//                   required
//                 />
//                 {errors.name && (
//                   <span className="font-bold text-red-600">
//                     Name field is required
//                   </span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">PhotoUrl</span>
//                 </label>
//                 <input
//                   defaultValue="test"
//                   {...register("PhotoUrl", { required: true })}
//                   type="text"
//                   name="PhotoUrl"
//                   placeholder="Type PhotoUrl"
//                   className="input input-bordered"
//                   required
//                 />
//                 {errors.PhotoUrl && (
//                   <span className="font-bold text-red-600">
//                     PhotoUrl is required
//                   </span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   defaultValue="test"
//                   {...register("email", { required: true })}
//                   type="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                 />
//                 {errors.email && (
//                   <span className="font-bold text-red-600">
//                     Email field is required
//                   </span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   {...register("password", {
//                     defaultValue: "test",
//                     minLength: 6,
//                     maxLength: 20,
//                     pattern: /^(?=.*[A-Z])(?=.*[@#$&*])(?=.*[0-9])(?=.*[a-z])/, // Corrected regex
//                   })}
//                   type="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                 />

//                 {errors.password?.type === "minLength" && (
//                   <p className="text-red-600 font-sans font-bold">
//                     Password must be 6 characters is required
//                   </p>
//                 )}
//                 {errors.password?.type === "maxLength" && (
//                   <p className="text-red-600 font-sans font-bold">
//                     Password must be less than 20 characters is required
//                   </p>
//                 )}
//                 {errors.password?.type === "pattern" && (
//                   <p className="text-red-600 font-sans font-bold">
//                     Password must have one upperCase one lower case, one number
//                     and special characters
//                   </p>
//                 )}
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <input
//                   className="btn btn-primary"
//                   type="submit"
//                   value="signup"
//                 />
//                 {/* <button className="btn btn-primary">Sign UP</button> */}
//               </div>
//             </form>
//             <div
//               onClick={handleGoogleSignIn}
//               className="flex cursor-pointer items-center mx-auto mb-3 justify-center w-3/4 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
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
//             <p className="text-xl my-4 text-center font-bold">
//               <small>
//                 Already have an Account{" "}
//                 <Link className="text-blue-500 underline" to="/login">
//                   Login{" "}
//                 </Link>
//               </small>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;
