import React from "react";
import { useNavigate } from "react-router-dom";

export const HomeButton = () => {
  let navigator = useNavigate();
  const handleClick = () => {
    navigator("/");
  };

  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary">
        Go to Home
      </button>
    </div>
  );
};
