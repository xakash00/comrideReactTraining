import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  return localStorage.getItem("email") ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
