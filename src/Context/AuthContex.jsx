import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Data/Firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <AuthContext.Provider value={{ currentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
