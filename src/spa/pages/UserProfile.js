import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  return (
    <div className="bg-warning">
      <h4>Profile of #{id}</h4>
    </div>
  );
};

export default UserProfile;
