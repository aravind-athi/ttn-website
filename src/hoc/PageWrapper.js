import React from "react";
import { Outlet } from "react-router-dom";

const PageWrapper = () => {
  return (
    <div className="page-wrapper">
      <Outlet />
    </div>
  );
};

export default PageWrapper;
