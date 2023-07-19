import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { HomeButton } from "../components/HomeButton";

const Users = () => {
  const navigate = useNavigate();
  const location = useLocation(); // window.location.href
  console.log("Location : ", location.pathname);

  const handleClick = (userId) => {
    navigate(`/users/${userId}`); //   localhost:3000/users/123
  };
  return (
    <div className="bg-light text-dark">
      <h3>Users Page</h3>
      <button className="user-link" onClick={() => handleClick("123")}>
        View user profile of #123
      </button>

      <Outlet />
      <HomeButton />
    </div>
  );
};

export default Users;
