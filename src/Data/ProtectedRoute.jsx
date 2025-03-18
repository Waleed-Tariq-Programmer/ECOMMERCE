import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContex";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      // alert("Please Login First");
    }
  }, [currentUser]);

  if (!currentUser) {
    // return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
