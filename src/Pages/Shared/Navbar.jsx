// import React from 'react';
import { useContext, useEffect, useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FcHome } from "react-icons/fc";
import { FcDataProtection } from "react-icons/fc";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import UpdateProfile from "../../Commponents/UpdateProfile";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
  };
  const handleTheme = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="navbar fixed z-10 bg-opacity-5 flex  items-center justify-center border  bg-base-100  container max-w-screen-xl mx-auto">
      <div className="flex-1">
        {/*  */}

        {/*  */}
        <div className="flex gap-2 items-center">
          {/* <img className="w-auto rounded-full h-20" src={img} alt="" /> */}
          <span className="font-bold text-3xl">Dooc Care</span>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu text-white font-extrabold menu-horizontal navbar-center mt-5 text-center px-1">
          <li>
            <NavLink to="/">
              <FcHome></FcHome> Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/product">
              <FcDataProtection></FcDataProtection> product
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <Link to="/dashboard">
              <button className="btn">
                Dashboard
                <div className="badge badge-secondary">
                  <LuLayoutDashboard></LuLayoutDashboard> +99
                </div>
              </button>
            </Link>
          </li>
          {/* {user && <NavLink to="/updateprofile">UpdateProfile</NavLink>} */}
          {/* toggole-start */}
          <button onClick={handleTheme} className="md:hidden">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </button>
          <button className="ml-4 mr-4" onClick={handleTheme}>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </button>
          {/* toggole-end */}
          {user ? (
            <button onClick={logOut} className="btn hidden   btn-success">
              Logout
            </button>
          ) : (
            <Link to="/login">
              {" "}
              <button className="btn ">Login</button>
            </Link>
          )}

          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div
                  title={user?.displayName}
                  className="w-10 flex items-center justify-center  rounded-full"
                >
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content my-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="mt-2"> Name</li>
                {user ? (
                  <button onClick={logOut} className="btn bg-[#F0FDF4]">
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    {" "}
                    <button className="btn ">Login</button>
                  </Link>
                )}
                <div
                  title={user?.displayName}
                  className="w-10 flex items-center justify-center  rounded-full"
                ></div>
              </ul>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

