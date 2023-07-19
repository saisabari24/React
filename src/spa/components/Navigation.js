import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="navigation bg-warning">
      <Link className="link" to="login">
        Login
      </Link>
      <Link className="link" to="users">
        Users
      </Link>
      <Link className="link" to="about">
        About
      </Link>

      {/*Lazy loading*/}
      <Link className="link" to="dynamic">
        Profile
      </Link>
    </div>
  );
};
