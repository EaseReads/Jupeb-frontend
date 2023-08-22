import React, { useContext, useEffect, useState } from "react";
import { auth, database } from "../firebase_setup/firebase-config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const UserContext = React.createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  const Signup = async (
    firstName,
    lastName,
    phoneNumber,
    university,
    email,
    password,
    cpassword
  ) => {
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        console.log(result);
        try {
          const ref = doc(database, "users", result.user.uid);
          const docRef = await setDoc(ref, {
            firstName,
            lastName,
            phoneNumber,
            university,
            cpassword,
          });

          alert("Wellcome new User create successfully");
          console.log("Document written with ID: ", docRef.uid);
        } catch (e) {
          console.error("error adding document", e);
        }
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setInterval(() => {
            setError("");
          }, 5000);
          setError("email already in use try another email");
        } else {
          setError(err.message);
        }
      });
  };

  const Login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <UserContext.Provider
      value={{
        Signup,
        error,
        currentUser,
        setCurrentUser,
        Login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