// ***********
// <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
//   <div className="px-4">
//     <div className="flex items-center justify-between">
//       <div className="flex shrink-0">
//         <a aria-current="page" className="flex items-center" href="/">
//           <img className="h-{30px} w-16 rounded-full" src={img} alt="" />
//           {/* logo */}
//           <div className="dark:bg-gray-800 flex justify-center items-center pl-1">
//             <div className=" p-2 rounded-md shadow-lg shadow-orange-300">
//               <div className="flex items-end gap-1">
//                 <span className="text-3xl font-semibold dark:text-white">
//                   D
//                 </span>
//                 <svg
//                   className="animate-spin"
//                   fill="#F97316"
//                   width="30px"
//                   height="30px"
//                   viewBox="0 0 50 50"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     id="Football"
//                     d="M66.091,75h-.434a24.926,24.926,0,0,1-8.332-1.544q-.532-.2-1.056-.418c-.229-.1-.456-.2-.682-.3l-.022-.01-.083-.039a25,25,0,0,1-6.2-4.1l-.069-.062-.011-.01q-.446-.405-.876-.835-.448-.448-.872-.916a25.022,25.022,0,0,1-4.1-6.173q-.2-.424-.382-.857-.139-.328-.268-.659a.307.307,0,0,0-.012-.031c-.012-.03-.023-.06-.034-.09a24.851,24.851,0,0,1-1.613-7.569c0-.008,0-.016,0-.024l0-.063c0-.038,0-.076-.006-.114v-.014c-.007-.143-.012-.286-.016-.43Q41,50.369,41,50a24.937,24.937,0,0,1,1.646-8.941.25.25,0,0,0,.009-.023c.008-.02.016-.04.023-.061s.022-.056.033-.084l.014-.035c.077-.2.157-.391.239-.587.037-.087.075-.175.113-.261l.024-.057.023-.052a25.041,25.041,0,0,1,4.434-6.78l.053-.058.018-.019q.337-.366.692-.72.423-.423.861-.822l.058-.053.007-.007a25.043,25.043,0,0,1,6.235-4.128l.069-.032.037-.016q.336-.154.678-.3.4-.167.8-.32A24.907,24.907,0,0,1,65.723,25h.552a24.915,24.915,0,0,1,9.288,1.893l.056.022.021.009.092.039.272.117.013.005.1.046.071.031.042.019a25.031,25.031,0,0,1,6.627,4.358l.01.009.057.051c.254.235.5.475.751.721s.459.468.68.707a25.024,25.024,0,0,1,4.514,6.862l.028.063c.007.016.015.034.022.05.018.04.035.079.052.119,0,0,0,0,0,0,.021.047.041.094.06.14l.045.107.01.023.036.086.025.061a.069.069,0,0,0,0,.01,25.09,25.09,0,0,1,.085,18.676c-.01.027-.021.054-.032.081,0,.01-.009.021-.013.031-.052.13-.106.258-.16.387q-.186.441-.389.873c0,.007-.007.016-.011.022-.014.028-.026.056-.04.083a25.059,25.059,0,0,1-4.089,6.1q-.4.443-.83.869c-.251.251-.506.5-.765.734l-.007.005-.075.069a25.023,25.023,0,0,1-6.594,4.328l-.051.023-.06.027-.114.05h0c-.092.04-.184.08-.276.119l-.1.041A24.911,24.911,0,0,1,66.337,75h-.247Zm-6.853-4.063a22.04,22.04,0,0,0,13.518,0l2.128-6.782L70.485,58H61.515l-4.4,6.156ZM75.169,70A22.1,22.1,0,0,0,82,65.087l-5.263-.078ZM50,65.08A22.093,22.093,0,0,0,56.828,70L55.267,65Zm33.651-1.957A21.886,21.886,0,0,0,88,50c0-.116,0-.232,0-.347l-6.344-4.361-6.836,3.418L72.11,56.833l4.417,6.184ZM44,49.655q0,.173,0,.346a21.881,21.881,0,0,0,4.345,13.112l7.136-.107,4.409-6.173-2.708-8.124L50.356,45.3Zm15.174-1.287L61.721,56h8.558l2.544-7.632L66,43.25ZM44.189,47.113l4.6-3.159-1.775-5.065A21.858,21.858,0,0,0,44.189,47.113Zm39.022-3.165,4.6,3.162a21.842,21.842,0,0,0-2.83-8.222ZM57.894,46.829,65,41.5v-8l-5.869-4.4a22.085,22.085,0,0,0-10.711,7.69l2.254,6.432Zm16.212,0,7.226-3.613,2.249-6.428A22.1,22.1,0,0,0,72.869,29.1L67,33.5v8ZM61.592,28.444,66,31.75l4.409-3.307a22.124,22.124,0,0,0-8.817,0Z"
//                     transform="translate(-41 -25)"
//                   />
//                 </svg>
//                 <svg
//                   className="animate-bounce"
//                   fill="#F97316"
//                   width="20px"
//                   height="20px"
//                   viewBox="0 0 50 50"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     id="Football"
//                     d="M66.091,75h-.434a24.926,24.926,0,0,1-8.332-1.544q-.532-.2-1.056-.418c-.229-.1-.456-.2-.682-.3l-.022-.01-.083-.039a25,25,0,0,1-6.2-4.1l-.069-.062-.011-.01q-.446-.405-.876-.835-.448-.448-.872-.916a25.022,25.022,0,0,1-4.1-6.173q-.2-.424-.382-.857-.139-.328-.268-.659a.307.307,0,0,0-.012-.031c-.012-.03-.023-.06-.034-.09a24.851,24.851,0,0,1-1.613-7.569c0-.008,0-.016,0-.024l0-.063c0-.038,0-.076-.006-.114v-.014c-.007-.143-.012-.286-.016-.43Q41,50.369,41,50a24.937,24.937,0,0,1,1.646-8.941.25.25,0,0,0,.009-.023c.008-.02.016-.04.023-.061s.022-.056.033-.084l.014-.035c.077-.2.157-.391.239-.587.037-.087.075-.175.113-.261l.024-.057.023-.052a25.041,25.041,0,0,1,4.434-6.78l.053-.058.018-.019q.337-.366.692-.72.423-.423.861-.822l.058-.053.007-.007a25.043,25.043,0,0,1,6.235-4.128l.069-.032.037-.016q.336-.154.678-.3.4-.167.8-.32A24.907,24.907,0,0,1,65.723,25h.552a24.915,24.915,0,0,1,9.288,1.893l.056.022.021.009.092.039.272.117.013.005.1.046.071.031.042.019a25.031,25.031,0,0,1,6.627,4.358l.01.009.057.051c.254.235.5.475.751.721s.459.468.68.707a25.024,25.024,0,0,1,4.514,6.862l.028.063c.007.016.015.034.022.05.018.04.035.079.052.119,0,0,0,0,0,0,.021.047.041.094.06.14l.045.107.01.023.036.086.025.061a.069.069,0,0,0,0,.01,25.09,25.09,0,0,1,.085,18.676c-.01.027-.021.054-.032.081,0,.01-.009.021-.013.031-.052.13-.106.258-.16.387q-.186.441-.389.873c0,.007-.007.016-.011.022-.014.028-.026.056-.04.083a25.059,25.059,0,0,1-4.089,6.1q-.4.443-.83.869c-.251.251-.506.5-.765.734l-.007.005-.075.069a25.023,25.023,0,0,1-6.594,4.328l-.051.023-.06.027-.114.05h0c-.092.04-.184.08-.276.119l-.1.041A24.911,24.911,0,0,1,66.337,75h-.247Zm-6.853-4.063a22.04,22.04,0,0,0,13.518,0l2.128-6.782L70.485,58H61.515l-4.4,6.156ZM75.169,70A22.1,22.1,0,0,0,82,65.087l-5.263-.078ZM50,65.08A22.093,22.093,0,0,0,56.828,70L55.267,65Zm33.651-1.957A21.886,21.886,0,0,0,88,50c0-.116,0-.232,0-.347l-6.344-4.361-6.836,3.418L72.11,56.833l4.417,6.184ZM44,49.655q0,.173,0,.346a21.881,21.881,0,0,0,4.345,13.112l7.136-.107,4.409-6.173-2.708-8.124L50.356,45.3Zm15.174-1.287L61.721,56h8.558l2.544-7.632L66,43.25ZM44.189,47.113l4.6-3.159-1.775-5.065A21.858,21.858,0,0,0,44.189,47.113Zm39.022-3.165,4.6,3.162a21.842,21.842,0,0,0-2.83-8.222ZM57.894,46.829,65,41.5v-8l-5.869-4.4a22.085,22.085,0,0,0-10.711,7.69l2.254,6.432Zm16.212,0,7.226-3.613,2.249-6.428A22.1,22.1,0,0,0,72.869,29.1L67,33.5v8ZM61.592,28.444,66,31.75l4.409-3.307a22.124,22.124,0,0,0-8.817,0Z"
//                     transform="translate(-41 -25)"
//                   />
//                 </svg>
//                 <span className="text-5xl font-semibold dark:text-white">
//                   c
//                 </span>
//                 <span className="text-2xl font-semibold text-green-500">
//                   CareCenter
//                 </span>
//               </div>
//             </div>
//           </div>
//           {/* logo end */}
//           <p className="sr-only">Website Title</p>
//         </a>
//       </div>
//       <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
//         <a
//           aria-current="page"
//           className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
//           href="#"
//         >
//           How it works
//         </a>
//         <a
//           className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
//           href="#"
//         >
//           Pricing
//         </a>
//       </div>
//       <div className="flex items-center justify-end gap-3">
//         <a
//           className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
//           href="/login"
//         >
//           Sign in
//         </a>
//         <a
//           className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//           href="/login"
//         >
//           Login
//         </a>
//       </div>
//     </div>
//   </div>
// </header>

