import React from "react";
import "./SpaApp.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import Dynamic from "./pages/Dynamic";

const SpaApp = () => {
  return (
    <div className="App">
      <h2>SPA project by Sai</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<UserProfile />} />
        </Route>
        <Route path="dynamic" element={<Dynamic />} />
      </Routes>
    </div>
  );
};

export default SpaApp;
