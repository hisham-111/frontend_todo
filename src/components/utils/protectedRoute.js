import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Todo from "../todoComponent/todo";
import cookie from "react-cookies";
import TodoPage from "../../pages/todoPage/todoPage";

const ProtectedRoute = ({ children }) => {
  const authToken = cookie.load("auth_token");
  const isLoggedIn = !!authToken;

  if (!isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  } else {
    return <TodoPage>{children}</TodoPage>;
  }
};

export default ProtectedRoute;
