import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";


const provider = new GoogleAuthProvider();


const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  // google Create a password-based account
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update Profile 
  const updateUserProfile = (name, photoUrl) =>{
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl
    })
  }  

  // google signup and login
  const socialSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, provider);
  }


  // signOut 
  const userLogOut = () =>{
    setLoading(true);
    return signOut(auth);
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    updateUserProfile,
    signIn,
    userLogOut,
    socialSignIn,
    Loading,
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
