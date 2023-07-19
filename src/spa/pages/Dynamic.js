import React, { Suspense } from "react";

const ProfileComponent = React.lazy(() => import("../profile/Profile"));

const Dynamic = () => {
  return (
    <div>
      <h2>I am lazy loaded profile component</h2>
      <Suspense fallback={<h5>Loading please wait</h5>}>
        <ProfileComponent />
      </Suspense>
    </div>
  );
};

export default Dynamic;
