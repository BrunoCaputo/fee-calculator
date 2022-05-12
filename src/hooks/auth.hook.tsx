import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../config/firebase";

const formatAuthUser = (user: any) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState: any) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser as any);
    setLoading(false);
  };

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const logInWithEmailAndPassword = async (
    email?: string,
    password?: string
  ) => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password);
    }
  };

  const createAccountWithEmailAndPassword = async (
    email?: string,
    password?: string
  ) => {
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password);
    }
  };

  const logOut = async () => signOut(auth).then(clear);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    logInWithEmailAndPassword,
    createAccountWithEmailAndPassword,
    logOut,
  };
}
