import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
// import Product from "../Commponents/Product";
import Product from "../Commponents/Product";
import Category from "../Commponents/Category";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/signup/Signup";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: (
          <PrivateRoute>
            {" "}
            <Product></Product>
          </PrivateRoute>
        ),
      },
      {
        path: "/category",
        element: <Category></Category>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
