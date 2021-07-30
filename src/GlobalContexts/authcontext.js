import React from "react";
import { auth } from "../Services/firebase";

const AuthContext = React.createContext();

function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState();
  const [ loading,setLoading]=React.useState(true)
  React.useEffect(() => {
    let unmounted = false;
    if(!unmounted){
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
          })
    }
    

    return () => {unmounted=true}
  }, [])

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const value = {
    currentUser,
    signup,
    login,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}


export default useAuth;