export default Navbar;

// import { useContext } from "react";
// import { GoCommandPalette } from "react-icons/go";
// import { Link } from "react-router-dom";

// import { FaShoppingCart } from "react-icons/fa";

// import { AuthContext } from "../../provider/AuthProvider";
// import UserContext from "../../Context/UserContext";

// const Navbar = () => {
//   const { logOut } = useContext(AuthContext);
//   const { user, setuser } = useContext(UserContext);
//   console.log(user);
//   // const [cart] = useCarts();
//   // console.log(cart);
//   const handleLogOut = () => {
//     setuser(false);
//     localStorage.clear;
//   };
//   const navLink = (
//     <>
//       <div className="text-white flex justify-center items-center flex-row  md:flex-row">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/product">Product</Link>
//         </li>

//         <li>
//           <Link to="/menu">
//             Menu <GoCommandPalette></GoCommandPalette>{" "}
//           </Link>
//         </li>
//         <li>
//           <Link to={"/order/salad"}>Order</Link>
//         </li>

//         {user ? (
//           <>
//             <button onClick={handleLogOut} className="btn btn-ghost">
//               LogOut
//             </button>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </>
//         )}
//       </div>
//     </>
//   );
//   return (
//     <div>
//       <div className="fixed z-10 bg-opacity-30 navbar bg-black text-white mx-auto max-w-screen-xl">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu  menu-sm dropdown-content md:flex md:justify-center md:items-center mt-3 z-[1] p-2 shadow  text-center rounded-box w-52"
//             >
//               {navLink}
//             </ul>
//           </div>
//           <a className="btn btn-ghost text-xl">Bistro Boss</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className=" text-white menu menu-horizontal px-1 ">{navLink}</ul>
//         </div>
//         <div className="navbar-end">
//           {user && (
//             <div
//               data-tip={user.displayName}
//               className="tooltip tooltip-bottom avatar"
//             >
//               <div className="w-14 mr-2 rounded-full ring ring-primary ring-offset-bam run devse-100 ring-offset-2">
//                 <img src={user && user.photoURL}></img>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
