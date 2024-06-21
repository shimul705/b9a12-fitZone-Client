import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateUserProfile = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    }).then(() => {
      setLoading(false);
    }).catch((error) => {
      console.error("Error updating profile: ", error);
      setLoading(false);
    });
  }


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const signInWithgithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  // On state chenge user dhore rakhe
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
      console.log('observing current user', currentUser)
    });
    return () => {
      unSubscribe();
    }


  }, [])



  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    signInWithGoogle,
    signInWithgithub,
    updateUserProfile
  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;

AuthProviders.propTypes = {
  children: PropTypes.node
}