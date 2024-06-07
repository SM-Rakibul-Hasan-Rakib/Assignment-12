import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      {/* Footer section */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
