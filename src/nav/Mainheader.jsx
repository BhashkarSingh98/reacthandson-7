import React from "react";
import { Outlet } from "react-router-dom";
import Navlink from "./Navlink";

const Mainheader = () => {
  return (
    <>
      <div>
        <Navlink />
        <Outlet />
      </div>
    </>
  );
};

export default Mainheader;
