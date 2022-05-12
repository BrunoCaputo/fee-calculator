import { createContext, useContext } from "react";
import useFirebaseAuth from "../hooks/auth.hook";

const authUserContext = createContext({
  authUser: null,
  loading: true,
  logInWithEmailAndPassword: async () => {},
  createAccountWithEmailAndPassword: async () => {},
  logOut: async () => {},
});

export function AuthUserProvider({ children }: any) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);
