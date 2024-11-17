import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({children}) => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/"></Navigate>; // redirect
  } else {
    return children;
  }
};
// agar token exist krta hai to home me redirect kro

export default PublicRoute;
