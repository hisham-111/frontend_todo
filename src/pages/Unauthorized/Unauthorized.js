import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Unauthorized = () => {
  return (
    <div className="unauthorized-container">
      <h1 className="admin-unauthorized">Unauthorized Access</h1>
      <p>You do not have permission to access the admin dashboard.</p>
      <p>Please log in as an admin to access this page.</p>
      <Link to="/" className="loginAs-admin">
        Login as Admin
      </Link>
    </div>
  );
};

export default Unauthorized;
