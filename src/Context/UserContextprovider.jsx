import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setuser] = useState(false);
  const [category, setCategory] = useState();
  const [details, setdetails] = useState();
  const [roll, setroll] = useState();
  const [userdata, setuserdata] = useState([]);
  const [offer, setoffer] = useState([]);

  return (
    <UserContext.Provider
      value={{
        userdata,
        setuserdata,
        user,
        setuser,
        category,
        setCategory,
        details,
        setdetails,
        roll,
        setroll,
        offer,
        setoffer,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
