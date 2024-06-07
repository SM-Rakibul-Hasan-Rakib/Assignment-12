// import React from "react";

import { useContext } from "react";
import { GoCommandPalette } from "react-icons/go";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

import { AuthContext } from "../../provider/AuthProvider";
import UserContext from "../../Context/UserContext";

const Navbar = () => {
  const { logOut } = useContext(AuthContext);
  const { user, setuser } = useContext(UserContext);
  console.log(user);
  // const [cart] = useCarts();
  // console.log(cart);
  const handleLogOut = () => {
    setuser(false);
    localStorage.clear;
  };
  const navLink = (
    <>
      <div className="text-white flex justify-center items-center flex-row  md:flex-row">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>

        <li>
          <Link to="/menu">
            Menu <GoCommandPalette></GoCommandPalette>{" "}
          </Link>
        </li>
        <li>
          <Link to={"/order/salad"}>Order</Link>
        </li>
        <li>
          {/* <Link to="/dashboard/cart"> */}
          {/* <button className="btn">
              <FaShoppingCart className="mr-4"></FaShoppingCart> */}
          {/* <div className="badge badge-secondary">+0{cart.length}</div> */}
          {/* </button> */}
          {/* </Link> */}
        </li>
        {/* <li>
          <Link to="/login">Login</Link>
        </li> */}
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </div>
    </>
  );
  return (
    <div>
      <div className="fixed z-10 bg-opacity-30 navbar bg-black text-white mx-auto max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content md:flex md:justify-center md:items-center mt-3 z-[1] p-2 shadow  text-center rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" text-white menu menu-horizontal px-1 ">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div
              data-tip={user.displayName}
              className="tooltip tooltip-bottom avatar"
            >
              <div className="w-14 mr-2 rounded-full ring ring-primary ring-offset-bam run devse-100 ring-offset-2">
                <img src={user && user.photoURL}></img>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../provider/AuthProvider";
// import { IoHomeSharp } from "react-icons/io5";
// import { AiFillProduct } from "react-icons/ai";
// import { GrLogin } from "react-icons/gr";
// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   // const handleLogout = () => {
//   //   logOut()
//   //     .then(() => {})
//   //     .catch((error = console.log(error)));
//   // };
//   const navLink = (
//     <div className="flex items-center justify-center">
//       <li className="flex flex-1 justify-center items-center mx-auto">
//         <NavLink to="/">
//           {" "}
//           <button className="relative flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200 ">
//             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
//               <IoHomeSharp /> Home
//             </span>
//           </button>
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/product">
//           {" "}
//           <button className="relative flex items-center justify-center p-0.5 mb-2 text-center me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200 ">
//             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
//               <AiFillProduct /> Product
//             </span>
//           </button>
//         </NavLink>
//       </li>
//     </div>
//   );
//   return (
//     <div>
//       <div className="navbar ">
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
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               {navLink}
//             </ul>
//           </div>
//           <a className="btn btn-ghost text-xl">daisyUI</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navLink}</ul>
//         </div>
//         <div className="navbar-end">
//           {user ? (
//             <>
//               {/* <span>{user.displayName}</span> */}
//               <button onClick={handleLogOut} className="btn btn-ghost">
//                 LogOut
//               </button>
//             </>
//           ) : (
//             <>
//               <li>
//                 <Link to="/login">Login</Link>
//               </li>
//             </>
//           )}
//           {user && (
//             <div className="dropdown dropdown-end z-50">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost btn-circle avatar"
//               >
//                 <div
//                   title={user?.displayName}
//                   className="w-10 flex items-center justify-center  rounded-full"
//                 >
//                   <img
//                     referrerPolicy="no-referrer"
//                     alt="User Profile Photo"
//                     src={user?.photoURL}
//                   />
//                 </div>
//               </div>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//               >
//                 <li className="mt-2"></li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// // const Navbar = () => {
// //   const navLinks = (
// //     <>
// //       <div className="font-bold flex md:flex-raw">
// //         <li>
// //           <NavLink to="/"> Home</NavLink>
// //         </li>

// //         <li>
// //           <NavLink to="/product">Products</NavLink>
// //         </li>
// //         <li>
// //           <NavLink to="/category">category</NavLink>
// //         </li>
// //       </div>
// //     </>
// //   );
// //   return (
// //     <>
// //       <div className="navbar my-5 ] rounded-badge">
// //         <div className="navbar-start">
// //           <div className="dropdown">
// //             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className="h-5 w-5"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 stroke="currentColor"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth="2"
// //                   d="M4 6h16M4 12h8m-8 6h16"
// //                 />
// //               </svg>
// //             </div>
// //             <ul
// //               tabIndex={0}
// //               className="menu menu-sm dropdown-content hover:bg-blue-600 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
// //             >
// //               {navLinks}
// //             </ul>
// //           </div>
// //           <a className="btn btn-ghost text-xl">daisyUI</a>
// //         </div>
// //         <div className="navbar-center hidden lg:flex">
// //           <ul className="menu  menu-horizontal px-1">{navLinks}</ul>
// //         </div>
// //         <div className="navbar-end">
// //           <a className="btn">Button</a>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Navbar;
