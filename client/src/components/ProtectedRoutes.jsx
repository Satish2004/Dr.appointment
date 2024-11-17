import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({children}) => {
  if (localStorage.getItem("token")) {
    return children;
  } else {
    <Navigate to="/login"></Navigate>; // redirect
  }
};

// agr token exist nhi krta hai to  direct login 

export default ProtectedRoutes;
