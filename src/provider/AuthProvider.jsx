/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebasecongif";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };
  const upDateProfile = (fullName, photoURL) => {
    return updateProfile(user, {
      displayName: fullName,
      photoURL: photoURL,
    });
  };

  const updateUserProfile = (name, photo) => {
    return upDateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("CurrentUser-->", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    upDateProfile,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

// import { createContext, useEffect, useState } from "react";
// import { app } from "../firebase/firebasecongif";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { MdUnsubscribe } from "react-icons/md";
// // import { GoogleAuthProvider } from "firebase/auth/web-extension";
// import { updateProfile } from "firebase/auth/cordova";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";

// // import React from 'react';
// export const AuthContext = createContext(null);

// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// // const googleProvider = new GoogleAuthProvider();
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const signInWithGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   const logOut = async () => {
//     setLoading(true);
//     return signOut(auth);
//   };
//   const updateUserProfile = (name, photo) => {
//     return updateProfile(auth.currentUser, {
//       displayName: name,
//       PhotoUrl: photo,
//     });
//   };
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log("Current user", currentUser);
//       setLoading(false);
//     });
//     return unsubscribe();
//   }, []);

//   const authInfo = {
//     user,
//     signInWithGoogle,
//     updateUserProfile,
//     loading,
//     createUser,
//     signIn,
//     logOut,
//   };
//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;
