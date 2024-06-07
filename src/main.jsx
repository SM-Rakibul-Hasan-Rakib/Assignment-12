import React from "react";
import ReactDOM from "react-dom/client";
import UserContextProvider from "./Context/UserContextprovider";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/ReactRouter";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="bg-[#] max-w-screen-xl mx-auto">
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>
);
